'use server'

import prisma from '@/lib/prisma'
import createTaskSchema from './create.schema'
import { revalidatePath } from 'next/cache'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createTask = async (currentState: any, formData: FormData) => {
  const formDataEntries = {
    title: formData.get('title'),
    project: formData.get('projectName'),
    startTime: formData.get('startTime'),
    endTime: formData.get('endTime'),
  }

  console.log('formDataEntries', formDataEntries)

  const validatedData = createTaskSchema.safeParse(formDataEntries)

  if (!validatedData.success) {
    return {
      fieldErrors: validatedData.error.flatten().fieldErrors,
    }
  }

  const task = validatedData.data

  try {
    const newTask = await prisma.task.create({
      data: task,
    })

    console.log('create task success:', newTask)

    revalidatePath('/tasks')

    return {
      success: 'create task success',
    }
  } catch {
    // throw new Error('create task failed')
    return {
      error: 'create task failed',
    }
  }
}

export default createTask
