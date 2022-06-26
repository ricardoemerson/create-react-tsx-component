import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, useReactImport }: CreateComponent) =>
  `${creatReactImport(useReactImport, true)}interface ${pascalCase(componentName)}Props {
  children: ReactNode;
}

function ${pascalCase(componentName)}({ children }: ${pascalCase(componentName)}Props) {
  return (
    <>
      <h1>${pascalCase(componentName)}</h1>
      {children}
    </>
  );
}

export default ${pascalCase(componentName)};
`;
