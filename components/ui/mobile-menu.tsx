'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = () => {
  const links = [
    {
      name: 'Messages',
      url: '/',
    },
    {
      name: "Today's Tasks",
      url: '/tasks',
    },
    {
      name: 'Last Activity',
      url: '/activity',
    },
  ]

  const path = usePathname()

  return (
    <ul className="list-none flex items-center justify-between px-4 border-b h-full *:h-full *:-mb-[2px]">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.url}
            className={cn(
              'h-full flex items-center',
              path === link.url ? 'border-b border-black font-bold' : '',
            )}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

type MenuMobileProps = {
  className?: string
}

const MenuMobile = (props: MenuMobileProps) => {
  return (
    <nav className={cn('h-full', props.className)}>
      <NavLinks />
    </nav>
  )
}

export default MenuMobile
