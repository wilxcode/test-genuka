import { z } from 'zod'

const createTaskSchema = z.object({
  title: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  project: z.string().min(2, { message: 'Project Name must be at least 2 characters long' }),
  startTime: z.string().min(5, { message: 'Select a start time' }),
  endTime: z.string().min(5, { message: 'Select an end time' }),
})

export default createTaskSchema
