import NewTask from './_components/NewTask'
import Categories from './_components/Categories'
import TasksList from './_components/TaskList'

import { getTasks, getTasksFiltered } from '@/lib/data'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

type PageTasksProps = {
  searchParams: SearchParams
}

type Filter = 'all' | 'open' | 'closed' | 'archived'

const PageTasks = async (props: PageTasksProps) => {
  const tasks = await getTasks()
  // console.log(
  //   'tasks',
  //   tasks.map((task) => task.title),
  // )

  const searchParams = await props.searchParams
  const filter = searchParams.filter as Filter

  const tasksFiltered = await getTasksFiltered(filter ? filter : 'all')
  // console.log('tasksFiltered', tasksFiltered.map((task) => task.title))

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
        <Categories tasks={tasks} filter={filter} />
        <TasksList tasks={tasksFiltered} />
      </div>
    </div>
  )
}

export default PageTasks
