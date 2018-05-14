module.exports = {
  apps : [
    {
      name      : 'site',
      script    : 'server/app.js',
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy : {
    production : {
      user : 'yj',
      host : '47.104.13.218',
      ref  : 'origin/master',
      repo : 'https://github.com/hardfist/site',
      path : '/home/yj/site',
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
};
