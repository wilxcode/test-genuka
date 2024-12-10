'use client'

import { Checkbox } from '@/components/ui/checkbox'

import { useState, useTransition } from 'react'
import completeTask from '../_features/complete-task/complete.action'

type TaskCheckboxProps = {
  taskId: string
  isCompleted: boolean
}

const TaskCheckbox = (props: TaskCheckboxProps) => {
  const [checked, setChecked] = useState(props.isCompleted)
  // console.log(checked)
  
  const [result, setResult] = useState<{
    success?: string
    error?: string
  } | null>(null)
  // console.log(result)

  const [isPending, startTransition] = useTransition()

  const handleCheckboxChange = async () => {
    const response = await completeTask(props.taskId, !checked)

    startTransition(async () => {
      if (response.success) {
        setChecked(!checked)
      }
    })

    setResult(response)
  }

  return (
    <div className="flex gap-4">
      {isPending ? <span className="text-sm">Updating...</span> : null}
      {result?.error ? (
        <span className="text-sm text-destructive">{result.error}</span>
      ) : null}
      <Checkbox
        className="rounded-full border-muted-foreground/50 size-6"
        checked={checked}
        onClick={handleCheckboxChange}
      />
    </div>
  )
}

export default TaskCheckbox
