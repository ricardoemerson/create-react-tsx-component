import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import createReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, useReactImport, useExportDefault }: CreateComponent) =>
  `${createReactImport(useReactImport, true)}interface ${pascalCase(componentName)}Props {
  children: ReactNode;
}

${useExportDefault ? '' : 'export '}function ${pascalCase(
    componentName
  )}({ children }: ${pascalCase(componentName)}Props) {
  return (
    <>
      <h1>${pascalCase(componentName)}</h1>
      {children}
    </>
  );
}
${createExportDefault(componentName, useExportDefault)}`;
