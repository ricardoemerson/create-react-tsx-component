import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';

export default ({ componentName, useReactImport }: CreateComponent) =>
  `${creatReactImport(useReactImport)}const ${componentName} = () => {
  return (
    <>
      <h1>${componentName}</h1>
    </>
  );
};

export default ${componentName};
`;
