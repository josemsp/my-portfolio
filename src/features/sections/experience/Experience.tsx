import { calculateTimeFromTimePeriod } from "@/helpers";
import useTranslate from "@/hooks/useTranslate"
import Medal from '@/assets/medal.svg?react'

const workExperiences = [
  {
    company: 'Andonix',
    rol: 'FullStackDeveloper',
    period: 'Sep 2019 - Jul 2024',
    workingTime: '',
    responsibility: 'KeyAchievements',
    options: [
      { label: 'TechExp1Title1', description: 'TechExp1Experience1' },
      { label: 'TechExp1Title2', description: 'TechExp1Experience2' },
      { label: 'TechExp1Title3', description: 'TechExp1Experience3' }
    ]
  },
  {
    company: 'Sección Amarilla',
    rol: 'FullStackDeveloper',
    period: 'Jul 2017 - Sep 2019',
    responsibility: 'KeyAchievements',
    options: [
      { label: 'TechExp2Title1', description: 'TechExp2Experience1' },
      { label: 'TechExp2Title2', description: 'TechExp2Experience2' },
      { label: 'TechExp2Title3', description: 'TechExp2Experience3' }
    ]
  },
  {
    company: 'Grupo Salinas',
    rol: 'BackendDeveloper',
    period: 'Feb 2016 - May 2017',
    responsibility: 'Responsibilities',
    options: [
      { label: 'TechExp3Title1', description: 'TechExp3Experience1' },
    ]
  }
];

const Experience = () => {
  const { translate } = useTranslate();

  return (
    <section id="experience">
      <h2 className="text-xl">{translate('WorkExperience')}</h2>
      <div className="mt-5 mb-5 grid gap-5">
        {workExperiences.map((we, i) => (
          <article key={`experience-${i}`} className="">
            <h3 className="font-bold">** {we.company} ** | {translate(we.rol)}</h3>
            <div className="flex gap-5">
              <span>{we.period}</span>
              <span>{`(${calculateTimeFromTimePeriod(we.period, translate)})`}</span>
            </div>
            <p className="flex align-middle mt-5 gap-3 dark:text-yellow-300">
              <Medal className="block dark:hidden" width={25} height={25} />
              <Medal className="hidden dark:block" />
              ** {translate(we.responsibility)}:
            </p>
            <ul>
              {we.options.map((op, i) => (
                <li key={`responsibilities-${i}`}>
                  <span className="mr-3">{translate(op.label)}:</span>
                  <span>{translate(op.description)}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience