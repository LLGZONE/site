module.exports = {
  async signup(ctx, next) {
    const { username, password } = ctx.request.body;
    const result = await ctx.models.User.findOne({
      where: {
        username
      }
    })
    console.log('result2:', result);
    if(result){
      return ctx.fail();
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
    await next;
  }
};
