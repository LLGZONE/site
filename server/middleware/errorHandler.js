module.exports = async (ctx, next) => {
  try{
    console.log('pre');
    await next();
    console.log('next')
  }catch(err) {
    console.log('wtf:',err);
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.body  = {
      message: err.message
    }
    ctx.app.emit('error', err, ctx);
  }
}