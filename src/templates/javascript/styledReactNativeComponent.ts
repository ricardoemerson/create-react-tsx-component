import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';

export default ({ componentName, useReactImport }: CreateComponent) =>
  `${creatReactImport(useReactImport)}import { Text } from 'react-native';

import { Container } from './styles';

function ${componentName}() {
  return (
    <Container>
      <Text>${componentName}</Text>
    </Container>
  );
}

export default ${componentName};
`;
