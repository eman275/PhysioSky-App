import { cn } from '@/shared/lib/utils'
import React from 'react'

interface TherapyCardProps {
  title: string
  description: string
  imageUrl: string
  isDark?: boolean
  className?: string
  imgHeight?: string
}

const TherapyCard: React.FC<TherapyCardProps> = ({
  title,
  description,
  imageUrl,
  isDark = false,
  className,
  imgHeight,
}) => {
  return (
    <div
      className={`${className} overflow-hidden rounded-lg bg-primary-1 shadow-lg transition-transform hover:scale-105`}
    >
      <img
        src={imageUrl}
        alt={title}
        className={cn(
          ' w-full object-cover p-3',
          imgHeight ? imgHeight : 'h-[265px]'
        )}
      />
      <div
        className={cn(
          'p-4 md:p-6',
          isDark ? 'bg-primary-1 text-white' : 'bg-white text-gray-900', // Conditional background and text
          'flex h-full flex-col justify-between' // Ensure content fills card height
        )}
      >
        <div className='flex flex-col items-center justify-center gap-4'>
          <h3
            className={cn(
              'mb-2 text-xl font-bold',
              isDark ? 'text-white' : 'text-blue-600' // Example of conditional title color
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              'text-sm',
              isDark ? 'text-gray-300' : 'text-gray-700'
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TherapyCard
