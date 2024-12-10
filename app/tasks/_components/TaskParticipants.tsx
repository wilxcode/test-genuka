import Avatars from '@/components/ui/avatars'
import { useTaskParticipants } from '@/hooks/useTaskParticipants'

type TaskParticipantsProps = {
  taskId: string
}

const TaskParticipants = (props: TaskParticipantsProps) => {
  const {
    data: participants = [],
    isLoading,
    error,
  } = useTaskParticipants(props.taskId)

  if (isLoading) {
    return <span className="text-sm">Loading...</span>
  }

  if (error) {
    return <span className="text-sm text-destructive">Error</span>
  }

  return <Avatars numPeople={participants.length} participants={participants} />
}

export default TaskParticipants
