import { isRedirect } from '@reach/router';
import configureStore from 'entry/studio/models/configure';
import getPage from '../lib/getPage';
import App from '../public/buildServer/studio';
const render = {
  async main(ctx) {
    const result = await ctx.service.article.article_list(0, 10);
    const store = configureStore({
      user_info: ctx.user_info,
      locale: {
        locale: ctx.locale,
        messages: ctx.messages
      },
      feed: result.subjects
    });
    const initial_state = store.getState();
    try {
      const { html, scripts, styles } = await getPage({
        App,
        store,
        url: ctx.url,
        page: 'studio'
      });
      await ctx.render('studio', {
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
