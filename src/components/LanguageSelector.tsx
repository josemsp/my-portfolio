import useTranslate, { LanguageCode } from "@/hooks/useTranslate"
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui"
import { Languages } from "lucide-react"

const LanguageSelector = () => {
  const { translate, languages, setLang, lang } = useTranslate()

  const handleChangeLang = (lang: LanguageCode) => {
    setLang(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon"><Languages className="h-[1.2rem]"/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((language, i) => (
          <DropdownMenuItem
            key={`language-selector-${i}`}
            onSelect={() => handleChangeLang(language.code)}
            className={`${lang === language.code && 'bg-slate-300 dark:bg-slate-600'}`}
          >
            {translate(language.name)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu >
  )
}

export default LanguageSelector