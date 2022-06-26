import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';
import createStylesImport from '../shared/functions/create-styles-import';

export default ({
  componentName,
  styleName,
  useReactImport,
  useCSSModule,
}: CreateComponent) =>
  `${creatReactImport(useReactImport)}${createStylesImport(styleName, useCSSModule)}

function ${componentName}() {
  return (
    ${styleName === 'styles' ? `<Container>` : `<>`}
      <h1>${componentName}</h1>
    ${styleName === 'styles' ? `</Container>` : `</>`}
  );
}

export default ${componentName};
`;
