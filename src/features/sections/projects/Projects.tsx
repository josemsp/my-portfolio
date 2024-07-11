import useTranslate from "@/hooks/useTranslate"

const Projects = () => {
  const { translate } = useTranslate()

  return (
    <section id="projects" className="h-[4rem]">
      <h2 className="text-xl ">{translate('Skills')}</h2>
      <p>{translate('WorkingOnIt')}...</p>
    </section>
  )
}

export default Projects