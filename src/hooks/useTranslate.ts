// import dictionaryEN from "@/core/locales/dictionary-en";
// import dictionaryES from "@/core/locales/dictionary-es";
// import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";

// export type LanguageCode = 'en' | 'es';

// type Language = {
//   code: LanguageCode;
//   name: string;
// }

// const languages: Language[] = [
//   { code: "en", name: "English" },
//   { code: "es", name: "Spanish" },
// ];

// interface iTranslate {
//   translate: (word: string) => string;
//   setLang: (lang: LanguageCode) => void;
//   lang: LanguageCode;
//   languages: Language[];
// }

// const useTranslate = create<iTranslate>()(
//   persist(
//     (set, get) => ({
//       lang: 'en',
//       languages: languages,
//       setLang: (newLang: LanguageCode) => {
//         if (languages.some(l => l.code === newLang)) {
//           set({ lang: newLang })
//         }
//       },
//       translate: (word: string) => {
//         const dictionary = get().lang === 'en' ? dictionaryEN : dictionaryES;
//         return dictionary[word] || `-${word}-`;
//       }
//     }),
//     {
//       name: 'translate-storage', // name of the item in the storage (must be unique)
//       storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//     }
//   )
// )

import { useTranslation } from "react-i18next"

const useTranslate = () => {
  const { t, i18n } = useTranslation()

  return {
    translate: t as (w: string) => string,
    changeLanguage: i18n.changeLanguage,
    lang: i18n.language,
    languages: i18n.languages
  }
}

export default useTranslate