export default (componentName: string) => (
`import React from 'react';

const ${ componentName }: React.FC = () => {

  return (
    <h1>${ componentName }</h1>
  );
}

export default ${ componentName };
`
);
