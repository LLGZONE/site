import * as React from 'react';
import ReactServerDOM from 'react-dom/server';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../public/react-loadable.json';
import { getScript, getStyle } from '../lib/bundle';
export default async function getPage({ store, url, App }) {
  let modules = [];
  let html = ReactServerDOM.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App url={url} store={store} />
    </Loadable.Capture>
  );
  let bundles = getBundles(stats, modules);
  const styles = bundles
    .filter(bundle => bundle && bundle.file.endsWith('.css'))
    .map(bundle => getStyle(bundle.file))
    .join('\n');
  const scripts = bundles
    .filter(bundle => bundle && bundle.file.endsWith('.js'))
    .map(bundle => getScript(bundle.file))
    .join('\n');
  return {
    html,
    scripts,
    styles
  };
}
