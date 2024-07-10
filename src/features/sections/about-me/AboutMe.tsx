import profile_pic from '@/assets/profile_picture.jpg'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import useTranslate from '@/hooks/useTranslate';
import { Terminal } from 'lucide-react';

const AboutMe = () => {
  const { translate } = useTranslate();

  return (
    <section id='aboutMe' className='w-full'>
      <div className='grid justify-center align-middle gap-5'>
        <div className='text-center flex flex-col md:flex-row justify-between items-center gap-5 w-9/12 justify-self-center'>
          <div className="flex justify-center">
            <img src={profile_pic} className="circle w-60 md:w-80 h-60 md:h-80 object-cover grayscale" alt={translate('MyName')} />
          </div>
          <div className='flex flex-col gap-3 md:gap-5'>
            <h1 className="text-5xl dark:text-yellow-300">{translate('MyName')}</h1>
            <h2 className="text-xl">{translate('MyOccupation')}</h2>
            <span className="italic">{`"${translate('MyPhrase')}"`}</span>
          </div>
        </div>
        <div className='flex justify-center max-w-[90ch]'>
          <Alert>
            <AlertTitle className='text-center'>{translate('AboutMe')}</AlertTitle>
            <Terminal className="h-4 w-4" />
            <AlertDescription>
              <p className='mt-2'>{translate('AboutMeP1')}</p>
              <p className='mt-2'>{translate('AboutMeP2')}</p>
              <ul className='mt-2'>
                <li>- {translate('AboutMeP3')}</li>
                <li>- {translate('AboutMeP4')}</li>
                <li>- {translate('AboutMeP5')}</li>
              </ul>
              <p className='mt-2'>{translate('AboutMeP6')}</p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  )
}

export default AboutMe