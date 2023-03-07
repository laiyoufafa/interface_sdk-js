/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const parse = require('comment-parser');
const { getAPINote, ErrorLevel, FileType, ErrorType } = require('../utils');
const { addAPICheckErrorLogs } = require('../compile_info');

const labelOrderArray = [
  'namespace', 'extends', 'typedef', 'interface', 'permission', 'enum', 'constant', 'type', 'param', 'default',
  'returns', 'readonly', 'throws', 'static', 'fires', 'syscap', 'systemapi', 'famodelonly', 'FAModelOnly',
  'stagemodelonly', 'StageModelOnly', 'crossplatform', 'since', 'deprecated', 'useinstead', 'form', 'example'
];

/**
 * 判断标签排列是否为升序
 */
function isAscendingOrder(tags) {
  let checkResult = true;
  tags.forEach((tag, index) => {
    if (index + 1 < tags.length) {
      // 获取前后两个tag下标
      const firstIndex = labelOrderArray.indexOf(tag.tag);
      const secondIndex = labelOrderArray.indexOf(tags[index + 1].tag);

      // 非自定义标签在前或数组降序时报错
      if ((firstIndex === -1 && secondIndex !== -1) || firstIndex > secondIndex) {
        checkResult = false;
        return;
      }
    }
  });
  return checkResult;
}

// check jsdoc order
function checkApiOrder(node, sourcefile, fileName) {
  let checkOrderRusult = [];
  const apiNote = getAPINote(node);
  const JSDocInfos = parse.parse(apiNote);
  JSDocInfos.forEach(docInfo => {
    if (isAscendingOrder(docInfo.tags)) {
      checkOrderRusult.push({
        checkResult: true,
        errorInfo: "",
      });
    } else {
      let errorInfo = "the jsDoc order is wrong.";
      checkOrderRusult.push({
        checkResult: false,
        errorInfo: errorInfo,
      });
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.WRONG_ORDER, errorInfo, FileType.JSDOC,
        ErrorLevel.LOW);
    }
  });
  return checkOrderRusult;
}
exports.checkApiOrder = checkApiOrder;