import { useQuery } from '@tanstack/react-query'
import { fetchTaskParticipants } from '@/lib/utils'

export function useTaskParticipants(taskId: string) {
  return useQuery({
    queryKey: ['taskParticipants', taskId],
    queryFn: () => fetchTaskParticipants(taskId),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  })
}