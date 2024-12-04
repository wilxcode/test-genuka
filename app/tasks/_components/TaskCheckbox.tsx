'use client'

import { Checkbox } from '@/components/ui/checkbox'

import { useState } from 'react'
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
  console.log(result)

  const handleCheckboxChange = async () => {
    setChecked(!checked)

    const response = await completeTask(props.taskId, !checked)

    setResult(response)
  }

  return (
    <Checkbox
      className="rounded-full border-muted-foreground/50"
      checked={checked}
      onClick={handleCheckboxChange}
    />
  )
}

export default TaskCheckbox
