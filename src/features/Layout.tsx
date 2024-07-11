import LayoutHeader from './LayoutHeader'
import LayoutMain from './LayoutMain'

const Layout = () => {

  return (
    <div className='relative bg-slate-700 dark:bg-slate-950'>
      <LayoutHeader />
      <LayoutMain />
      <footer className='h-[3.5rem] sticky top-0 z-50 py-2 bg-slate-50 dark:bg-slate-900/90'>
      </footer>
    </div>
  )
}

export default Layout
