import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import useTranslate from '@/hooks/useTranslate'
import { Terminal } from 'lucide-react'

interface iAboutMe {
  className?: string
}

const AboutMe: React.FC<iAboutMe> = ({ className }) => {
  const { translate } = useTranslate()

  return (
    <Alert className={className}>
      <AlertTitle className='text-center'>{translate('AboutMe')}</AlertTitle>
      <Terminal className="h-4 w-4" />
      <AlertDescription>
        <p className='p-2'>{translate('AboutMeP1')}</p>
        <p className='p-2'>{translate('AboutMeP2')}</p>
        <ul className='p-2'>
          <li>- {translate('AboutMeP3')}</li>
          <li>- {translate('AboutMeP4')}</li>
          <li>- {translate('AboutMeP5')}</li>
        </ul>
        <p className='p-2'>{translate('AboutMeP6')}</p>
      </AlertDescription>
    </Alert>
  )
}

export default AboutMe