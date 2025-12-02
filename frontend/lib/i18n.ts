// i18n.ts
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)                // <-- this loads translation files
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',  // public folder path
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,   // recommended for SSR
    },
  });

export default i18n;
