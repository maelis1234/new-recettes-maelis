'use client'
import { useEffect, useState } from 'react'
import ProgressBar from '../components/ProgressBar'

export default function Loading() {
  const [progress, setProgress] = useState(0)

  // Simulation de la progression
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1
        clearInterval(interval)
        return 100
      })
    }, 30) // Incrémenter toutes les 30ms pour un effet fluide
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='min-h-screen flex items-center justify-center bg-pink-200 dark:bg-neutral-900'>
      <div className='w-72 md:w-full max-w-md'>
        {/* Progress Bar */}
        <ProgressBar
          minValue={0}
          maxValue={100}
          currentValue={progress}
          color='cyan'
          showPercentage={true}
          rounded='md'
        />
      </div>
    </div>
  )
}
