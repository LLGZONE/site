/**
 * 服务器运维逻辑
 */
import { startServer } from './server';

import process from 'process';
import Log from './lib/log';

/*
function signalHandler(signal) {
  // 自定义信号处理逻辑
  console.log('signal:', signal);
}

process.on('SIGINT', signalHandler.bind('SIGINT'));
process.on('SIGTERM', signalHandler.bind('SIGTERM'));
*/

process.on('uncaughtException', function(error) {
  Log({
    level: 'error',
    info: error
  });
});

process.on('unhandledRejection', function(rejection) {
  Log({
    level: 'error',
    info: rejection
  });
});
startServer();
