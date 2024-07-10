// import AboutMe from "./AboutMe"
// import Home from "./Home"

import AboutMe from "./sections/about-me/AboutMe"
import Experience from "./sections/experience/Experience"

const LayoutMain = () => {

  return (
    // <main className='grid justify-center w-full'>
    //   <div id='aboutMe' className='max-w-screen-md'>
    //     <section  className='bg-slate-200 dark:bg-slate-800 grid justify-center align-middle shadow-lg rounded-lg p-6 gap-5'>
    //       <Home />
    //       <div className='flex justify-center'>
    //         <AboutMe className='w-4/5' />
    //       </div>
    //     </section>
    //   </div>
    //   <section id="experience">
    //     <h2>Work Experience</h2>
    //     <article>
    //       <h3>Job Title</h3>
    //       <p>Company</p>
    //       <p>Start Date - Present</p>
    //       <ul>
    //         <li>Responsibility 1</li>
    //         <li>Responsibility 2</li>
    //         <li>Key achievement</li>
    //       </ul>
    //     </article>
    //   </section>

    //   <section id="projects">
    //     <h2>Projects</h2>
    //     <article>
    //       <h3>Project Name</h3>
    //       <p>Brief project description</p>
    //       <p>Technologies used: HTML, CSS, JavaScript, etc.</p>
    //       <a href="#">Link to project</a>
    //     </article>

    //   </section>

    //   <section id="skills">
    //     <h2>Technical Skills</h2>
    //     <ul>
    //       <li>HTML5</li>
    //       <li>CSS3</li>
    //       <li>JavaScript</li>

    //     </ul>
    //   </section>

    //   <section id="contact">
    //     <h2>Contact</h2>
    //     <p>Email: your@email.com</p>
    //     <p>LinkedIn: <a href="#">Your LinkedIn profile</a></p>
    //     <p>GitHub: <a href="#">Your GitHub profile</a></p>
    //   </section>
    // </main>
    <main className='grid justify-center'>
      <div className="bg-slate-200 dark:bg-slate-800 px-14 py-5 grid gap-12 max-w-screen-lg">
        <AboutMe />
        <Experience />

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
      </div>

    </main>
  )
}

export default LayoutMain