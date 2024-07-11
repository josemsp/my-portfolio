import useTranslate from "@/hooks/useTranslate"
import USA from '@/assets/usa.svg?react'
import MEX from '@/assets/mex.svg?react'

const Languages = () => {
  const { translate } = useTranslate()

  return (
    <section id="languages">
      <h2 className="text-xl">{translate('Languages')}</h2>
      <div className="mt-5">
        <div className="flex gap-5 items-center">
          <MEX />
          <h3 className="font-bold">{translate('Spanish')}</h3>
        </div>
        <div className="flex gap-5 items-center">
          <USA />
          <h3 className="font-bold">{translate('English')}</h3>
        </div>
      </div>
    </section>
  )
}

export default Languages