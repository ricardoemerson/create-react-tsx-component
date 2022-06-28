import pascalCase from './pascal-case';

export default function creatExportDefault(
  componentName: string,
  useExportDefault?: boolean
) {
  return useExportDefault ? `\nexport default ${pascalCase(componentName)};\n` : '';
}
