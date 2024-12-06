import NewTask from './_components/NewTask'
import Categories from './_components/Categories'
import TasksList from './_components/TaskList'

import { getTasks } from '@/lib/data'

const PageTasks = async () => {
  const tasks = await getTasks()

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
        <Categories tasks={tasks} />
        <TasksList tasks={tasks} filter="all" />
      </div>
    </div>
  )
}

export default PageTasks
