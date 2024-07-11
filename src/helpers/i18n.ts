import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
// cSpell:ignore languagedetector
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    // supportedLngs: ['en', 'es'],
    // fallbackLng: 'en',
    // load: 'languageOnly',

    supportedLngs: ['en', 'es'],
    fallbackLng: ['en', 'es'],
    // debug: true,
    // interpolation: {
    //   escapeValue: false, // React already does escaping
    // },
    backend: {
      loadPath: () => `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
      // loadPath: '/locales/{{lng}}/{{ns}}.json'
      //   // loadPath: 'src/core/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
