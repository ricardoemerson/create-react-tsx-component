import createComponent from './createComponent';

import * as vscode from 'vscode';
import { ExtensionContext, MessageItem, Uri, env, extensions, window } from 'vscode';

interface CreateComponentProps {
  args: any;
  named?: boolean;
  styled?: boolean;
  mobile?: boolean;
  createNextPage?: boolean;
}

const handleCreateComponent = async ({
  args,
  named = false,
  styled = false,
  mobile = false,
  createNextPage = false,
}: CreateComponentProps) => {
  const componentName = await vscode.window.showInputBox({
    prompt: `Enter the ${createNextPage ? 'page' : 'component'} name:`,
    ignoreFocusOut: true,
    valueSelection: [-1, -1],
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

const LAST_VERSION_KEY = 'ricardo-emerson.create-react-tsx-component:last-version';
const PENDING_FOCUS = 'ricardo-emerson.create-react-tsx-component:pending-focus';

async function showWelcomeOrWhatsNew(
  context: ExtensionContext,
  version: string,
  previousVersion: string | undefined
) {
  if (previousVersion !== version) {
    if (window.state.focused) {
      void context.globalState.update(PENDING_FOCUS, undefined);
      void context.globalState.update(LAST_VERSION_KEY, version);
      void showMessage(version, previousVersion);
    } else {
      // Save pending on window getting focus
      await context.globalState.update(PENDING_FOCUS, true);
      const disposable = window.onDidChangeWindowState(e => {
        if (!e.focused) {
          return;
        }

        disposable.dispose();

        // If the window is now focused and we are pending the welcome, clear the pending state and show the welcome
        if (context.globalState.get(PENDING_FOCUS) === true) {
          void context.globalState.update(PENDING_FOCUS, undefined);
          void context.globalState.update(LAST_VERSION_KEY, version);
          void showMessage(version, previousVersion);
        }
      });

      context.subscriptions.push(disposable);
    }
  }
}

async function showMessage(version: string, previousVersion?: string) {
  const whatsNew = { title: "What's New" };
  const giveAStar = { title: '★ Give a star' };
  const writeReview = { title: '★ Write a review' };
  const sponsor = { title: '❤ Sponsor' };
  const actions: MessageItem[] = [giveAStar, writeReview, sponsor];

  if (previousVersion) {
    actions.unshift(whatsNew);
  }

  const message = previousVersion
    ? `React Tools has been updated to v${version}! — check out what's new!`
    : 'Thanks for using React Tools — have a great day at work! 🖖🏻 Cheers,';

  const result = await window.showInformationMessage(message, ...actions);

  if (result !== null) {
    if (result === whatsNew) {
      await env.openExternal(
        Uri.parse(
          'https://marketplace.visualstudio.com/items/ricardo-emerson.create-react-tsx-component/changelog'
        )
      );
    } else if (result === giveAStar) {
      await env.openExternal(
        Uri.parse('https://github.com/ricardoemerson/create-react-tsx-component')
      );
    } else if (result === writeReview) {
      await env.openExternal(
        Uri.parse(
          'https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-react-tsx-component&ssr=false#review-details'
        )
      );
    } else if (result === sponsor) {
      await env.openExternal(
        Uri.parse('https://www.paypal.com/donate?hosted_button_id=X26H7L6AVMD96')
      );
    }
  }
}

export function activate(context: vscode.ExtensionContext) {
  const previousVersion = context.globalState.get<string>(LAST_VERSION_KEY);
  const extensionData = extensions.getExtension(
    'ricardo-emerson.create-react-tsx-component'
  );

  const currentVersion = extensionData?.packageJSON.version;

  showWelcomeOrWhatsNew(context, currentVersion, previousVersion);

  const disposable = [
    vscode.commands.registerCommand('extension.create-react-component', args => {
      handleCreateComponent({ args });
    }),
    vscode.commands.registerCommand('extension.create-react-styled-component', args => {
      handleCreateComponent({ args, styled: true });
    }),
    vscode.commands.registerCommand('extension.create-react-named-component', args => {
      handleCreateComponent({ args, named: true });
    }),
    vscode.commands.registerCommand(
      'extension.create-react-named-styled-component',
      args => {
        handleCreateComponent({ args, styled: true, named: true });
      }
    ),
    vscode.commands.registerCommand('extension.create-next-page', args => {
      handleCreateComponent({ args, named: true, createNextPage: true });
    }),
    vscode.commands.registerCommand('extension.create-react-native-component', args => {
      handleCreateComponent({ args, mobile: true });
    }),
    vscode.commands.registerCommand(
      'extension.create-react-native-styled-component',
      args => {
        handleCreateComponent({ args, styled: true, mobile: true });
      }
    ),
    vscode.commands.registerCommand(
      'extension.create-react-native-named-component',
      args => {
        handleCreateComponent({ args, named: true, mobile: true });
      }
    ),
    vscode.commands.registerCommand(
      'extension.create-react-native-named-styled-component',
      args => {
        handleCreateComponent({ args, styled: true, named: true, mobile: true });
      }
    ),
  ];

  context.subscriptions.push(...disposable);
}

export function deactivate() {}
