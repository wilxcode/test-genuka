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

  // console.log('formDataEntries', formDataEntries)

  const validatedData = createTaskSchema.safeParse(formDataEntries)

  if (!validatedData.success) {
    return {
      fieldErrors: validatedData.error.flatten().fieldErrors,
    }
  }

  const task = validatedData.data

  try {
    await prisma.task.create({
      data: task,
    })

    revalidatePath('/tasks')

    return {
      success: 'create task success',
    }
  } catch {
    return {
      error: 'create task failed',
    }
  }
}

export default createTask
