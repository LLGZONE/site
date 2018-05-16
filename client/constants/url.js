const config = require('../../config/conf.dev');
const url = {
  signup: '/signup',
  signin: '/signin'
}
console.log('config:', config);
if(config.env === 'dev') {
  const server = config.server;
  for(const [key,value] of Object.entries(url)){
    url[key] = `${server.host}:${server.port}${value}`
  }
}
console.log('url:', url);
export default url;