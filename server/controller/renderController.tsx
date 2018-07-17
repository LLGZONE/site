import ReactServerDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerLocation } from '@reach/router';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import configureStore from '../../client/entry/models/configure';
import App from '../public/main';
import stats from '../public/react-loadable.json';
import * as React from 'react';

export default {
  async index(ctx) {
    const store = configureStore({
      user_info: ctx.user_info
    });
    let modules = [];
    const html = ReactServerDOM.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <ServerLocation url={ctx.url}>
          <Provider store={store}>
            <App />
          </Provider>
        </ServerLocation>
      </Loadable.Capture>
    );
    let bundles = getBundles(stats, modules);
    const styles = bundles
      .filter(bundle => bundle && bundle.file.endsWith('.css'))
      .map(bundle => `<link rel="stylesheet" href="/${bundle.file}" />`)
      .join('\n');
    const scripts = bundles
      .filter(bundle => bundle && bundle.file.endsWith('.js'))
      .map(
        bundle =>
          `<script type="text/javascript" src="/${bundle.file}"></script>`
      )
      .join('\n');

    const initial_state = store.getState();
    await ctx.render('home', {
      html,
      initial_state: JSON.stringify(initial_state),
      scripts,
      styles
    });
  }
};
