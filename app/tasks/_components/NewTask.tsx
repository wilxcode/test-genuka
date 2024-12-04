'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus } from 'lucide-react'

import { useActionState } from 'react'
import createTask from '../_features/create-task/create.action'

const TaskForm = () => {
  const initialState = {
    success: undefined,
    error: undefined,
    fieldErrors: {},
  }

  const [state, formAction, isPending] = useActionState(
    createTask,
    initialState,
  )
  // console.log(state)

  return (
    <form action={formAction} className="flex flex-col gap-6 items-start">
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          placeholder="Task's title"
          id="title"
          name="title"
          autoFocus
        />
        {state.fieldErrors?.title ? (
          <span className="text-destructive text-sm">
            {state.fieldErrors.title}
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="projectName">Project</Label>
        <Input
          type="text"
          placeholder="Project name"
          id="projectName"
          name="projectName"
        />
        {state.fieldErrors?.project ? (
          <span className="text-destructive text-sm">
            {state.fieldErrors.project}
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="startTime">Start time</Label>
        <Input
          type="time"
          placeholder="end time"
          name="startTime"
          id="startTime"
        />
        {state.fieldErrors?.startTime ? (
          <span className="text-destructive text-sm">
            {state.fieldErrors.startTime}
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label htmlFor="endTime">End time</Label>
        <Input
          type="time"
          placeholder="start time"
          name="endTime"
          id="endTime"
        />
        {state.fieldErrors?.endTime ? (
          <span className="text-destructive text-sm">
            {state.fieldErrors.endTime}
          </span>
        ) : null}
      </div>
      <p aria-live="polite" className="sr-only">
        {/* For screen reader */}
        {state.success ? state.success : null}
        {state.error ? state.error : null}
      </p>
      {state.success ? (
        <p className="text-sm text-green-600">{state.success}</p>
      ) : null}
      {state.error ? (
        <p className="text-sm text-destructive">{state.error}</p>
      ) : null}
      
      <Button disabled={isPending} type="submit">
        Create
      </Button>
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
