import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { Participant } from '@prisma/client'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':')
  // console.log(hours, minutes)

  if (Number(hours) > 12) {
    return `${Number(hours) - 12}:${minutes} PM`
  }

  return `${hours}:${minutes} AM`
}

export const fetchTaskParticipants = async (
  taskId: string,
): Promise<Participant[]> => {
  const response = await fetch(`/api/tasks/${taskId}/participants`)

  if (!response.ok) {
    throw new Error('Failed to fetch participants')
  }

  return response.json()
}
