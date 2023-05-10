import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import createReactImport from '../shared/functions/create-react-import';
import createStylesImport from '../shared/functions/create-styles-import';
import pascalCase from '../shared/functions/pascal-case';

import { camelCase } from 'lodash';

export default ({
  componentName,
  styleName,
  useReactImport,
  useCSSModule,
  usesStylesCVA,
  useExportDefault,
}: CreateComponent) =>
  `${createReactImport(useReactImport, true)}${createStylesImport(
    styleName,
    useCSSModule,
    usesStylesCVA,
    componentName
  )}

${
usesStylesCVA
  ? `interface ${pascalCase(componentName)}Props extends VariantProps<typeof ${camelCase(componentName)}Styles> {
  children: ReactNode;${usesStylesCVA ? '\n  className?: string;' : ''}
}`
  : `interface ${pascalCase(componentName)}Props {
  children: ReactNode;
}`
}

${useExportDefault ? '' : 'export '}function ${pascalCase(componentName)}({ children${
    usesStylesCVA ? `, className = ''` : ''
  } }: ${pascalCase(componentName)}Props) {${
    usesStylesCVA
      ? `\n  const stylesFor${pascalCase(componentName)} = cn(${camelCase(
          componentName
        )}Styles({ className }));\n`
      : ''
  }
  return (
    ${
      styleName?.endsWith('styles') && !usesStylesCVA ? `<Container>` : `<>`
    }
      <h1${
        usesStylesCVA
          ? ` className={stylesFor${pascalCase(componentName)}}`
          : ''
      }>${componentName}</h1>
      {children}
    ${
      styleName?.endsWith('styles') && !usesStylesCVA
        ? `</Container>`
        : `</>`
    }
  );
}
${createExportDefault(componentName, useExportDefault)}`;
