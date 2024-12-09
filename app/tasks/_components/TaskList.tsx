import TaskCard from './TaskCard'

import { Task } from '@prisma/client'

type TasksListProps = {
  tasks: Task[]
  filter?: 'all' | 'open' | 'closed' | 'archived'
}

const TasksList = (props: TasksListProps) => {
  if (props.filter === 'all') {
    return (
      <div className="flex flex-col gap-4">
        {props.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    )
  }
  
  return (
    <div className="flex flex-col gap-4">
      {props.tasks
        .filter((task) => task.status === props.filter)
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  )
}

export default TasksList
