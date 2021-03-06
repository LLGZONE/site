import { isRedirect } from '@reach/router';
import configureStore from 'entry/feed/models/configure';
import getPage from '../lib/getPage';
import App from '../public/buildServer/feed';
const render = {
  async main(ctx) {
    const item_id = ctx.params.item_id;
    if (!item_id) {
      ctx.throw(404, 'article not found');
    }
    const article_data = await ctx.service.article.article_item(item_id);
    const store = configureStore({
      user_info: ctx.user_info,
      locale: {
        locale: ctx.locale,
        messages: ctx.messages
      },
      detail: article_data
    });
    const initial_state = store.getState();
    try {
      const { html, scripts, styles } = await getPage({
        App,
        store,
        url: ctx.url,
        page: 'feed'
      });
      await ctx.render('feed', {
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
