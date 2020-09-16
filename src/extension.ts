import * as vscode from 'vscode';

import createComponent from './createComponent';

const handleCreateComponent = async (args: any, styled?: boolean, mobile?: boolean) => {

  if(mobile && styled) {
    vscode.window.showInformationMessage("🚀 Creating - Styled React Native Component")
  } else if (!mobile && styled) {
    vscode.window.showInformationMessage("🚀 Creating - Styled React Component")
  } else if (mobile && !styled) {
    vscode.window.showInformationMessage("🚀 Creating - React Native Component")
  } else if (!mobile && !styled) {
    vscode.window.showInformationMessage("🚀 Creating - React Component")
  }

  const componentName = await vscode.window.showInputBox({
    prompt: `Enter the component name:`,
    ignoreFocusOut: true,
    valueSelection: [-1, -1]
  });

  if (!componentName) {
    return;
  }

  if (args) {
    const path = args.fsPath;
    createComponent(componentName, { dir: path, styled, mobile });
  } else {
    createComponent(componentName, { styled, mobile });
  }
};

export function activate(context: vscode.ExtensionContext) {
  let disposable = [
    vscode.commands.registerCommand("extension.create-react-component", args => {
      handleCreateComponent(args);
    }),
    vscode.commands.registerCommand("extension.create-react-styled-component", args => {
      handleCreateComponent(args, true);
    }),
    vscode.commands.registerCommand("extension.create-react-native-component", args => {
      handleCreateComponent(args, false, true);
    }),
    vscode.commands.registerCommand("extension.create-react-native-styled-component", args => {
      handleCreateComponent(args, true, true);
    })
  ];

  context.subscriptions.push(...disposable);
}

export function deactivate() {}
