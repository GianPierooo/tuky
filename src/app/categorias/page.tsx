import { Suspense } from 'react'
import { CategoriasContent } from './CategoriasContent'

function CategoriasFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 h-10 w-full max-w-md animate-pulse rounded-lg bg-gray-200" />
      <div className="flex gap-6">
        <div className="hidden h-96 w-64 animate-pulse rounded-lg bg-gray-200 lg:block" />
        <div className="flex-1 space-y-4">
          <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square animate-pulse rounded-lg bg-gray-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CategoriasPage() {
  return (
    <Suspense fallback={<CategoriasFallback />}>
      <CategoriasContent />
    </Suspense>
  )
}
