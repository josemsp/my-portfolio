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