import * as vscode from 'vscode';

import createComponent from './createComponent';

interface CreateComponentProps {
  args: any;
  named: boolean;
  styled?: boolean;
  mobile?: boolean;
}

const handleCreateComponent = async ({ args, named, styled, mobile }: CreateComponentProps) => {
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
    createComponent(componentName, { dir: path, named, styled, mobile });
  } else {
    createComponent(componentName, { named, styled, mobile });
  }
};

export function activate(context: vscode.ExtensionContext) {
  let disposable = [
    vscode.commands.registerCommand("extension.create-react-component", args => {
      handleCreateComponent({ args, named: false, styled: false, mobile: false });
    }),
    vscode.commands.registerCommand("extension.create-react-styled-component", args => {
      handleCreateComponent({ args, named: false, styled: true, mobile: false });
    }),
    vscode.commands.registerCommand("extension.create-react-named-component", args => {
      handleCreateComponent({ args, named: true, styled: false, mobile: false });
    }),
    vscode.commands.registerCommand("extension.create-react-native-component", args => {
      handleCreateComponent({ args, named: false, styled: false, mobile: true });
    }),
    vscode.commands.registerCommand("extension.create-react-native-styled-component", args => {
      handleCreateComponent({ args, named: false, styled: true, mobile: true });
    }),
    vscode.commands.registerCommand("extension.create-react-native-named-component", args => {
      handleCreateComponent({ args, named: true, styled: false, mobile: true });
    })
  ];

  context.subscriptions.push(...disposable);
}

export function deactivate() {}
