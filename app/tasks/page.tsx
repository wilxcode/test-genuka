import NewTask from './_components/NewTask'
import Categories from './_components/Categories'
import TasksList from './_components/TaskList'

import { getTasks } from '@/lib/data'
import { Suspense } from 'react'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

type PageTasksProps = {
  searchParams: SearchParams
}

type Filter = 'all' | 'open' | 'closed' | 'archived'

const PageTasks = async (props: PageTasksProps) => {
  const tasks = await getTasks()

  const searchParams = await props.searchParams
  const filter = searchParams.filter as Filter

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
        <Suspense fallback={<div>Loading...</div>}>
          <TasksList filter={filter ? filter : 'all'} />
        </Suspense>
      </div>
    </div>
  )
}

export default PageTasks
