import profile_pic from '@/assets/profile_picture.jpg'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import useTranslate from '@/hooks/useTranslate';
import { Terminal } from 'lucide-react';
import GitHub from '@/assets/github.svg?react'
import Linkedin from '@/assets/linkedin.svg?react'
import CopyClipboard from '@/components/CopyClipboard';

const AboutMe = () => {
  const { translate } = useTranslate();
  const email = 'jose_salazar_@outlook.com';

  return (
    <section id='aboutMe' className=''>
      <div className='grid justify-center align-middle gap-5'>
        <div className='text-center flex flex-col md:flex-row justify-between items-center gap-5 w-9/12 justify-self-center'>
          <div className="flex justify-center">
            <img src={profile_pic} className="circle w-60 md:w-80 h-60 md:h-80 object-cover grayscale" alt={translate('MyName')} />
          </div>
          <div className='flex flex-col gap-3 md:gap-5'>
            <h1 className="text-5xl dark:text-yellow-300">{translate('MyName')}</h1>
            <h2 className="text-xl">{translate('MyOccupation')}</h2>
            <CopyClipboard text={email} />
            <div className='flex justify-center gap-5'>
              <a
                href='https://github.com/josemsp'
                target="_blank"
                title='GitHub'
                rel='noreferrer'
              >
                <GitHub className='h-[1.5rem] w-[1.5rem]' />
              </a>
              <a
                href='https://www.linkedin.com/in/jos%C3%A9-salazar-a67980a9/'
                target="_blank"
                title='Linkedin'
                rel='noreferrer'
              >
                <Linkedin className='h-[1.5rem] w-[1.5rem]' />
              </a>
            </div>
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