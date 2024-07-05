import profile_pic from './assets/profile_picture.jpg'

const Portfolio = () => {
  return (
    // <div className='container'>
    //   <div className='profile-pic-container'>
    //     <img src={profile_pic} className="profile-pic" alt="José Salazar" />
    //   </div>
    // </div>
    <div className='layout bg-white dark:bg-black'>
      <header>

      </header>
      <main className='container'>
        <section id='home' className='home'>
          <div className=' bg-white dark:bg-black card'>
            <img src={profile_pic} className="profile-pic" alt="José Salazar" />
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default Portfolio