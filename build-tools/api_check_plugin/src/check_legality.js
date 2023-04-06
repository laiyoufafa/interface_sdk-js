/*
* Copyright (c) 2021-2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the 'License');
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

const path = require('path');
const fs = require('fs');
const { parseJsDoc, commentNodeWhiteList, requireTypescriptModule, ErrorType, ErrorLevel, FileType, ErrorValueInfo, createErrorInfo } = require('./utils');
const { checkApiOrder, checkAPITagName, checkInheritTag } = require('./check_jsdoc_value/chek_order');
const { addAPICheckErrorLogs } = require('./compile_info');
const ts = requireTypescriptModule();

// 标签合法性校验
function checkJsDocLegality(node, comments, checkInfoMap) {
  // 必填校验
  legalityCheck(node, comments, commentNodeWhiteList, ['since', 'syscap'], true, checkInfoMap);
  // const定义语句必填
  legalityCheck(node, comments, [ts.SyntaxKind.VariableStatement], ['constant'], true, checkInfoMap,
    (currentNode, checkResult) => {
      return (checkResult && (currentNode.kind !== ts.SyntaxKind.VariableStatement || !/^const\s/.test(currentNode.getText()))) ||
        (!checkResult && currentNode.kind === ts.SyntaxKind.VariableStatement && /^const\s/.test(currentNode.getText()));
    });
  // 'enum'
  legalityCheck(node, comments, [ts.SyntaxKind.EnumDeclaration], ['enum'], true, checkInfoMap,);
  // 'extends'
  legalityCheck(node, comments, [ts.SyntaxKind.ClassDeclaration], ['extends'], true, checkInfoMap,
    (currentNode, checkResult) => {
      let tagCheckResult = false;
      if (ts.isClassDeclaration(currentNode) && currentNode.heritageClauses) {
        const clauses = currentNode.heritageClauses;
        clauses.forEach(claus => {
          if (/^extends\s/.test(claus.getText())) {
            tagCheckResult = true;
          }
        });
      }
      return (checkResult && !tagCheckResult) || (!checkResult && tagCheckResult);
    }
  );
  // 'namespace'
  legalityCheck(node, comments, [ts.SyntaxKind.ModuleDeclaration], ['namespace'], true, checkInfoMap);
  // 'param'
  legalityCheck(node, comments, [ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
  ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.CallSignature, ts.SyntaxKind.Constructor], ['param'], true, checkInfoMap,
    (currentNode, checkResult) => {
      if (!new Set([ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
      ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.Constructor]).has(currentNode.kind)) {
        return true;
      }
      return currentNode.parameters && currentNode.parameters.length > 0;
    }
  );
  // 'returns'
  legalityCheck(node, comments, [ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
  ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.CallSignature], ['returns'], true, checkInfoMap,
    (currentNode, checkResult) => {
      if (!checkResult && !new Set([ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
      ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.CallSignature]).has(currentNode.kind)) {
        return false;
      }
      return !(!checkResult && !new Set([ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
      ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.CallSignature]).has(currentNode.kind)) && (currentNode.type
        && currentNode.type.kind !== ts.SyntaxKind.VoidKeyword);
    }
  );
  // 'useinstead'
  legalityCheck(node, comments, commentNodeWhiteList, ['useinstead'], true, checkInfoMap,
    (currentNode, checkResult) => {
      return new Set(commentNodeWhiteList).has(currentNode.kind);
    }
  );
  // typedef/interface
  legalityCheck(node, comments, [ts.SyntaxKind.InterfaceDeclaration], ['interface', 'typedef'], true, checkInfoMap);
  // 'type', 'readonly'
  legalityCheck(node, comments, [ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.PropertySignature],
    ['type', 'readonly'], false, checkInfoMap);
  // 'default'
  legalityCheck(node, comments, [ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.PropertySignature,
  ts.SyntaxKind.VariableStatement], ['default'], false, checkInfoMap);
  return checkInfoMap;
}
exports.checkJsDocLegality = checkJsDocLegality;

function getIllegalKinds(legalKinds) {
  let illegalKinds = [];
  const legalKindSet = new Set(legalKinds);
  commentNodeWhiteList.forEach(kind => {
    if (!legalKindSet.has(kind)) {
      illegalKinds.push(kind);
    }
  });
  return illegalKinds;
}

function dealSpecialTag(comment, tagName) {
  let checkResult = false;
  let useinsteadResultObj = {
    hasUseinstead: false,
    hasDeprecated: false
  };
  let paramTagNum = 0;
  comment.tags.forEach(tag => {
    if (tagName === 'useinstead') {
      if (tag.tag === tagName) {
        useinsteadResultObj.hasUseinstead = true;
      } else if (tag.tag === 'deprecated') {
        useinsteadResultObj.hasDeprecated = true;
      }
    } else if (((tagName === 'interface' || tagName === 'typedef') && (tag.tag === 'interface' ||
      tag.tag === 'typedef')) || tag.tag === tagName) {
      checkResult = true;
    }
    if (tag.tag === 'param') {
      paramTagNum++;
    }
  });
  return {
    useinsteadResultObj: useinsteadResultObj,
    checkResult: checkResult,
    paramTagNum: paramTagNum
  }
}

function legalityCheck(node, comments, legalKinds, tagsName, isRequire, checkInfoMap, extraCheckCallback) {
  const illegalKinds = getIllegalKinds(legalKinds);
  const illegalKindSet = new Set(illegalKinds);
  const legalKindSet = new Set(legalKinds);
  tagsName.forEach(tagName => {
    comments.forEach((comment, index) => {
      if (!checkInfoMap[index]) {
        checkInfoMap[index] = {
          missingTags: [],
          illegalTags: []
        };
      }
      const dealSpecialTagResult = dealSpecialTag(comment, tagName);
      let parameterNum = 0;
      if (tagName === 'since') {
      }
      if (tagName === 'param' && (ts.isMethodDeclaration(node) || ts.isMethodSignature(node) ||
        ts.isFunctionDeclaration(node) || ts.isCallSignatureDeclaration(node) || ts.isConstructorDeclaration(node))) {
        parameterNum = node.parameters.length;
        checkResult = parameterNum !== dealSpecialTagResult.paramTagNum;
      }
      let extraCheckResult = false;
      if (!extraCheckCallback) {
        extraCheckResult = true;
      } else {
        extraCheckResult = extraCheckCallback(node, dealSpecialTagResult.checkResult);
      }
      // useinstead特殊处理
      if (isRequire && tagName !== 'useinstead' && ((tagName !== 'useinstead' && tagName !== 'param' &&
        !dealSpecialTagResult.checkResult && legalKindSet.has(node.kind)) || (tagName === 'param' &&
          dealSpecialTagResult.paramTagNum < parameterNum)) && extraCheckResult) {
        // 报错
        checkInfoMap[index].missingTags.push(tagName);
      } else if (((tagName !== 'useinstead' && tagName !== 'param' && dealSpecialTagResult.checkResult &&
        illegalKindSet.has(node.kind)) || (tagName === 'useinstead' &&
          !dealSpecialTagResult.useinsteadResultObj.hasDeprecated &&
          dealSpecialTagResult.useinsteadResultObj.hasUseinstead) ||
        (tagName === 'param' && dealSpecialTagResult.paramTagNum > parameterNum)) && extraCheckResult) {
        // 报错
        let errorInfo = createErrorInfo(ErrorValueInfo.ERROR_USE, [tagName]);
        if (tagName === 'param') {
          errorInfo = createErrorInfo(ErrorValueInfo.ERROR_MORELABEL, [parameterNum + 1, tagName]);
        }
        checkInfoMap[index].illegalTags.push({
          checkResult: false,
          errorInfo: errorInfo,
          index: index
        });
      }
    });
  });
  return checkInfoMap;
}

// 标签重复性检查
function checkTagsQuantity(comment, index, errorLogs) {
  const multipleTags = ['throws', 'param']
  const tagCountObj = {};
  comment.tags.forEach(tag => {
    if (!tagCountObj[tag.tag]) {
      tagCountObj[tag.tag] = 0;
    }
    tagCountObj[tag.tag] = tagCountObj[tag.tag] + 1;
  });
  for (const tagName in tagCountObj) {
    if (tagCountObj[tagName] > 1 && multipleTags.indexOf(tagName) < 0) {
      errorLogs.push({
        checkResult: false,
        errorInfo: createErrorInfo(ErrorValueInfo.ERROR_REPEATLABEL, [index + 1, tagName]),
        index: index
      });
    }
  }
  // interface/typedef互斥校验
  if (tagCountObj['interface'] > 0 & tagCountObj['typedef'] > 0) {
    errorLogs.push({
      checkResult: false,
      errorInfo: createErrorInfo(ErrorValueInfo.ERROR_USE_INTERFACE, [index + 1]),
      index: index
    });
  }
}

function checkTagValue(tag, index, node, fileName, errorLogs) {
  const { JsDocValueChecker } = require('./check_jsdoc_value/check_rest_value');
  const checker = JsDocValueChecker[tag.tag];
  let paramIndex = 0;
  let throwsIndex = 0;
  if (checker) {
    let valueCheckResult;
    if (tag.tag === 'param' && [ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
    ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.CallSignature, ts.SyntaxKind.Constructor].indexOf(node.kind) >= 0) {
      valueCheckResult = checker(tag, node, fileName, index, paramIndex++);
    } else if (tag.tag === 'throws') {
      valueCheckResult = checker(tag, node, fileName, index, throwsIndex++);
    } else {
      valueCheckResult = checker(tag, node, fileName, index);
    }
    if (!valueCheckResult.checkResult) {
      valueCheckResult.index = index;
      // 输出告警
      errorLogs.push(valueCheckResult);
    }
  }
}

function checkJsDocOfCurrentNode(node, sourcefile, permissionConfigPath, fileName) {
  let { permissionFile } = require('./utils');
  if (permissionConfigPath && fs.existsSync(permissionConfigPath)) {
    permissionFile = permissionConfigPath;
  }
  const checkInfoArray = [];
  const comments = parseJsDoc(node);
  const checkInfoMap = checkJsDocLegality(node, comments, {});
  const checkOrderResult = checkApiOrder(comments);
  checkOrderResult.forEach((result, index) => {
    checkInfoMap[index.toString()].orderResult = result;
  });
  comments.forEach((comment, index) => {
    let errorLogs = [];
    // 继承校验
    checkInheritTag(comment, node, sourcefile, fileName, index);
    // 值检验
    comment.tags.forEach(tag => {
      const checkAPIDecorator = checkAPITagName(tag, node, sourcefile, fileName, index);
      if (!checkAPIDecorator.checkResult) {
        errorLogs.push(checkAPIDecorator);
      }
      checkTagValue(tag, index, node, fileName, errorLogs)
    });
    // 标签数量校验
    checkTagsQuantity(comment, index, errorLogs);
    checkInfoMap[index.toString()].illegalTags = checkInfoMap[index.toString()].illegalTags.concat(errorLogs);
  });
  for (const key in checkInfoMap) {
    checkInfoArray.push(checkInfoMap[key]);
  }
  return checkInfoArray;
}
exports.checkJsDocOfCurrentNode = checkJsDocOfCurrentNode;

function checkJSDoc(node, sourcefile, permissionConfigPath, fileName) {
  const verificationResult = checkJsDocOfCurrentNode(node, sourcefile, permissionConfigPath, fileName);

  verificationResult.forEach(item => {
    let errorInfo = '';
    if (item.missingTags.length > 0) {
      item.missingTags.forEach(lostLabel => {
        errorInfo = createErrorInfo(ErrorValueInfo.ERROR_LOST_LABEL, [lostLabel]);
        addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_SCENE, errorInfo, FileType.JSDOC,
          ErrorLevel.LOW);
      });
    }
    if (item.illegalTags.length > 0) {
      item.illegalTags.forEach(wrongValueLabel => {
        errorInfo = wrongValueLabel.errorInfo;
        addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_VALUE, errorInfo, FileType.JSDOC,
          ErrorLevel.LOW);
      });
    }
    if (!item.orderResult.checkResult) {
      errorInfo = item.orderResult.errorInfo;
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, errorInfo, FileType.JSDOC,
        ErrorLevel.LOW);
    }
  })

}
exports.checkJSDoc = checkJSDoc;