'use server'

import prisma from '@/lib/prisma'
import { Participant, Task } from '@prisma/client'

type Filter = 'all' | 'open' | 'closed' | 'archived'

const getTasks = async (): Promise<Task[]> => {
  try {
    return await prisma.task.findMany({
      orderBy: [
        {
          isCompleted: 'desc',
        },
        {
          createdAt: 'asc',
        },
      ],
    })
  } catch {
    return []
  }
}

const getTasksFiltered = async (filter: Filter): Promise<Task[]> => {
  try {
    if (filter && filter !== 'all') {
      return await prisma.task.findMany({
        where: {
          status: filter,
        },
        orderBy: [
          {
            isCompleted: 'desc',
          },
          {
            createdAt: 'asc',
          },
        ],
      })
    }

    return await prisma.task.findMany({
      orderBy: [
        {
          isCompleted: 'desc',
        },
        {
          createdAt: 'asc',
        },
      ],
    })
  } catch {
    return []
  }
}

const getParticipants = async (): Promise<Participant[]> => {
  try {
    return await prisma.participant.findMany()
  } catch {
    return []
  }
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

export { getTasks, getTasksFiltered, getParticipants, getParticipantsOnTask }
