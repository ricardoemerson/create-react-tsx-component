import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import creatReactImport from '../shared/functions/create-react-import';

export default ({ componentName, useReactImport, useExportDefault }: CreateComponent) =>
  `${creatReactImport(useReactImport)}${
    useExportDefault ? '' : 'export '
  }const ${componentName} = () => {
  return (
    <>
      <h1>${componentName}</h1>
    </>
  );
};
${createExportDefault(componentName, useExportDefault)}`;
