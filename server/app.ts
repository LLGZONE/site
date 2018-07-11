import { startServer } from './server';
import process from 'process';
const log = console.log;

process.on('uncaughtException', function(error) {
  log({
    error,
    userAgent: 'SERVER'
  });
  process.exit();
});

process.on('unhandledRejection', function(rejection) {
  log({
    rejection,
    userAgent: 'SERVER'
  });
});

startServer();
