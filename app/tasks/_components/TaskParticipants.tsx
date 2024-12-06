import Avatars from '@/components/ui/avatars'

import { getParticipantsOnTask } from '@/lib/data'

type TaskParticipantsProps = {
  taskId: string
}

const TaskParticipants = async (props: TaskParticipantsProps) => {
  const participants = await getParticipantsOnTask(props.taskId)
  // console.log(participants)

  return <Avatars numPeople={participants.length} participants={participants} />
}

export default TaskParticipants
