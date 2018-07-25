import configureStore from 'entry/studio/models/configure';
import getPage from '../lib/getPage';
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
    const { scripts, styles } = await getPage({
      url: ctx.url,
      page: 'about'
    });
    await ctx.render('about', {
      initial_state: JSON.stringify(initial_state),
      page: 'about',
      scripts,
      styles
    });
  }
};
export default render;
