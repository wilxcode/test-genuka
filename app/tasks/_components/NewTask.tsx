import { Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DialogDescription } from '@radix-ui/react-dialog'

const TaskForm = () => {
  return (
    <form action={''} className="flex flex-col gap-6 items-start">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="title">Title</label>
        <Input type="text" placeholder="Task's title" id="title" name="title" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="projectName">Project</label>
        <Input
          type="text"
          placeholder="Project name"
          id="projectName"
          name="projectName"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="startTime">Start time</label>
        <Input type="time" placeholder="end time" name="endTime" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="endTime">End time</label>
        <Input type="time" placeholder="start time" name="startTime" />
      </div>
      <Button>Create</Button>
    </form>
  )
}

const NewTask = () => {
  return (
    <Dialog>
      <Button
        variant={'outline'}
        className="text-primary bg-primary/10"
        asChild
      >
        <DialogTrigger>
          <Plus />
          <span>New Task</span>
        </DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
          <DialogDescription>create new task</DialogDescription>
        </DialogHeader>
        <TaskForm />
      </DialogContent>
    </Dialog>
  )
}

export default NewTask
