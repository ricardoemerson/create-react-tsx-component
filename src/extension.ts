import * as vscode from 'vscode';

import createComponent from './createComponent';

const handleCreateComponent = async (args: any, styled?: boolean) => {
  const componentName = await vscode.window.showInputBox({
    prompt: `Component name`,
    ignoreFocusOut: true,
    valueSelection: [-1, -1]
  });

  if (!componentName) {
    return;
  }

  if (args) {
    const path = args.fsPath;
    createComponent(componentName, { dir: path, styled });
  } else {
    createComponent(componentName, { styled });
  }
};

export function activate(context: vscode.ExtensionContext) {
  let disposable = [
    vscode.commands.registerCommand("extension.create-component", args => {
      handleCreateComponent(args);
    }),
    vscode.commands.registerCommand("extension.create-styled-component", args => {
      handleCreateComponent(args, true);
    })
  ];

  context.subscriptions.push(...disposable);
}

export function deactivate() {}
