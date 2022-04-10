import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, useReactImport, useReactFC, useExportDefault }: CreateComponent) => (
`${ creatReactImport(useReactImport) }${useExportDefault ? '' : 'export '}const ${ pascalCase(componentName) }${ useReactFC ? ': React.FC' : '' } = () => {
  return (
    <h1>${ componentName }</h1>
  );
}
${useExportDefault ? `

export default ${ pascalCase(componentName) };
` : ''}
`
);
