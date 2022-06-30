import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import creatReactImport from '../shared/functions/create-react-import';
import createStylesImport from '../shared/functions/create-styles-import';

export default ({
  componentName,
  styleName,
  useReactImport,
  useCSSModule,
  useExportDefault,
}: CreateComponent) =>
  `${creatReactImport(useReactImport)}${createStylesImport(styleName, useCSSModule)}

${useExportDefault ? '' : 'export '}function ${componentName}() {
  return (
    ${styleName?.endsWith('styles') ? `<Container>` : `<>`}
      <h1>${componentName}</h1>
    ${styleName?.endsWith('styles') ? `</Container>` : `</>`}
  );
}
${createExportDefault(componentName, useExportDefault)}`;
