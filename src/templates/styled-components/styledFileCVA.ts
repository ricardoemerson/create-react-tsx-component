import CreateComponent from '../interfaces/CreateComponent';

import { camelCase } from 'lodash';

export default ({ componentName }: CreateComponent) =>
  `import { cva } from 'class-variance-authority';

export const ${camelCase(componentName)}Styles = cva(
  \`
    bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200
  \`,
  {
    variants: {},
    defaultVariants: {},
  }
);
`;
