// @ts-check
export default {
  async user_info(ctx, next) {
    const username = ctx.session.username;
    ctx.success({
      username
    });
  },
  async signup(ctx, next) {
    const { username, password } = ctx.request.body;
    const result = await ctx.service.user.getUserByLoginName(username);
    if (result) {
      return ctx.fail('用户已经存在');
    } else {
      ctx.models.User.create({
        username,
        password
      });
    }
    ctx.success(result);
  },
  async signin(ctx, next) {
    const { username, password } = ctx.request.body;
    const result = await ctx.service.user.getUserByLoginName(username);
    if (password !== result.password) {
      return ctx.fail('密码不正确');
    }
    ctx.session.username = username;
    ctx.success();
  },
  async signout(ctx, next) {
    const { username } = ctx.request.body;
    ctx.session.username = '';
    ctx.success();
  }
};
