module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi'],
  },
  localePath: './public/locales',
  ns: ['common', 'hero'],
  defaultNS: 'common',
  detection: {
    order: ['cookie', 'localStorage', 'navigator'],
    caches: ['cookie', 'localStorage'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
