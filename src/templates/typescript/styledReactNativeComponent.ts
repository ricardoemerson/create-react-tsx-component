import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import createReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({
  componentName,
  styleName,
  useReactImport,
  useExportDefault,
}: CreateComponent) =>
  `${createReactImport(useReactImport, true, true)}import { Text } from 'react-native';

import { Container } from './${styleName}';

interface ${pascalCase(componentName)}Props {
  children: ReactNode;
}

${useExportDefault ? '' : 'export '}function ${pascalCase(
    componentName
  )}({ children }: ${pascalCase(componentName)}Props) {
  return (
    <Container>
      <Text>${componentName}</Text>
      {children}
    </Container>
  );
}
${createExportDefault(componentName, useExportDefault)}`;
