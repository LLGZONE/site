const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';
export default require(`./conf.${env}.js`);
