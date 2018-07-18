import ReactServerDOM from 'react-dom/server';
import { isRedirect } from '@reach/router';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { getScript, getStyle } from '../lib/bundle';
import configureStore from '../../client/entry/main/models/configure';
import App from '../public/main';
import stats from '../public/react-loadable.json';
import * as React from 'react';
export default {
  async main(ctx) {
    const store = configureStore({
      user_info: ctx.user_info
    });
    let modules = [];
    let html = '';
    try {
      html = ReactServerDOM.renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
          <App url={ctx.url} store={store} />
        </Loadable.Capture>
      );
    } catch (err) {
      if (isRedirect(err)) {
        console.log('err:', err);
        ctx.redirect(err.uri);
      } else {
        html = '';
      }
    }

    let bundles = getBundles(stats, modules);
    const styles = bundles
      .filter(bundle => bundle && bundle.file.endsWith('.css'))
      .map(bundle => getStyle(bundle.file))
      .join('\n');
    const scripts = bundles
      .filter(bundle => bundle && bundle.file.endsWith('.js'))
      .map(bundle => getScript(bundle.file))
      .join('\n');
    const entry_scripts = getScript('main.js');
    const initial_state = store.getState();
    await ctx.render('home', {
      html,
      initial_state: JSON.stringify(initial_state),
      entry_scripts,
      scripts,
      styles
    });
  }
};
