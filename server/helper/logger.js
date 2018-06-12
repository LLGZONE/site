const log4js = require('log4js');
log4js.configure({
  appenders: {
    console: { type: 'console' }
  },
  categories: {
    default: { appenders: ['console'], level: 'DEBUG' }
  }
});
const serverLogger = log4js.getLogger('server');
const clientLogger = log4js.getLogger('client');

module.exports = {
  serverLogger,
  clientLogger
};
