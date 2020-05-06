import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

import typescriptReactArrowComponent from './templates/typescript/reactArrowComponent';
import typescriptStyledReactArrowComponent from './templates/typescript/styledReactArrowComponent';
import typescriptReactNativeArrowComponent from './templates/typescript/reactNativeArrowComponent';
import typescriptStyledReactNativeArrowComponent from './templates/typescript/styledReactNativeArrowComponent';

import javascriptReactArrowComponent from './templates/javascript/reactArrowComponent';
import javascriptStyledReactArrowComponent from './templates/javascript/styledReactArrowComponent';
import javascriptReactNativeArrowComponent from './templates/javascript/reactNativeArrowComponent';
import javascriptStyledReactNativeArrowComponent from './templates/javascript/styledReactNativeArrowComponent';

import styledFileReact from './templates/styled-components/styledFileReact';
import styledFileReactNative from './templates/styled-components/styledFileReactNative';

export default async (
  componentName: string,
  { dir, styled, mobile }: { dir?: string; styled?: boolean; mobile?: boolean }
) => {
  const config = vscode.workspace.getConfiguration("createReactTSXComponent");
  const fileExtension = config.get("fileExtension") as string;

  let componentFileName = "index.tsx";
  let styledFileName = "styles.ts";

  let reactArrowComponent = typescriptReactArrowComponent;
  let styledReactArrowComponent = typescriptStyledReactArrowComponent;
  let reactNativeArrowComponent = typescriptReactNativeArrowComponent;
  let styledReactNativeArrowComponent = typescriptStyledReactNativeArrowComponent;

  if (['jsx', 'js'].includes(fileExtension)) {
    reactArrowComponent = javascriptReactArrowComponent;
    styledReactArrowComponent = javascriptStyledReactArrowComponent;
    reactNativeArrowComponent = javascriptReactNativeArrowComponent;
    styledReactNativeArrowComponent = javascriptStyledReactNativeArrowComponent;

    styledFileName = "styles.js";
  }

  if (fileExtension === 'jsx') {
    componentFileName = "index.jsx";
  } else if (fileExtension === 'js') {
    componentFileName = "index.js";
  }

  const projectRoot = (vscode.workspace.workspaceFolders as any)[0].uri.fsPath;

  componentName = componentName.split(' ').join('');

  if (!dir) {
    dir =
      (await vscode.window.showInputBox({
        value: "/",
        prompt: `Path from root`,
        ignoreFocusOut: true,
        valueSelection: [-1, -1]
      })) || "";
  }
  if (!dir.includes(projectRoot)) {
    dir = projectRoot + dir;
  }
  if (dir[dir.length - 1] !== "/") {
    dir = dir + "/";
  }
  const dirWithFileName = dir + componentName;
  const filePath = (fileName: string) => dirWithFileName + "/" + fileName;

  createDir(dirWithFileName);

  if (mobile) {
    if (styled) {
      await createFile(filePath(componentFileName), styledReactNativeArrowComponent(componentName));
      await createFile(filePath(styledFileName), styledFileReactNative());
    } else {
      await createFile(filePath(componentFileName), reactNativeArrowComponent(componentName));
    }
  } else {
    if (styled) {
      await createFile(filePath(componentFileName), styledReactArrowComponent(componentName));
      await createFile(filePath(styledFileName), styledFileReact());
    } else {
      await createFile(filePath(componentFileName), reactArrowComponent(componentName));
    }
  }

  setTimeout(() => {
    vscode.workspace.openTextDocument(filePath(componentFileName)).then(editor => {
      if (!editor) {
        return;
      }
      vscode.window.showTextDocument(editor);
    });
  }, 50);
};

const createDir = (targetDir: string) => {
  const sep = path.sep;
  const initDir = path.isAbsolute(targetDir) ? sep : "";
  const baseDir = __dirname;

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);
    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code === "EEXIST") {
        // curDir already exists!
        return curDir;
      }

      // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
      if (err.code === "ENOENT") {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
      }

      const caughtErr = ["EACCES", "EPERM", "EISDIR"].indexOf(err.code) > -1;
      if (!caughtErr || (caughtErr && curDir === path.resolve(targetDir))) {
        throw err; // Throw if it's just the last created dir.
      }
    }

    return curDir;
  }, initDir);
};

const createFile = async (filePath: string, content: string | string[]) => {
  if (!fs.existsSync(filePath)) {
    await fs.createWriteStream(filePath).close();
    await fs.writeFile(filePath, content, err => {
      if (err) {
        vscode.window.showErrorMessage("Maker cant write to file.");
      }
    });
  } else {
    vscode.window.showWarningMessage("File already exists.");
  }
};
