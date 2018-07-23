import { isRedirect } from '@reach/router';
import configureStore from 'entry/studio/models/configure';
import getPage from '../lib/getPage';
import App from '../public/main';
const render = {
  async main(ctx) {
    const store = configureStore({
      user_info: ctx.user_info,
      locale: {
        locale: ctx.locale,
        messages: ctx.messages
      }
    });
    const initial_state = store.getState();
    try {
      const { html, scripts, styles } = await getPage({
        App,
        store,
        url: ctx.url
      });
      await ctx.render('home', {
        html,
        initial_state: JSON.stringify(initial_state),
        scripts,
        styles
      });
    } catch (err) {
      if (isRedirect(err)) {
        ctx.redirect(err.uri);
      } else {
        ctx.throw(500, err.message);
      }
    }
  }
};

export default render;
