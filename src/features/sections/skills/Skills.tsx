import useTranslate from "@/hooks/useTranslate"
import HTML from '@/assets/html.svg?react'
import Javascript from '@/assets/javascript.svg?react'
import Css from '@/assets/css.svg?react'
import Redux from '@/assets/redux.svg?react'
import Tailwind from '@/assets/tailwind.svg?react'
import Cypress from '@/assets/cypress.svg?react'
import Express from '@/assets/express.svg?react'
import Git from '@/assets/git.svg?react'
import Github from '@/assets/github.svg?react'
import Jest from '@/assets/jest.svg?react'
import Lambda from '@/assets/lambda.svg?react'
import Mongo from '@/assets/mongo.svg?react'
import Mongoose from '@/assets/mongoose.svg?react'
import Nextjs from '@/assets/nextjs.svg?react'
import Nodejs from '@/assets/nodejs.svg?react'
import ReactIcon from '@/assets/react.svg?react'
import Sql from '@/assets/sql.svg?react'
import Testlib from '@/assets/test-library.svg?react'
import TypescriptIcon from '@/assets/typescript.svg?react'
import Docker from '@/assets/docker.svg?react'


const skills = [
  {
    environment: 'Frontend',
    technologies: [
      { name: 'HTML', iconUrl: HTML },
      { name: 'JavaScript', iconUrl: Javascript },
      { name: 'CSS', iconUrl: Css },
      { name: 'Redux', iconUrl: Redux },
      { name: 'Tailwind', iconUrl: Tailwind },
      { name: 'React JS', iconUrl: ReactIcon },
    ]
  },
  {
    environment: 'Backend',
    technologies: [
      { name: 'Express', iconUrl: Express },
      { name: 'Lambda', iconUrl: Lambda },
      { name: 'MongoDB', iconUrl: Mongo },
      { name: 'Mongoose', iconUrl: Mongoose },
      { name: 'Node JS', iconUrl: Nodejs },
      { name: 'SQL', iconUrl: Sql },
    ]
  },
  {
    environment: 'Learning',
    technologies: [
      { name: 'Cypress', iconUrl: Cypress },
      { name: 'NextJS', iconUrl: Nextjs },
      { name: 'Test Library', iconUrl: Testlib },
      { name: 'TypeScript', iconUrl: TypescriptIcon },
      { name: 'docker', iconUrl: Docker },
    ]
  },
  {
    environment: 'Tools',
    technologies: [
      { name: 'Git', iconUrl: Git },
      { name: 'GitHub', iconUrl: Github },
      { name: 'Jest', iconUrl: Jest },
    ]
  }
]

const Skills = () => {
  const { translate } = useTranslate()

  return (
    <section id="skills" className="flex flex-col gap-9">
      <h2 className="text-xl">{translate('Skills')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {
          skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-5">
              <p className="text-center font-bold">{translate(skill.environment)}</p>
              <div className="grid grid-cols-2 gap-5">
                {skill.technologies.map((tech, i) => (
                  <div key={i} className="grid justify-center gap-2">
                    <tech.iconUrl width={40} height={40} className="justify-self-center"  />
                    <span className="justify-self-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills