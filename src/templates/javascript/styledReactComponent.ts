import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';
import createStylesImport from '../shared/functions/create-styles-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, styleName, useReactImport, useCSSModule, useExportDefault }: CreateComponent) => (
`${ creatReactImport(useReactImport) }${ createStylesImport(styleName, useCSSModule) }

${useExportDefault ? '' : 'export '}function ${ pascalCase(componentName) }() {
  return (
    ${ styleName === 'styles' ? `<Container>` : `<>` }
      <h1>${ pascalCase(componentName) }</h1>
    ${ styleName === 'styles' ? `</Container>` : `</>` }
  );
};
${useExportDefault ? `

export default ${ pascalCase(componentName) };
` : ''}
`
);
