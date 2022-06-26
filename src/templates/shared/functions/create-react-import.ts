export default function creatReactImport(
  useReactImport?: boolean,
  importReactNode = false
) {
  if (useReactImport) {
    return `import React${importReactNode ? ', { ReactNode }' : ''} from 'react';\n\n`;
  }

  return importReactNode ? `import { ReactNode } from 'react';\n\n` : '';
}
