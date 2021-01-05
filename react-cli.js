const yargs = require('yargs');
const fs = require('fs/promises');
const path = require('path');
const camelCase = require('camelcase');

const argv = yargs
    .command(['$0 <filename>'], 'Creates react component', {}, (yargs) => {
        const filepath = path.resolve(`${camelCase(yargs.filename)}.js`);
        const res = `import React from 'react';
export const ${camelCase(yargs.filename)} = (props) => {
  return (
    <div>${yargs.filename}</div>
  );
}
`
        fs.writeFile(filepath, res)
            .then(() => console.log('Success'))
            .catch(e => console.error(e))
    })
    .argv