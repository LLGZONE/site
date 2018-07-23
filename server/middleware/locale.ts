import zh from 'locales/zh-cn.json';
import en from 'locales/en.json';
export default (
  opts = {
    defaultLocale: 'en', // 默认兜底语言
    allowLangs: ['en', 'zh'], // 语言白名单,
    cookieFiled: 'locale'
  }
) => async (ctx, next) => {
  const { defaultLocale, allowLangs, cookieFiled } = opts;
  let locale = ctx.cookies.get(cookieFiled); // 优先获取cookie里locale设置
  // 最后从accept-header header里获取locale信息
  if (!locale) {
    locale = <string>ctx.acceptsLanguages(allowLangs) || defaultLocale;
  }
  ctx.locale = locale;
  ctx.messages = locale == 'en' ? en : zh;
  await next();
};
