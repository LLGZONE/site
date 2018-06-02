const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';
module.exports = require(`./conf.${env}.js`);