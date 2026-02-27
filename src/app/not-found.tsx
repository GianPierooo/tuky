'use client'

import Link from 'next/link'
import { PackageX } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <PackageX className="mx-auto mb-6 h-24 w-24 text-gray-300" />
        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          Página no encontrada
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Lo sentimos, no pudimos encontrar la página que buscas
        </p>
        <Link href="/">
          <Button size="lg">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  )
}

