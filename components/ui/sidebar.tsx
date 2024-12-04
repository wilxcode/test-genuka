'use client'

import { usePathname } from 'next/navigation'
import { Button } from './button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Separator } from './separator'

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
    <ul className="list-none flex flex-col items-start gap-2 w-full *:w-full">
      {links.map((link, index) => (
        <li key={index}>
          <Button variant={'ghost'} className="w-full justify-start" asChild>
            <Link
              href={link.url}
              className={cn(
                'h-full flex items-center',
                path === link.url ? 'bg-muted !font-bold' : '',
              )}
            >
              {link.name}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  )
}

type SidebarProps = {
  className?: string
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className={cn('flex flex-col gap-8 p-4 pt-2 border-r', props.className)}>
      <div>
        <h2 className="font-bold px-4 py-2">test-genuka</h2>
        <Separator />
      </div>
      <div className="flex-col gap-4">
        <NavLinks />
      </div>
    </div>
  )
}

export default Sidebar
