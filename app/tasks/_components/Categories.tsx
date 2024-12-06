import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'
import { Task } from '@prisma/client'

type ListItemProps = {
  name: string
  isActive?: boolean
  numberOfTasks?: number
}

const ListItem = (props: ListItemProps) => {
  return (
    <li>
      <Button
        variant={'ghost'}
        size={'sm'}
        className={cn(
          props.isActive ? 'text-primary' : 'text-muted-foreground',
        )}
      >
        <span>{props.name}</span>
        <Badge
          variant={props.isActive ? 'default' : 'outline'}
          className={cn(
            'rounded-full',
            props.isActive ? 'bg-primary' : 'bg-[#d9d9d9] text-white',
          )}
        >
          {props.numberOfTasks ? props.numberOfTasks : 0}
        </Badge>
      </Button>
    </li>
  )
}

type CategoriesProps = {
  tasks: Task[]
}

const Categories = (props: CategoriesProps) => {
  const listItems = [
    {
      name: 'All',
      numberOfTasks: props.tasks.length,
    },
    {
      name: 'Open',
      numberOfTasks: props.tasks.filter((task) => task.status === 'Open')
        .length,
    },
    {
      name: 'Closed',
      numberOfTasks: props.tasks.filter((task) => task.status === 'Closed')
        .length,
    },
    {
      name: 'Archived',
      numberOfTasks: props.tasks.filter((task) => task.status === 'Archived')
        .length,
    },
  ]

  return (
    <div>
      <ul className="list-none flex flex-wrap gap-1 gap-y-4 *:inline-flex *:gap-1 *:items-center *:text-muted-foreground">
        {listItems.map((li, index) => {
          if (index === 0)
            return (
              <div key={index} className="flex gap-2">
                <ListItem
                  name={li.name}
                  numberOfTasks={li.numberOfTasks}
                  isActive={true}
                />
                <Separator
                  orientation="vertical"
                  className="h-[50%] my-auto w-[2px]"
                />
              </div>
            )
          return (
            <ListItem
              key={index}
              name={li.name}
              numberOfTasks={li.numberOfTasks}
              isActive={false}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
