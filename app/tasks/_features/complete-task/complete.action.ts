'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

const completeTask = async (taskId: string, isCompleted: boolean) => {
  try {
    await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        isCompleted: isCompleted,
      },
    })

    revalidatePath('/tasks')

    return {
      success: 'complete task updated',
    }
  } catch {
    return {
      error: 'complete task failed',
    }
  }
}

export default completeTask
