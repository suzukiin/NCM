'use strict'
const app = require('../src/app');
const http = require('http');

const port = 3000;
app.set('port', port);

const server = http.createServer(app);
app.listen(port)
console.log('Server running at port: '+port);
