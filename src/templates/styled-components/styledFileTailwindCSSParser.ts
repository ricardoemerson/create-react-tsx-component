import CreateComponent from '../interfaces/CreateComponent';
import pascalCase from '../shared/functions/pascal-case';

import { camelCase } from 'lodash';

export default ({ componentName }: CreateComponent) =>
  `import tw from '@shared/functions/TailwindCSSParser';

const baseStyles = tw(\`
  bg-gray-50 text-gray-900 dark:(bg-gray-900 text-gray-200)
\`);

interface ${pascalCase(componentName)}StyleProps {
  className?: string;
}

export default function ${camelCase(componentName)}Styles({ className }: ${pascalCase(
    componentName
  )}StyleProps) {
  const styles = [];

  className && styles.push(className);
  styles.push(baseStyles);

  return styles.join(' ');
}
`;
