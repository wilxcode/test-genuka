import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const Categories = () => {
  return (
    <div>
      <ul className="list-none flex flex-wrap gap-1 gap-y-4 *:inline-flex *:gap-1 *:items-center *:text-muted-foreground">
        <li>
          <Button
            variant={'ghost'}
            size={'sm'}
            className={cn(true ? 'text-primary' : 'text-muted-foreground')}
          >
            <span>All</span>
            <Badge
              variant={true ? 'default' : 'outline'}
              className={cn(
                'rounded-full',
                true ? 'bg-primary' : 'bg-[#d9d9d9] text-white',
              )}
            >
              3
            </Badge>
          </Button>
          <Separator orientation="vertical" />
        </li>
        <li>
          <Button variant={'ghost'} size={'sm'}>
            <span>Open</span>
            <Badge
              variant={'outline'}
              className="rounded-full bg-[#d9d9d9] text-white"
            >
              3
            </Badge>
          </Button>
        </li>
        <li>
          <Button variant={'ghost'} size={'sm'}>
            <span>Closed</span>
            <Badge
              variant="outline"
              className="rounded-full bg-[#d9d9d9] text-white"
            >
              3
            </Badge>
          </Button>
        </li>
        <li>
          <Button variant={'ghost'} size={'sm'}>
            <span>Archived</span>
            <Badge
              variant="outline"
              className="rounded-full bg-[#d9d9d9] text-white"
            >
              3
            </Badge>
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Categories
