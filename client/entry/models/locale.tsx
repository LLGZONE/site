import zh from 'locales/zh-cn.json';
import en from 'locales/en.json';

export const locale = {
  state: {
    messages: en,
    locale: 'en'
  },
  reducers: {
    '@init': (state, init) => {
      return { ...state, ...init };
    },
    update_locale(state, locale) {
      const isEn = locale === 'en';
      if (isEn) {
        return {
          ...state,
          messages: en,
          locale: 'en'
        };
      } else {
        return {
          ...state,
          messages: zh,
          locale: 'zh'
        };
      }
    }
  }
};
