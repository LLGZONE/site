import webpack from 'webpack';
import webpackDevMiddleare from 'koa-webpack-dev-middleware';
import webpackConfig from '../../client/webpack.config.dev';
export default app => {
  if (app.env === 'development') {
    const compiler = webpack(webpackConfig);
    app.use(
      webpackDevMiddleare(compiler, {
        publicPath: '/',
        watchOptions: {
          poll: 1000
        }
      })
    );
  }
};
