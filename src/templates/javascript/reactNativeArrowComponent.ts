import CreateComponent from '../interfaces/CreateComponent';
import creatReactImport from '../shared/functions/create-react-import';

export default ({ componentName, useReactImport }: CreateComponent) => (
`${ creatReactImport(useReactImport) }import { View, Text, StyleSheet } from 'react-native';

const ${ componentName } = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>${ componentName }</Text>
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

export default ${ componentName };
`
);
