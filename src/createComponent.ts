import jsReactArrowComponent from './templates/javascript/reactArrowComponent';
import jsReactComponent from './templates/javascript/reactComponent';
import jsReactNativeArrowComponent from './templates/javascript/reactNativeArrowComponent';
import jsReactNativeComponent from './templates/javascript/reactNativeComponent';
import jsStyledReactArrowComponent from './templates/javascript/styledReactArrowComponent';
import jsStyledReactComponent from './templates/javascript/styledReactComponent';
import jsStyledReactNativeArrowComponent from './templates/javascript/styledReactNativeArrowComponent';
import jsStyledReactNativeComponent from './templates/javascript/styledReactNativeComponent';
import pascalCase from './templates/shared/functions/pascal-case';
import styledFileCSS from './templates/styled-components/styledFileCSS';
import styledFileReact from './templates/styled-components/styledFileReact';
import styledFileReactNative from './templates/styled-components/styledFileReactNative';
import styledFileTailwindCSSParser from './templates/styled-components/styledFileTailwindCSSParser';
import nextPage from './templates/typescript/nextPage';
import tsReactArrowComponent from './templates/typescript/reactArrowComponent';
import tsReactComponent from './templates/typescript/reactComponent';
import tsReactNativeArrowComponent from './templates/typescript/reactNativeArrowComponent';
import tsReactNativeComponent from './templates/typescript/reactNativeComponent';
import tsStyledReactArrowComponent from './templates/typescript/styledReactArrowComponent';
import tsStyledReactComponent from './templates/typescript/styledReactComponent';
import tsStyledReactNativeArrowComponent from './templates/typescript/styledReactNativeArrowComponent';
import tsStyledReactNativeComponent from './templates/typescript/styledReactNativeComponent';

import * as fs from 'fs';
import { kebabCase } from 'lodash';
import * as path from 'path';
import * as vscode from 'vscode';

interface ComponentProps {
  dir?: string;
  named: boolean;
  styled?: boolean;
  mobile?: boolean;
  createNextPage?: boolean;
}

export default async (
  componentName: string,
  { dir, named, styled, mobile, createNextPage }: ComponentProps
) => {
  // Load configurations.
  const config = vscode.workspace.getConfiguration('createReactTSXComponent');
  console.log('config: ', config);

  const fileExtension = config.get('fileExtension') as string;
  const cssFileFormat = config.get('stylesFormat') as string;
  const useArrowFunctionComponent = config.get('useArrowFunctionComponent') as boolean;
  const useReactFC = config.get('useReactFC') as boolean;
  const useReactImport = config.get('useReactImport') as boolean;
  const useCSSModule = config.get('useCSSModule') as boolean;

  const componentsExtensions = ['tsx', 'jsx', 'js'];
  const stylesFormats = ['Styled Components', 'SCSS', 'LESS', 'CSS', 'TailwindCSSParser'];

  const componentsFileNames = ['index.tsx', 'index.jsx', 'index.js'];

  let stylesFileNames: string[];
  let importStylesFileNames: string[];

  componentName = pascalCase(componentName);

  if (useCSSModule) {
    stylesFileNames = [
      'styles.ts',
      'styles.module.scss',
      'styles.less',
      'styles.module.css',
    ];
    importStylesFileNames = [
      'styles',
      'styles.module.scss',
      'styles.less',
      'styles.module.css',
    ];
  } else {
    stylesFileNames = [
      'styles.ts',
      'styles.scss',
      'styles.less',
      'styles.css',
      'styles.ts',
    ];
    importStylesFileNames = [
      'styles',
      'styles.scss',
      'styles.less',
      'styles.css',
      'styles',
    ];
  }

  const componentExtensionIndex = componentsExtensions.findIndex(
    ext => ext === fileExtension
  );
  const cssFormatIndex = stylesFormats.findIndex(style => style === cssFileFormat);

  let componentFileName: string;

  if (named && !createNextPage) {
    componentFileName = `${componentName}.${fileExtension}`;
  } else if (named && createNextPage) {
    componentFileName = `${kebabCase(componentName)}.${fileExtension}`;
  } else {
    componentFileName = componentsFileNames[componentExtensionIndex];
  }

  const styledFileName =
    ['jsx', 'js'].includes(fileExtension) && cssFormatIndex === 0
      ? 'styles.js'
      : stylesFileNames[cssFormatIndex];
  const styleName = importStylesFileNames[cssFormatIndex];

  const usesStylesTailwindCSSParser = cssFileFormat === 'TailwindCSSParser';

  const styledTemplate = cssFormatIndex === 0 ? styledFileReact : styledFileCSS;

  let reactComponent = tsReactComponent;
  let reactArrowComponent = tsReactArrowComponent;
  let styledReactComponent = tsStyledReactComponent;
  let styledReactArrowComponent = tsStyledReactArrowComponent;
  let reactNativeComponent = tsReactNativeComponent;
  let reactNativeArrowComponent = tsReactNativeArrowComponent;
  let styledReactNativeComponent = tsStyledReactNativeComponent;
  let styledReactNativeArrowComponent = tsStyledReactNativeArrowComponent;

  if (['jsx', 'js'].includes(fileExtension)) {
    reactComponent = jsReactComponent;
    reactArrowComponent = jsReactArrowComponent;
    styledReactComponent = jsStyledReactComponent;
    styledReactArrowComponent = jsStyledReactArrowComponent;
    reactNativeComponent = jsReactNativeComponent;
    reactNativeArrowComponent = jsReactNativeArrowComponent;
    styledReactNativeComponent = jsStyledReactNativeComponent;
    styledReactNativeArrowComponent = jsStyledReactNativeArrowComponent;
  }

  const projectRoot = (vscode.workspace.workspaceFolders as any)[0].uri.fsPath;

  if (!dir) {
    dir =
      (await vscode.window.showInputBox({
        value: '/',
        prompt: `Path from root`,
        ignoreFocusOut: true,
        valueSelection: [-1, -1],
      })) || '';
  }

  if (!dir.includes(projectRoot)) {
    dir = projectRoot + dir;
  }

  if (dir[dir.length - 1] !== '/') {
    dir = dir + '/';
  }

  let dirWithFileName: string;

  if (!named) {
    dirWithFileName = dir + componentName;

    createDir(dirWithFileName);
  }

  const filePath = (fileName: string) => {
    if (named) {
      return dir + '/' + fileName;
    }

    return dirWithFileName + '/' + fileName;
  };

  if (mobile) {
    if (styled) {
      if (useArrowFunctionComponent) {
        await createFile(
          filePath(componentFileName),
          styledReactNativeArrowComponent({ componentName, useReactImport, useReactFC })
        );

        await createFile(filePath(styledFileName), styledFileReactNative());
      } else {
        await createFile(
          filePath(componentFileName),
          styledReactNativeComponent({ componentName, useReactImport })
        );

        await createFile(filePath(styledFileName), styledFileReactNative());
      }
    } else {
      if (useArrowFunctionComponent) {
        await createFile(
          filePath(componentFileName),
          reactNativeArrowComponent({ componentName, useReactImport, useReactFC })
        );
      } else {
        await createFile(
          filePath(componentFileName),
          reactNativeComponent({ componentName, useReactImport })
        );
      }
    }
  } else {
    if (styled) {
      if (useArrowFunctionComponent) {
        await createFile(
          filePath(componentFileName),
          styledReactArrowComponent({
            componentName,
            styleName,
            useReactImport,
            useReactFC,
            useCSSModule,
          })
        );

        await createFile(filePath(styledFileName), styledTemplate());
      } else {
        await createFile(
          filePath(componentFileName),
          styledReactComponent({
            componentName,
            styleName,
            useReactImport,
            useCSSModule,
            usesStylesTailwindCSSParser,
          })
        );

        if (usesStylesTailwindCSSParser) {
          await createFile(
            filePath(styledFileName),
            styledFileTailwindCSSParser({ componentName })
          );
        } else {
          await createFile(filePath(styledFileName), styledTemplate());
        }
      }
    } else {
      if (useArrowFunctionComponent) {
        await createFile(
          filePath(componentFileName),
          reactArrowComponent({ componentName, useReactImport, useReactFC, useCSSModule })
        );
      } else {
        if (createNextPage) {
          await createFile(filePath(componentFileName), nextPage({ componentName }));
        } else {
          await createFile(
            filePath(componentFileName),
            reactComponent({ componentName, useReactImport, useCSSModule })
          );
        }
      }
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
  const initDir = path.isAbsolute(targetDir) ? sep : '';
  const baseDir = __dirname;

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);

    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code === 'EEXIST') {
        // curDir already exists!
        return curDir;
      }

      // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
      if (err.code === 'ENOENT') {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
      }

      const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;
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
        vscode.window.showErrorMessage('Maker cant write to file.');
      }
    });
  } else {
    vscode.window.showWarningMessage('File already exists.');
  }
};
