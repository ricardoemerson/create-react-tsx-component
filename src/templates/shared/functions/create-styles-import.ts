export default function createStylesImport(styleName?: string, useCSSModule?: boolean) {
  if (styleName === 'styles') {
    return `import { Container } from './${ styleName }';`
  } else {
    if (useCSSModule) {
      return `import styles from './${ styleName }';`
    } else {
      return `import './${ styleName }';`
    }
  }
}
