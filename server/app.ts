/**
 * 服务器运维逻辑
 */
import { startServer } from './server';
import process from 'process';
import cluster from 'cluster';
import { cpus } from 'os';
import Log from './lib/log';
const processes = process.env.PROCESSES || cpus().length;
function signalHandler(signal) {
  // 自定义信号处理逻辑
  console.log('signal:', signal);
}
process.on('SIGINT', signalHandler.bind('SIGINT'));
process.on('SIGTERM', signalHandler.bind('SIGTERM'));

process.on('uncaughtException', function(error) {
  Log({
    level: 'error',
    info: error
  });
  process.exit();
});

process.on('unhandledRejection', function(rejection) {
  Log({
    level: 'error',
    info: rejection
  });
});
// 集群模式启动
export function workerExit(failedProcesses, worker) {
  if (failedProcesses < 20) {
    console.log(`Worker ${worker.process.pid} died, restarting.`);
    cluster.fork();
    failedProcesses++;
  } else {
    console.log('Workers died too many times, exiting.');
    process.exit();
  }
}
export function startCluster() {
  let failedProcesses = 0;

  cluster.setupMaster();

  for (let i = 0; i < processes; i++) {
    cluster.fork();
  }

  cluster.on('exit', worker => workerExit(failedProcesses, worker));
  cluster.on('exit', () => failedProcesses++);

  console.log(`Started cluster with ${processes} processes.`);
}

if (cluster.isMaster && processes > 1) {
  startCluster();
} else {
  startServer();
}
