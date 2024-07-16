import useTranslate from "@/hooks/useTranslate"
import my_portfolio from '@/assets/my-portfolio.png'
import netflix_clone from '@/assets/netflix-clone.png'
import HTMLIcon from '@/assets/html.svg?react'
import JavascriptIcon from '@/assets/javascript.svg?react'
import CssIcon from '@/assets/css.svg?react'
import TailwindIcon from '@/assets/tailwind.svg?react'
import ReactIcon from '@/assets/react.svg?react'
import FirebaseIcon from '@/assets/firebase.svg?react'
import AxiosIcon from '@/assets/axios.svg?react'
import { FunctionComponent, SVGAttributes } from "react"
import CustomTooltip from "@/components/CustomTooltip"

interface projects {
  name: string;
  technologies: {
    name: string;
    icon: FunctionComponent<SVGAttributes<SVGElement>>;
  }[];
  image: string;
  url: string;
}

const projects: projects[] = [
  {
    name: 'Portfolio',
    technologies: [
      { name: 'HTML', icon: HTMLIcon },
      { name: 'CSS', icon: CssIcon },
      { name: 'React JS', icon: ReactIcon },
      { name: 'JavaScript', icon: JavascriptIcon },
      { name: 'Tailwind', icon: TailwindIcon },
    ],
    image: my_portfolio,
    url: 'https://josemsp.github.io/my-portfolio/'
  },
  {
    name: 'Netflix Clone',
    technologies: [
      { name: 'HTML', icon: HTMLIcon },
      { name: 'CSS', icon: CssIcon },
      { name: 'React JS', icon: ReactIcon },
      { name: 'JavaScript', icon: JavascriptIcon },
      { name: 'Tailwind', icon: TailwindIcon },
      { name: 'Firebase', icon: FirebaseIcon },
      { name: 'Axios', icon: AxiosIcon },
    ],
    image: netflix_clone,
    url: 'https://josemsp.github.io/netflix-clone/'
  }
]


const Projects = () => {
  const { translate } = useTranslate()

  return (
    <section id="projects" className="">
      <h2 className="text-xl mb-6">{translate('Projects')}</h2>
      {/* <p>{translate('WorkingOnIt')}...</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((pr, i) => (
          <li key={`project-${i}`} className="flex flex-col gap-5 group relative rounded-3xl bg-slate-50 p-6 dark:highlight-white/5 hover:bg-slate-100 dark:bg-slate-700/50">
            <p className="text-center">{pr.name}</p>
            <div className="bg-gray-600 p-[1px] dark:p-0 rounded-md">
              <div className="aspect-[672/494] relative rounded-md  overflow-hidden">
                <a
                  href={pr.url}
                  target="_blank"
                  title={pr.name}
                  rel='noreferrer'
                >
                  <img src={pr.image} alt={pr.name} className="absolute inset-0 w-full h-full" />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-5">
              {pr.technologies.map((technology, i) => (
                <CustomTooltip key={`tech-icon-${i}`} label={technology.name}>
                  <technology.icon
                    width={35}
                    height={35}
                    className="dark:text-white"
                  />
                </CustomTooltip>
              ))}
            </div>
          </li>
        ))}
      </div>
    </section >
  )
}

export default Projects