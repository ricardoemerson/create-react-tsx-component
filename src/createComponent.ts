import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

import reactArrowComponent from './templates/reactArrowComponent';
import styledReactArrowComponent from './templates/styledReactArrowComponent';
import styledFileReact from './templates/styledFileReact';

import reactNativeArrowComponent from './templates/reactNativeArrowComponent';
import styledReactNativeArrowComponent from './templates/styledReactNativeArrowComponent';
import styledFileReactNative from './templates/styledFileReactNative';

export default async (
  componentName: string,
  { dir, styled, mobile }: { dir?: string; styled?: boolean; mobile?: boolean }
) => {
  const COMPONENT_FILE_NAME = "index.tsx";
  const STYLED_FILE_NAME = "styles.ts";
  const projectRoot = (vscode.workspace.workspaceFolders as any)[0].uri.fsPath;

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
      await createFile(filePath(COMPONENT_FILE_NAME), styledReactNativeArrowComponent(componentName));
      await createFile(filePath(STYLED_FILE_NAME), styledFileReactNative());
    } else {
      await createFile(filePath(COMPONENT_FILE_NAME), reactNativeArrowComponent(componentName));
    }
  } else {
    if (styled) {
      await createFile(filePath(COMPONENT_FILE_NAME), styledReactArrowComponent(componentName));
      await createFile(filePath(STYLED_FILE_NAME), styledFileReact());
    } else {
      await createFile(filePath(COMPONENT_FILE_NAME), reactArrowComponent(componentName));
    }
  }

  setTimeout(() => {
    vscode.workspace.openTextDocument(filePath(COMPONENT_FILE_NAME)).then(editor => {
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
