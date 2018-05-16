module.exports = {
  async signup(ctx, next) {
    const { username, password } = ctx.request.body;
    const result = await ctx.models.User.findOne({
      where: {
        username
      }
    })
    console.log('result:', result);
    await next();
  },
  async signin(ctx,next){

  }
};
