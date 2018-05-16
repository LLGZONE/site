module.exports = {
  async user_info(ctx,next){
    const username = ctx.session.username;
    ctx.success({
      username
    })
  },
  async signup(ctx, next) {
    const { username, password } = ctx.request.body;
    const result = await ctx.models.User.findOne({
      where: {
        username
      }
    })
    if(result){
      return ctx.fail('用户已经存在');
    }else {
      ctx.models.User.create(
        {
          username, 
          password
        }
      )
    }
    ctx.success(result);
  },
  async signin(ctx,next){
    const { username, password } = ctx.request.body;
    const result = await ctx.models.User.findOne({
      where: {
        username
      }
    })
    if(password !== result.password){
      return ctx.fail('密码不正确');
    }
    console.log('session:', ctx.session);
    ctx.session.username = username;
    console.log('session:', ctx.session);
    ctx.success();
  },
  async signout(ctx,next){
    const { username } = ctx.request.body;
    ctx.session.username = '';
    ctx.success();
  }
};
