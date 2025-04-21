"use client"

import React from "react"

export default function Error({ error, reset }) {
  React.useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button onClick={() => reset()} className="px-4 py-2 bg-neon-green text-black rounded hover:bg-opacity-80">
          Try again
        </button>
      </div>
    </div>
  )
}
