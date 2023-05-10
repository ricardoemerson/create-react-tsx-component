export default function createReactImport(
  useReactImport?: boolean,
  importReactNode = false,
  isReactNativeTemplate = false
) {
  if (useReactImport) {
    return `import React${importReactNode ? ', { ReactNode }' : ''} from 'react';\n${
      isReactNativeTemplate ? '' : '\n'
    }`;
  }

  return importReactNode
    ? `import { ReactNode } from 'react';\n${isReactNativeTemplate ? '' : '\n'}`
    : '';
}
