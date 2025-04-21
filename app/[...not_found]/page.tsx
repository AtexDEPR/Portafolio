"use client"

import Link from "next/link"

export default function NotFoundCatchAll() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-green-500">404</span> - Page Not Found
        </h1>
        <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-green-500 text-black rounded-md hover:bg-opacity-80 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
