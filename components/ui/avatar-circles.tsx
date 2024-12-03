'use client'

import { cn } from '@/lib/utils'
import { Participant } from '@prisma/client'
import Avvvatars from 'avvvatars-react'

type AvatarCirclesProps = {
  className?: string
  numPeople?: number
  participants: Participant[]
}

const AvatarCircles = (props: AvatarCirclesProps) => {

  if (props.numPeople && props.numPeople > 3) {
    const displayedAvatars = props.participants.slice(0, 3)
    const remainingCount = props.numPeople - 3

    return (
      <div
        className={cn('z-10 flex -space-x-3 rtl:space-x-reverse', props.className)}
      >
        {displayedAvatars.map((participant, index) => (
          <Avvvatars
            value={participant.email}
            key={index}
            border={true}
            borderSize={2}
          />
        ))}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 text-sm border-2 text-white">
          +{remainingCount}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('z-10 flex -space-x-4 rtl:space-x-reverse', props.className)}>
      {props.participants.map((participant, index) => (
        <Avvvatars
          value={participant.email}
          key={index}
          border={true}
          borderSize={2}
        />
      ))}
    </div>
  )
}

export default AvatarCircles
