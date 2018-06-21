export default {
  async checkNotLogin(ctx, next) {
    if (ctx.session && ctx.session.user) {
      ctx.redirect('/admin');
    } else {
      await next();
    }
  },
  async checkLogin(ctx, next) {
    if (!ctx.session || !ctx.session.user) {
      ctx.redirect('/signin');
    } else {
      await next();
    }
  }
};
