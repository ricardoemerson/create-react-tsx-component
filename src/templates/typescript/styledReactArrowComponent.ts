export default (componentName: string, styleName: string) => (
`import React from 'react';

${ styleName === 'styles' ? `import { Container } from './${ styleName }';` : `import './${ styleName }';` }

const ${ componentName } = () => {
  return (
    ${ styleName === 'styles' ? `<Container>` : `<>` }
      <h1>${ componentName }</h1>
    ${ styleName === 'styles' ? `</Container>` : `</>` }
  );
};

export default ${ componentName };
`
);
