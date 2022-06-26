import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, useReactImport }: CreateComponent) =>
  `${creatReactImport(useReactImport)}function ${pascalCase(componentName)}() {
  return (
    <>
      <h1>${pascalCase(componentName)}</h1>
    </>
  );
}

export default ${pascalCase(componentName)};
`;
