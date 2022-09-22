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

const path = require("path");
const fs = require("fs");
// const ts = require(path.resolve(__dirname, "../node_modules/typescript"));
const ts = require("typescript");
const { checkAPIDecorators } = require("./check_decorator");
const { checkSpelling } = require("./check_spelling");
const { hasAPINote } = require("./utils");
let result = require("../check_result.json");

function checkAPICodeStyle(url) {
  if (fs.existsSync(url)) {
    const mdApiFiles = getMdFiles(url);
    tsTransform(mdApiFiles, checkAPICodeStyleCallback);
  }
}

function getMdFiles(url) {
  const content = fs.readFileSync(url, "utf-8");
  const mdFiles = content.split("\r\n");
  return mdFiles;
}

function tsTransform(uFiles, callback) {
  uFiles.forEach(filePath => {
    if (/\.d\.ts/.test(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      const fileName = path.basename(filePath).replace(/.d.ts/g, ".ts");
      ts.transpileModule(content, {
        compilerOptions: {
          "target": ts.ScriptTarget.ES2017
        },
        fileName: fileName,
        transformers: { before: [callback(filePath)] }
      })
    }
  })
}

function checkAPICodeStyleCallback(fileName) {
  return (context) => {
    return (node) => {
      checkAllNode(node, node, fileName);
      return node;
    }
  }
}

function checkAllNode(node, sourcefile, fileName) {
  if (hasAPINote(node)) {
    // check decorator
    checkAPIDecorators(node, sourcefile, fileName);
    // check apiNote spelling
    checkSpelling(node, sourcefile, fileName);
  }
  if (ts.isIdentifier(node)) {
    // check variable spelling
    checkSpelling(node, sourcefile, fileName);
  }
  node.getChildren().forEach((item) => checkAllNode(item, sourcefile, fileName));
}

function scanEntry(url) {
  // scan entry
  checkAPICodeStyle(url);
  return JSON.stringify(result.scanResult);
}
exports.scanEntry = scanEntry;