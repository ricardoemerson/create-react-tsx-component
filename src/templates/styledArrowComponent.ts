export default (componentName: string) => (
`import React from 'react';

import { Container } from './styles';

const ${componentName}: React.FC = () => {

  return (
    <Container>
      <h1>${componentName}</h1>
    </Container>
  );
};

export default ${componentName};
`
);
