const executor = require('./executor');
require('./e2e-serve.js');

executor('cypress run');
executor.exit();