import CreateComponent from '../interfaces/CreateComponent';
import createExportDefault from '../shared/functions/create-export-default';
import createReactImport from '../shared/functions/create-react-import';

export default ({
  componentName,
  useReactImport,
  useReactFC,
  useExportDefault,
}: CreateComponent) =>
  `${createReactImport(
    useReactImport,
    false,
    true
  )}import { View, Text, StyleSheet } from 'react-native';

${useExportDefault ? '' : 'export '}const ${componentName}${
    useReactFC ? ': React.FC' : ''
  } = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>${componentName}</Text>
    </View>
  );
};

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
${createExportDefault(componentName, useExportDefault)}`;
