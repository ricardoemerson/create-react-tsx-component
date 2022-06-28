import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import creatReactImport from '../shared/functions/create-react-import';

export default ({
  componentName,
  useReactImport,
  useReactFC,
  useExportDefault,
}: CreateComponent) =>
  `${creatReactImport(useReactImport)}import { Text } from 'react-native';

import { Container } from './styles';

${useExportDefault ? '' : 'export '}const ${componentName}${
    useReactFC ? ': React.FC' : ''
  } = () => {
  return (
    <Container>
      <Text>${componentName}</Text>
    </Container>
  );
};
${createExportDefault(componentName, useExportDefault)}`;
