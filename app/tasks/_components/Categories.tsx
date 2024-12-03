import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const Categories = () => {
  return (
    <div>
      <ul className="list-none flex flex-wrap gap-1 gap-y-4 *:inline-flex *:gap-1 *:items-center *:text-muted-foreground">
        <li>
          <Button variant={'ghost'} size={'sm'}>
            <span>All</span>
            <Badge variant="secondary" className="rounded-full">
              3
            </Badge>
          </Button>
          <Separator orientation="vertical" />
        </li>
        <li>
          <Button variant={'ghost'} size={'sm'}>
            <span>Open</span>
            <Badge variant="secondary" className="rounded-full">
              3
            </Badge>
          </Button>
        </li>
        <li>
          <Button variant={'ghost'} size={'sm'}>
            <span>Closed</span>
            <Badge variant="secondary" className="rounded-full">
              3
            </Badge>
          </Button>
        </li>
        <li>
          <Button variant={'ghost'} size={'sm'}>
            <span>Archived</span>
            <Badge variant="secondary" className="rounded-full">
              3
            </Badge>
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Categories
