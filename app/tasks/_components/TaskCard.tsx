import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import AvatarCircles from '@/components/ui/avatar-circles'
import { Checkbox } from '@/components/ui/checkbox'
import { Task } from '@prisma/client'
import { findParticipantsOnTask } from '@/lib/data'
import { formatTime } from '@/lib/utils'

type AvatarsProps = {
  taskId: string
}

const Avatars = async (props: AvatarsProps) => {
  const participants = await findParticipantsOnTask(props.taskId)
  // console.log(participants)

  return (
    <AvatarCircles
      numPeople={participants.length}
      participants={participants}
    />
  )
}

type TaskCardProps = {
  task: Task
}

const TaskCard = (props: TaskCardProps) => {
  const { task } = props

  return (
    <Card className="max-w-sm">
      <CardHeader className="pb-4 flex-row justify-between items-center">
        <div>
          <CardTitle>{task.title}</CardTitle>
          <CardDescription>{task.project}</CardDescription>
        </div>
        <Checkbox className="rounded-full border-muted-foreground/50" />
      </CardHeader>
      <Separator className="w-[88%] mx-auto" />
      <CardContent className="flex justify-between items-center pt-4 text-sm text-muted-foreground">
        <p>
          Today: {formatTime(task.startTime)} - {formatTime(task.endTime)}
        </p>
        <Avatars taskId={task.id} />
      </CardContent>
    </Card>
  )
}

export default TaskCard
