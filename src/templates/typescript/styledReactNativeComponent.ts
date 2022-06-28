import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import creatReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, useReactImport, useExportDefault }: CreateComponent) =>
  `${creatReactImport(useReactImport, true, true)}import { Text } from 'react-native';

import { Container } from './styles';

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
