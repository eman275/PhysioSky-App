import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



/* convert to milliseconds function */
const conversionFactors = {
  seconds: 1000, // 1 second = 1000 milliseconds
  minutes: 1000 * 60, // 1 minute = 60 seconds = 60000 milliseconds
  hours: 1000 * 60 * 60, // 1 hour = 60 minutes = 3600 seconds = 3600000 milliseconds
} as const

export function convertToMilliseconds(
  unitNumber: number,
  unitType: keyof typeof conversionFactors
): number {
  if (!(unitType in conversionFactors)) {
    console.error('Invalid unit type. Please provide S, M, or H.')
  }

  return unitNumber * conversionFactors[unitType]
}


