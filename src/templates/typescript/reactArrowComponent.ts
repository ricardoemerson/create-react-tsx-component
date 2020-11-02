import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';

export default ({ componentName, useReactImport, useReactFC }: CreateComponent) => (
`${ creatReactImport(useReactImport) }const ${ componentName }${ useReactFC ? ': React.FC' : '' } = () => {
  return (
    <h1>${ componentName }</h1>
  );
}

export default ${ componentName };
`
);
