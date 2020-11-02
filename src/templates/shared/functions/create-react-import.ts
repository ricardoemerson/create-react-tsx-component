export default function creatReactImport(useReactImport?: boolean) {
  if (useReactImport) {
    return `import React from 'react';\n\n`
  }

  return '';
}
