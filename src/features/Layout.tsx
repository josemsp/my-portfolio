import LayoutHeader from './LayoutHeader'
import LayoutMain from './LayoutMain'

const Layout = () => {

  return (
    <div className=' bg-slate-700 dark:bg-slate-950'>
      <LayoutHeader />
      <LayoutMain />
      <footer className='h-[3.5rem] z-50 py-2 bg-slate-50 dark:bg-slate-900/90 border-slate-300/5 lg:border-t lg:border-slate-900/15 dark:border-slate-50/15'>
      </footer>
    </div>
  )
}

export default Layout
