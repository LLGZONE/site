import ReactServerDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerLocation } from '@reach/router';
import { init } from '@rematch/core';
import * as models from '../../client/entry/models';
import App from '../../dist/ssr/main';
import * as React from 'react';
export default {
  async index(ctx) {
    const store = init({
      models
    });
    ctx.body = ReactServerDOM.renderToStaticMarkup(
      <html>
        <div
          id="root"
          dangerouslySetInnerHTML={{
            __html: ReactServerDOM.renderToString(
              <ServerLocation url={ctx.url}>
                <Provider store={store}>
                  <App />
                </Provider>
              </ServerLocation>
            )
          }}
        />
        <script src="/main.js" />
      </html>
    );
  }
};
