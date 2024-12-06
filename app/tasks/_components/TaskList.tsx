import TaskCard from './TaskCard'

import { Task } from '@prisma/client'

type TasksListProps = {
  tasks: Task[]
  filter?: 'all' | 'open' | 'closed' | 'archived'
}

const TasksList = (props: TasksListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {props.tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TasksList
