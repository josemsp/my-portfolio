import useTranslate from "@/hooks/useTranslate"
import my_portfolio from '@/assets/my-portfolio.png'
import netflix_clone from '@/assets/netflix-clone.png'
import insta_clone from '@/assets/insta-clone.png'
import HTMLIcon from '@/assets/html.svg?react'
import JavascriptIcon from '@/assets/javascript.svg?react'
import CssIcon from '@/assets/css.svg?react'
import TailwindIcon from '@/assets/tailwind.svg?react'
import ReactIcon from '@/assets/react.svg?react'
import FirebaseIcon from '@/assets/firebase.svg?react'
import AxiosIcon from '@/assets/axios.svg?react'
import ZustandIcon from '@/assets/zustand.svg?react'
import RxjsIcon from '@/assets/rxjs.svg?react'
import DateFnsIcon from '@/assets/datefns.svg?react'
import GoToIcon from '@/assets/go-to.svg?react'
import { FunctionComponent, SVGAttributes } from "react"
import CustomTooltip from "@/components/CustomTooltip"
import Slider from "@/components/slider"

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
  },
  {
    name: 'Insta Clone',
    technologies: [
      { name: 'HTML', icon: HTMLIcon },
      { name: 'CSS', icon: CssIcon },
      { name: 'React JS', icon: ReactIcon },
      { name: 'JavaScript', icon: JavascriptIcon },
      { name: 'Tailwind', icon: TailwindIcon },
      { name: 'Firebase', icon: FirebaseIcon },
      { name: 'Zustand', icon: ZustandIcon },
      { name: 'RxJS', icon: RxjsIcon },
      { name: 'Date fns', icon: DateFnsIcon },
    ],
    image: insta_clone,
    url: 'https://josemsp.github.io/insta-clone/'
  },
]

const Projects = () => {
  const { translate } = useTranslate()

  return (
    <section id="projects" className="flex flex-col max-w-4xl mx-auto">
      <h2 className="text-xl mb-6">{translate('Projects')}</h2>
      <Slider
        height="30rem"
        items={projects.map((pr) => (
          <div
            className="rounded-3xl bg-slate-50 md:px-6 pb-5 dark:highlight-white/5 hover:bg-slate-100 dark:bg-slate-700/50 md:max-w-[80%] mx-auto flex flex-col h-full select-none"
          >
            <p className=" text-center">{pr.name}</p>
            <div className="grid grid-cols-1 md:grid-cols-[1fr,20%] h-full gap-7">
              <div className="rounded-lg overflow-hidden relative">
                <img src={pr.image} alt={pr.name} className="object-cover w-full h-full " />
                <a
                  href={pr.url}
                  target="_blank"
                  title={pr.name}
                  rel='noreferrer'
                >
                  <div className="absolute bottom-3 right-3 h-9 w-9 rounded-sm bg-gray-100/70 hover:bg-gray-100 flex items-center justify-center">
                    <GoToIcon className=" text-blue-500 h-5 w-5" />
                  </div>
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
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
            </div>
          </div>
        ))}
        className="w-full max-w-[80vw] mx-auto"
      />
    </section >
  )
}

export default Projects