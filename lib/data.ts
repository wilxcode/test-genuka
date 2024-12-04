'use server'

import prisma from '@/lib/prisma'

const getTasks = async () => {
  const tasks = await prisma.task.findMany({
    select: {
      id: true,
      title: true,
      project: true,
      startTime: true,
      endTime: true,
    },
  })

  return tasks
}

const getParticipants = async () => {
  const participants = await prisma.participant.findMany({
    select: {
      email: true,
    },
  })

  return participants
}

const getParticipantsOnTask = async (taskId: string) => {
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

export { getParticipants, getTasks, getParticipantsOnTask }
