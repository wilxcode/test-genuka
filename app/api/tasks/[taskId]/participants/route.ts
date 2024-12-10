import { NextRequest, NextResponse } from 'next/server'
import { getTaskParticipants } from '@/lib/data'

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      taskId: string
    }>
  },
) {
  try {
    const taskId = (await params).taskId
    const participants = await getTaskParticipants(taskId)

    return NextResponse.json(participants)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch participants' },
      { status: 500 },
    )
  }
}
