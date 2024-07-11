import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components'
import useTranslate from '@/hooks/useTranslate';
import { MenuIcon } from 'lucide-react'

const menuItems = [
  { href: '#aboutMe', label: 'AboutMe' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' }
];

const Menu = () => {
  const { translate } = useTranslate()

  return (
    <>
      <div className='hidden md:flex gap-2'>
        {menuItems.map((mi, i) => (
          <a key={`menu-item-${i}`} href={mi.href}>
            <Button variant="outline">{translate(mi.label)}</Button>
          </a>
        ))}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className='md:hidden'>
          <Button
            variant="outline"
            size="icon"
          >
            <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {menuItems.map((mi, i) => (
            <DropdownMenuItem key={`menu-item-${i}`}>
              <a href={mi.href}>{translate(mi.label)}</a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default Menu