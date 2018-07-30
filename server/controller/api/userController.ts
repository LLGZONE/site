// @ts-check
export default {
  async user_info(ctx) {
    const user = ctx.session.user;
    ctx.success({
      user_info: user
    });
  },
  async user_update(ctx) {
    const { user_info } = ctx.request.body;
    const { username } = ctx.session.user;
    const new_user = await ctx.service.user.updateUserInfo(username, user_info);
    return ctx.success({
      user_info: new_user
    });
  },
  async signup(ctx) {
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
  async signin(ctx) {
    const { username, password } = ctx.request.body;
    const result = await ctx.service.user.getUserByLoginName(username, true);
    if (password !== result.password) {
      return ctx.fail('密码不正确');
    }
    ctx.session.user = result;
    ctx.success();
  },
  async signout(ctx) {
    ctx.session.user = null;
    ctx.success();
  }
};
