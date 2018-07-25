import * as React from 'react';
import ReactServerDOM from 'react-dom/server';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { getScript, getStyle } from '../lib/bundle';
export default async function getPage({
  store,
  url,
  App,
  page
}: {
  store?: object;
  App?: any;
  url: string;
  page: string;
}) {
  const stats = require('../public/buildClient/react-loadable.json');
  const manifest = require('../public/buildClient/manifest.json');
  const mainjs = getScript(manifest[`${page}.js`]);
  const maincss = getStyle(manifest[`${page}.css`]);
  if (!App && !store) {
    return {
      html: '',
      scripts: mainjs,
      styles: maincss
    };
  }
  let modules = [];
  let html = ReactServerDOM.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App url={url} store={store} />
    </Loadable.Capture>
  );
  let bundles = getBundles(stats, modules);
  const styles = bundles
    .filter(bundle => bundle && bundle.file.endsWith('.css'))
    .map(bundle => getStyle(bundle.publicPath))
    .concat(maincss)
    .join('\n');
  const scripts = bundles
    .filter(bundle => bundle && bundle.file.endsWith('.js'))
    .map(bundle => getScript(bundle.publicPath))
    .concat(mainjs)
    .join('\n');
  return {
    html,
    scripts,
    styles
  };
}
