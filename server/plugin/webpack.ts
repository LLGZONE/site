import webpack from 'webpack';
import webpackDevMiddleare from 'koa-webpack-dev-middleware';
import webpackConfig from '../../client/webpack.config.dev';
export default app => {
  if (app.env === 'development') {
    const compiler = webpack(webpackConfig);
    const instance = webpackDevMiddleare(compiler, {
      publicPath: '/',
      watchOptions: {
        poll: 1000
      }
    });
    app.use(instance);
    app.instance = instance;
  }
};
