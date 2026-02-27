'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function StoreLocatorBanner() {
  return (
    <section className="bg-gradient-to-r from-accent-700 to-accent-800 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <MapPin className="mx-auto mb-4 h-12 w-12" />
        <h2 className="mb-2 text-3xl font-bold">
          Encuentra tu tienda más cercana
        </h2>
        <p className="mb-6 text-lg">
          Tenemos 8 tiendas en Lima para servirte mejor
        </p>
        <Link href="/tiendas">
          <Button variant="secondary" size="lg">
            Buscar tienda
          </Button>
        </Link>
      </div>
    </section>
  )
}

