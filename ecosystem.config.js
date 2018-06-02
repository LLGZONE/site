module.exports = {
  apps : [
    {
      name      : 'site',
      script    : 'dist/server/app.js',
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
      "pre-deploy": "git fetch --all",
      "post-deploy" : "npm install && npm run build:client && npm run build:server && pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
};
