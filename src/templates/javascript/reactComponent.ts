import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import creatReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, useReactImport, useExportDefault }: CreateComponent) =>
  `${creatReactImport(useReactImport)}${
    useExportDefault ? '' : 'export '
  }function ${pascalCase(componentName)}() {
  return (
    <>
      <h1>${pascalCase(componentName)}</h1>
    </>
  );
}
${createExportDefault(componentName, useExportDefault)}`;
