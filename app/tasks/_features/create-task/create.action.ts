'use server'

import prisma from '@/lib/prisma'
import createTaskSchema from './create.schema'

const createTask = async (formData: FormData) => {
  const formDataEntries = {
    title: formData.get('title'),
    project: formData.get('projectName'),
    startTime: formData.get('startTime'),
    endTime: formData.get('endTime'),
    status: formData.get('status'),
  }

  const validatedData = createTaskSchema.safeParse(formDataEntries)

  if (!validatedData.success) {
    return {
      fieldErrors: validatedData.error.flatten().fieldErrors,
    }
  }

  const task = validatedData.data

  try {
    return await prisma.task.create({
      data: task,
    })
  } catch (error) {
    console.error('Erreur lors de la création de la tâche:', error)
    throw new Error('Échec de la création de la tâche')
  }
}

export default createTask
