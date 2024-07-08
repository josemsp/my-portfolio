import { ThemeSelector } from '@/components'
import LanguageSelector from '@/components/LanguageSelector'
import AboutMe from './AboutMe'
import Home from './Home'

const Layout = () => {

  return (
    <div className='layout relative bg-slate-950'>
      <header
        className="sticky top-0 z-50 px-8 py-2 justify-end bg-slate-50 dark:bg-slate-900/90 border-slate-300/5 backdrop-blur lg:border-b lg:border-slate-900/15 dark:border-slate-50/15 flex gap-4"
      >
        <LanguageSelector />
        <ThemeSelector />
      </header>
      <main className='container bg-slate-700 dark:bg-slate-950 grid justify-center grid-cols-1 w-full'>
        <section id='home' className='bg-slate-200 dark:bg-slate-800 grid justify-center align-middle shadow-lg rounded-lg p-6 gap-5 '>
          <Home />
          <div className='flex justify-center'>
            <AboutMe className='w-4/5' />
          </div>
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="experience">
          <h2>Work Experience</h2>
          <article>
            <h3>Job Title</h3>
            <p>Company</p>
            <p>Start Date - Present</p>
            <ul>
              <li>Responsibility 1</li>
              <li>Responsibility 2</li>
              <li>Key achievement</li>
            </ul>
          </article>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <article>
            <h3>Project Name</h3>
            <p>Brief project description</p>
            <p>Technologies used: HTML, CSS, JavaScript, etc.</p>
            <a href="#">Link to project</a>
          </article>

        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>

          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: your@email.com</p>
          <p>LinkedIn: <a href="#">Your LinkedIn profile</a></p>
          <p>GitHub: <a href="#">Your GitHub profile</a></p>
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout
