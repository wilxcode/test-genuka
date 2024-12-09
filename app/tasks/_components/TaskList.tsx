import { getTasksFiltered } from '@/lib/data'
import TaskCard from './TaskCard'

type Filter = 'all' | 'open' | 'closed' | 'archived'

type TasksListProps = {
  filter: Filter
}

const TasksList = async (props: TasksListProps) => {
  const tasksFiltered = await getTasksFiltered(props.filter)

  return (
    <div className="flex flex-col gap-4">
      {tasksFiltered.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TasksList
