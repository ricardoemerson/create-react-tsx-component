export default (componentName: string) => (
`import React from 'react';

const ${ componentName } = () => {

  return (
    <h1>${ componentName }</h1>
  );
}

export default ${ componentName };
`
);
