import TaskCard from './_components/TaskCard'
import NewTask from './_components/NewTask'
import Categories from './_components/Categories'

import prisma from '@/lib/prisma'
import { Task } from '@prisma/client'

type TasksListProps = {
  tasks: Task[]
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

const PageTasks = async () => {
  const tasks = await prisma.task.findMany()

  return (
    <div className="p-4 pt-12 md:pt-4">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold tracking-tight">{`Today's Tasks`}</h2>
            <span className="text-sm text-[#a6a6a6]">Wednesday, 11 May</span>
          </div>
          <NewTask />
        </div>
        <Categories />
        <TasksList tasks={tasks} />
      </div>
    </div>
  )
}

export default PageTasks
