'use client'

import { cn } from '@/lib/utils'
import { Participant } from '@prisma/client'
import Avvvatars from 'avvvatars-react'

type AvatarsProps = {
  className?: string
  numPeople?: number
  participants: Participant[]
}

const Avatars = (props: AvatarsProps) => {
  if (props.numPeople === 0 || undefined) {
    return (
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 text-xs border-2 border-white text-white">
        0
      </div>
    )
  }

  if (props.numPeople && props.numPeople > 3) {
    const displayedAvatars = props.participants?.slice(0, 3)
    const remainingCount = props.numPeople - 3

    return (
      <div
        className={cn(
          'z-10 flex -space-x-3 rtl:space-x-reverse',
          props.className,
        )}
      >
        {displayedAvatars.map((participant, index) => (
          <Avvvatars
            value={participant.email}
            key={index}
            border={true}
            borderSize={2}
          />
        ))}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 text-xs border-2 border-white text-white">
          +{remainingCount}
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'z-10 flex -space-x-4 rtl:space-x-reverse',
        props.className,
      )}
    >
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

export default Avatars
