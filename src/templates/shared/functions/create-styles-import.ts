import { camelCase } from 'lodash';

export default function createStylesImport(styleName?: string, useCSSModule?: boolean, usesStylesTailwindCSSParser?: boolean, componentName?: string) {

  if (styleName === 'styles') {
    if (usesStylesTailwindCSSParser) {
      return `import ${ camelCase(componentName) }Styles from './${ styleName }';`
    } else {
      return `import { Container } from './${ styleName }';`
    }
  } else {
    if (useCSSModule) {
      return `import styles from './${ styleName }';`
    } else {
      return `import './${ styleName }';`
    }
  }
}
