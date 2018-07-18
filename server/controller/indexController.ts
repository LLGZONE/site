export default {
  async index(ctx) {
    const user_info = ctx.user_info || {};
    if (user_info.username) {
      ctx.redirect('/studio');
    } else {
      ctx.redirect('/studio/signin');
    }
  }
};
