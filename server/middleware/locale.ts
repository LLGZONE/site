import zh from 'locales/zh-cn.json';
import en from 'locales/en.json';
export default (defaultLocale = 'en') => async (ctx, next) => {
  const acceptLangs = ['en', 'zh'];
  const locale = ctx.acceptsLanguages(acceptLangs) || defaultLocale;
  ctx.locale = locale;
  ctx.messages = locale == 'en' ? en : zh;
  await next();
};
