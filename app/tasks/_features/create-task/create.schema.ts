import { z } from 'zod'

const createTaskSchema = z.object({
  title: z.string(),
  project: z.string(),
  startTime: z.string().time(),
  endTime: z.string().time(),
})

export default createTaskSchema
