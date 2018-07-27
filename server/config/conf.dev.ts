module.exports = {
  env: 'dev',
  server: {
    host: 'http://127.0.0.1',
    port: 4000
  },
  db: {
    database: 'site',
    username: 'yj',
    password: 'yjmima',
    port: '3306',
    logging: false,
    host: 'localhost'
  },
  redis: {
    host: 'http://127.0.0.1',
    port: 6379
  },
  csrf_salt: 'topfeed salt'
};
