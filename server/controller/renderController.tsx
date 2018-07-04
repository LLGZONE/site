import ReactServerDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import * as models from '../../client/entry/models';
import App from '../../client/entry/app';
import * as React from 'react';
export default {
  async index(ctx, next) {
    const store = init({
      models
    });
    ctx.body = ReactServerDOM.renderToStaticMarkup(
      <div
        id="container"
        dangerouslySetInnerHTML={{
          __html: ReactServerDOM.renderToString(
            <Provider store={store}>
              <App />
            </Provider>
          )
        }}
      />
    );
  }
};
