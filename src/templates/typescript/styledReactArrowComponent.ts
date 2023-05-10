import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import createReactImport from '../shared/functions/create-react-import';
import createStylesImport from '../shared/functions/create-styles-import';

export default ({
  componentName,
  styleName,
  useReactImport,
  useReactFC,
  useCSSModule,
  useExportDefault,
}: CreateComponent) =>
  `${createReactImport(useReactImport)}${createStylesImport(styleName, useCSSModule)}

${useExportDefault ? '' : 'export '}const ${componentName}${
    useReactFC ? ': React.FC' : ''
  } = () => {
  return (
    ${styleName?.endsWith('styles') ? `<Container>` : `<>`}
      <h1>${componentName}</h1>
    ${styleName?.endsWith('styles') ? `</Container>` : `</>`}
  );
};
${createExportDefault(componentName, useExportDefault)}`;
