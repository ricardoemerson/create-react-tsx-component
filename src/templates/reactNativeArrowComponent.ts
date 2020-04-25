export default (componentName: string) => (
`import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const ${componentName}: React.FC = () => {

  return (
    <SafeAreaView>
      <Text>${componentName}</Text>
    </SafeAreaView>
  );
}

export default ${componentName};
`
);
