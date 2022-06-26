import CreateComponent from '../interfaces/CreateComponent';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) =>
  `function ${pascalCase(componentName)}() {
  return (
    <>
      <h1>${pascalCase(componentName)}</h1>
    </>
  );
}

export default ${pascalCase(componentName)};
`;
