import useTranslate from '@/hooks/useTranslate'
import profile_pic from '@/assets/profile_picture.jpg'

const Home = () => {
  const { translate } = useTranslate();

  return (
    <div className='text-center'>
      <div className="flex justify-center">
        <img src={profile_pic} className="circle w-80 h-80 object-cover grayscale" alt={translate('MyName')} />
      </div>
      <h1 className="text-2xl">{translate('MyName')}</h1>
      <h2 className="text-lg">{translate('MyOccupation')}</h2>
      <span className="italic">{`" ${translate('MyPhrase')} "`}</span>
    </div>
  )
}

export default Home