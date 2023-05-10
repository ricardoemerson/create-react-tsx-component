import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import createReactImport from '../shared/functions/create-react-import';

export default ({
  componentName,
  useReactImport,
  useReactFC,
  useExportDefault,
}: CreateComponent) =>
  `${createReactImport(useReactImport)}${
    useExportDefault ? '' : 'export '
  }const ${componentName}${useReactFC ? ': React.FC' : ''} = () => {
  return (
    <>
      <h1>${componentName}</h1>
    </>
  );
};
${createExportDefault(componentName, useExportDefault)}`;
