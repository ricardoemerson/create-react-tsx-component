import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';

export default ({ componentName, useReactImport, useReactFC }: CreateComponent) =>
  `${creatReactImport(useReactImport)}import { Text } from 'react-native';

import { Container } from './styles';

const ${componentName}${useReactFC ? ': React.FC' : ''} = () => {
  return (
    <Container>
      <Text>${componentName}</Text>
    </Container>
  );
};

export default ${componentName};
`;
