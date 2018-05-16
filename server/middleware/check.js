module.exports = {
  checkNotLogin(ctx,next){
    if(ctx.session && ctx.session.user){
      ctx.redirect('/admin');
    }else {
      await next();
    }
  },
  checkLogin(ctx,next){
    if(!ctx.session || !ctx.session.user){
      ctx.redirect('/signin');
    }else {
      await next();
    }
  }
}