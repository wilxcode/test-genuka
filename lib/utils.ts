import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':')

  console.log(hours, minutes)

  if (Number(hours) > 12) {
    return `${Number(hours) - 12}:${minutes} PM`
  }

  return `${hours}:${minutes} AM`
}
