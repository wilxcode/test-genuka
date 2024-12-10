'use client'
import TaskCard from './TaskCard'
import { Task } from '@prisma/client'

import { useEffect } from 'react'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

type TasksListProps = {
  tasks: Task[]
}

const TasksList = (props: TasksListProps) => {
  const queryClient = new QueryClient()

  // console.log(
  //   'tasks in TasksList',
  //   props.tasks.map((task) => task.title),
  // )

  const [parent, tasks, setTasks] = useDragAndDrop<HTMLDivElement, Task>(
    props.tasks,
  )

  useEffect(() => {
    setTasks(props.tasks)

    return () => {}
  }, [props.tasks, setTasks])

  // console.log(
  //   'tasks drag & drop',
  //   tasks.map((task) => task.title),
  // )

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-4" ref={parent}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} data-label={task.title} />
        ))}
      </div>
    </QueryClientProvider>
  )
}

export default TasksList
