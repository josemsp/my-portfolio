import useTranslate from "@/hooks/useTranslate"
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui"
import { Languages } from "lucide-react"

const LanguageSelector = () => {
  const { translate, languages, changeLanguage, lang } = useTranslate()

  const handleChangeLang = (lang: string) => {
    changeLanguage(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon"><Languages className="h-[1.2rem]" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((language, i) => (
          <DropdownMenuItem
            key={`language-selector-${i}`}
            onSelect={() => handleChangeLang(language)}
            className={`${lang === language && 'bg-slate-300 dark:bg-slate-600'}`}
          >
            {translate(language)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu >
  )
}

export default LanguageSelector