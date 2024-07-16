import AboutMe from "./sections/about-me/AboutMe"
import Experience from "./sections/experience/Experience"
import Languages from "./sections/languages/Languages"
import Projects from "./sections/projects/Projects"
import Skills from "./sections/skills/Skills"

const LayoutMain = () => {

  return (
    <main className='grid justify-center'>
      <div className="bg-slate-200 dark:bg-slate-800 px-3 sm:px-4 md:px-14 py-5 grid gap-12 max-w-screen-lg">
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Languages />

      </div>
    </main>
  )
}

export default LayoutMain