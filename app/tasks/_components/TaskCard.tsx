import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import TaskCheckbox from './TaskCheckbox'
import TaskParticipants from './TaskParticipants'

import { Suspense } from 'react'
import { Task } from '@prisma/client'
import { cn, formatTime } from '@/lib/utils'

type TaskCardProps = {
  task: Task
}

const TaskCard = (props: TaskCardProps) => {
  return (
    <Card className="w-full md:max-w-sm">
      <CardHeader className="pb-4 flex-row justify-between items-start">
        <div>
          <CardTitle
            className={cn(props.task.isCompleted ? 'line-through' : '')}
          >
            {props.task.title}
          </CardTitle>
          <CardDescription className="text-[#a6a6a6]">
            {props.task.project}
          </CardDescription>
        </div>
        <TaskCheckbox
          isCompleted={props.task.isCompleted}
          taskId={props.task.id}
        />
      </CardHeader>
      <Separator className="w-[88%] mx-auto" />
      <CardContent className="flex justify-between items-center pt-4 text-sm text-muted-foreground">
        <p className="text-[#d4d4d4]">
          <span className="text-[#a6a6a6]">Today</span>{' '}
          {formatTime(props.task.startTime)} - {formatTime(props.task.endTime)}
        </p>
        <Suspense fallback={<span className='inline-block h-8'>Loading...</span>}>
          <TaskParticipants taskId={props.task.id} />
        </Suspense>
      </CardContent>
    </Card>
  )
}

export default TaskCard
