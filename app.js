const {createFile} = require('../03-bases-node/helpers/mult.js');
const argv = require('../03-bases-node/config/yargs');
require('colors');

console.clear();
 
createFile(argv.base, argv.hasta, argv.listar)
    .then(ok => console.log(ok.rainbow,'creada!'))
    .catch(err => console.log(err));

