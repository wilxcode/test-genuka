'use server'

import prisma from '@/lib/prisma'
import { Participant, Task } from '@prisma/client'

const getTasks = async (): Promise<Task[]> => {
  const tasks = await prisma.task.findMany({
    orderBy: [
      {
        isCompleted: 'desc',
      },
      {
        createdAt: 'asc',
      },
    ],
  })

  return tasks
}

const getParticipants = async (): Promise<Participant[]> => {
  const participants = await prisma.participant.findMany()

  return participants
}

const getParticipantsOnTask = async (
  taskId: string,
): Promise<Participant[]> => {
  try {
    const participants = await prisma.participantOnTask.findMany({
      where: { taskId },
      include: { participant: true },
    })

    return participants.map((p) => p.participant)
  } catch (error) {
    console.error('Error fetching participants:', error)
    return []
  }
}

export { getTasks, getParticipants, getParticipantsOnTask }
