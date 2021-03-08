import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';
import pascalCase from '../shared/functions/pascal-case';

export default ({ componentName, useReactImport }: CreateComponent) => (
`${ creatReactImport(useReactImport, true) }import { View, Text, StyleSheet } from 'react-native';

interface ${ pascalCase(componentName) }Props {
  children: ReactNode;
}

function ${ pascalCase(componentName) }({ children }: ${ pascalCase(componentName) }Props) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>${ pascalCase(componentName) }</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default ${ pascalCase(componentName) };
`
);
