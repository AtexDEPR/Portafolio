"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-neon-green">Error</span> - Something went wrong
        </h1>
        <p className="text-gray-400 mb-8">An unexpected error has occurred. Please try again later.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => reset()} className="metallic-button primary">
            <span className="button-text">Try again</span>
          </button>
          <Link href="/" className="metallic-button secondary">
            <span className="button-text">Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
