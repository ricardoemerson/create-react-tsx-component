import { camelCase } from 'lodash';

export default function createStylesImport(
  styleName?: string,
  useCSSModule?: boolean,
  usesStylesCVA?: boolean,
  componentName?: string
) {
  console.log('styleName: ', styleName);
  if (styleName?.endsWith('styles')) {
    if (usesStylesCVA) {
      return `import { VariantProps } from 'class-variance-authority';

import { cn } from '@services/tailwind-css-util';

import { ${camelCase(componentName)}Styles } from './${styleName}';`;
    } else {
      return `import { Container } from './${styleName}';`;
    }
  } else {
    if (useCSSModule) {
      return `import styles from './${styleName}';`;
    } else {
      return `import './${styleName}';`;
    }
  }
}
