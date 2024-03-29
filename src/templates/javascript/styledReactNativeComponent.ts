import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import createReactImport from '../shared/functions/create-react-import';

export default ({ componentName, useReactImport, useExportDefault }: CreateComponent) =>
  `${createReactImport(useReactImport, false, true)}import { Text } from 'react-native';

import { Container } from './styles';

${useExportDefault ? '' : 'export '}function ${componentName}() {
  return (
    <Container>
      <Text>${componentName}</Text>
    </Container>
  );
}
${createExportDefault(componentName, useExportDefault)}`;
