import { Context } from 'koa';
import generate_crsf from '../lib/csrf';

export default config => async (ctx: Context, next) => {
  const { salt } = config;
  const { token, secret } = generate_crsf(salt);
  ctx.cookies.set('csrf-token', token);
  ctx.cookies.set('csrf-secret', secret, {
    httpOnly: false
  });
  await next();
};
