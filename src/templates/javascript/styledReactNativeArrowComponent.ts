export default (componentName: string) => (
`import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

const ${componentName} = () => {

  return (
    <Container>
      <Text>${componentName}</Text>
    </Container>
  );
};

export default ${componentName};
`
);
