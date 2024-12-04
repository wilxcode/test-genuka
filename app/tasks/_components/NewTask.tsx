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
import { Label } from '@/components/ui/label'

const TaskForm = () => {
  return (
    <form action={''} className="flex flex-col gap-6 items-start">
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="title">Title</Label>
        <Input type="text" placeholder="Task's title" id="title" name="title" autoFocus/>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="projectName">Project</Label>
        <Input
          type="text"
          placeholder="Project name"
          id="projectName"
          name="projectName"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="startTime">Start time</Label>
        <Input type="time" placeholder="end time" name="startTime" id='startTime'/>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="endTime">End time</Label>
        <Input type="time" placeholder="start time" name="endTime" id='endTime' />
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
