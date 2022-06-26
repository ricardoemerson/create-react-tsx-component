import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, useReactImport }: CreateComponent) =>
  `${creatReactImport(useReactImport, true)}import { Text } from 'react-native';

import { Container } from './styles';

interface ${pascalCase(componentName)}Props {
  children: ReactNode;
}

function ${pascalCase(componentName)}({ children }: ${pascalCase(componentName)}Props) {
  return (
    <Container>
      <Text>${componentName}</Text>
      {children}
    </Container>
  );
}

export default ${componentName};
`;
