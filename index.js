const http = require('http');
const config = require('config');
const app = require('./src/lib/server');
const log = require('./src/lib/log');

const server = http.createServer(app);

server.listen(config.appport, () => {
  log.info(`App listening on port ${config.appport}!`);
});