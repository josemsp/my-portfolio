import Menu from './Menu'
import LanguageSelector from '@/components/LanguageSelector'
import { Button, ThemeSelector } from '@/components'
import useTranslate from '@/hooks/useTranslate'
import { Download } from "lucide-react"

const LayoutHeader = () => {
  const { translate } = useTranslate();

  return (
    <header
      className="sticky top-0 z-50 py-2 bg-slate-50 dark:bg-slate-900/90 border-slate-300/5 backdrop-blur lg:border-b lg:border-slate-900/15 dark:border-slate-50/15"
    >
      <section className='container container-lg'>
        <nav className='flex justify-between '>
          <Menu />
          <div className='flex gap-5'>
            <a
              href="public/CV José Manuel Salazar Pérez - English.pdf"
              download
            >
              <Button variant="outline">
                <span className='hidden md:block mr-2'>{translate('ResumeCV')}</span>
                <Download className='h-[1.2rem] w-[1.2rem]' />
              </Button>
            </a>
            <LanguageSelector />
            <ThemeSelector />
          </div>
        </nav>
      </section>
    </header>
  )
}

export default LayoutHeader