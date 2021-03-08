import * as vscode from 'vscode';

import createComponent from './createComponent';

interface CreateComponentProps {
  args: any;
  named?: boolean;
  styled?: boolean;
  mobile?: boolean;
  createNextPage?: boolean;
}

const handleCreateComponent = async ({ args, named = false, styled = false, mobile = false, createNextPage = false }: CreateComponentProps) => {
  const componentName = await vscode.window.showInputBox({
    prompt: `Enter the ${ createNextPage ? 'page' : 'component' } name:`,
    ignoreFocusOut: true,
    valueSelection: [-1, -1]
  });

  if (!componentName) {
    return;
  }

  if (args) {
    const path = args.fsPath;
    createComponent(componentName, { dir: path, named, styled, mobile, createNextPage });
  } else {
    createComponent(componentName, { named, styled, mobile, createNextPage });
  }
};

export function activate(context: vscode.ExtensionContext) {
  let disposable = [
    vscode.commands.registerCommand("extension.create-react-component", args => {
      handleCreateComponent({ args });
    }),
    vscode.commands.registerCommand("extension.create-react-styled-component", args => {
      handleCreateComponent({ args, styled: true });
    }),
    vscode.commands.registerCommand("extension.create-react-named-component", args => {
      handleCreateComponent({ args, named: true });
    }),
    vscode.commands.registerCommand("extension.create-next-page", args => {
      handleCreateComponent({ args, named: true, createNextPage: true });
    }),
    vscode.commands.registerCommand("extension.create-react-native-component", args => {
      handleCreateComponent({ args, mobile: true });
    }),
    vscode.commands.registerCommand("extension.create-react-native-styled-component", args => {
      handleCreateComponent({ args, styled: true, mobile: true });
    }),
    vscode.commands.registerCommand("extension.create-react-native-named-component", args => {
      handleCreateComponent({ args, named: true, mobile: true });
    })
  ];

  context.subscriptions.push(...disposable);
}

export function deactivate() {}
