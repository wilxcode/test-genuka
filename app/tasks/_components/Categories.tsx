'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'
import { Task } from '@prisma/client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

type Filter = 'all' | 'open' | 'closed' | 'archived'

type CategoriesProps = {
  tasks: Task[]
  filter: Filter
}

const Categories = (props: CategoriesProps) => {
  const listItems = [
    {
      name: 'All',
      filter: 'all',
      numberOfTasks: props.tasks.length,
    },
    {
      name: 'Open',
      filter: 'open',
      numberOfTasks: props.tasks.filter((task) => task.status === 'open')
        .length,
    },
    {
      name: 'Closed',
      filter: 'closed',
      numberOfTasks: props.tasks.filter((task) => task.status === 'closed')
        .length,
    },
    {
      name: 'Archived',
      filter: 'archived',
      numberOfTasks: props.tasks.filter((task) => task.status === 'archived')
        .length,
    },
  ]

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  // console.log('searchParams : ' + searchParams)

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams)
    if (filter) {
      params.set('filter', filter)
    } else {
      params.delete('filter')
    }

    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div>
      <ul className="list-none flex flex-wrap gap-1 gap-y-4 *:inline-flex *:gap-1 *:items-center *:text-muted-foreground">
        {listItems.map((li, index) => {
          const isActive =
            props.filter === li.filter ||
            (props.filter === undefined && li.filter === 'all')

          return (
            <li key={index}>
              <Button
                variant={'ghost'}
                size={'sm'}
                className={cn(
                  isActive ? 'text-primary' : 'text-muted-foreground',
                )}
                onClick={() => handleFilter(li.filter)}
              >
                <span>{li.name}</span>
                <Badge
                  variant={isActive ? 'default' : 'outline'}
                  className={cn(
                    'rounded-full',
                    isActive ? 'bg-primary' : 'bg-[#d9d9d9] text-white',
                  )}
                >
                  {li.numberOfTasks ? li.numberOfTasks : 0}
                </Badge>
              </Button>
              {index === 0 ? (
                <Separator
                  orientation="vertical"
                  className="h-[50%] my-auto w-[2px]"
                />
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
