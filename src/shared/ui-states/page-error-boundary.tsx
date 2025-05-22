'use client'

import { useEffect } from 'react'

export type PageErrorBoundaryProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function PageErrorBoundary({ error }: PageErrorBoundaryProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className='m-auto'>
      <h1>somethime went wrong</h1>
    </section>
  )
}
