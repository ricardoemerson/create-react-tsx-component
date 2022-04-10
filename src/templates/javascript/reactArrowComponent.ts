import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, useReactImport, useExportDefault }: CreateComponent) => (
`${ creatReactImport(useReactImport) }${useExportDefault ? '' : 'export '}const ${ pascalCase(componentName) } = () => {
  return (
    <h1>${ pascalCase(componentName) }</h1>
  );
}
${useExportDefault ? `

export default ${ pascalCase(componentName) };
` : ''}
`
);
