'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { promos } from '@/data/promos'
import Link from 'next/link'

type PromoFilter = 'all' | 'today' | 'week'

export default function PromocionesPage() {
  const [filter, setFilter] = useState<PromoFilter>('all')
  const [isLoading, setIsLoading] = useState(false)

  const handleFilterChange = (newFilter: PromoFilter) => {
    setIsLoading(true)
    setFilter(newFilter)
    setTimeout(() => setIsLoading(false), 300)
  }

  const filteredPromos = promos

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Promociones</h1>
        <p className="text-gray-600">
          Aprovecha las mejores ofertas de TUKY
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => handleFilterChange('all')}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-primary-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => handleFilterChange('today')}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            filter === 'today'
              ? 'bg-primary-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Hoy
        </button>
        <button
          onClick={() => handleFilterChange('week')}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            filter === 'week'
              ? 'bg-primary-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Esta semana
        </button>
      </div>

      {/* Promo grid */}
      {isLoading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse overflow-hidden rounded-xl bg-gray-200"
            >
              <div className="aspect-[16/9] bg-gray-300" />
              <div className="p-6">
                <div className="mb-2 h-6 rounded bg-gray-300" />
                <div className="h-4 w-32 rounded bg-gray-300" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPromos.map((promo) => (
            <div
              key={promo.id}
              className="group overflow-hidden rounded-xl bg-white shadow-soft transition-all hover:shadow-soft-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute right-4 top-4">
                  <Badge variant="danger" className="text-base">
                    {promo.discountText}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h2 className="mb-2 text-xl font-bold text-gray-900">
                  {promo.title}
                </h2>
                <p className="mb-4 text-sm text-gray-600">
                  Válido desde{' '}
                  {new Date(promo.validFrom).toLocaleDateString('es-PE')} hasta{' '}
                  {new Date(promo.validTo).toLocaleDateString('es-PE')}
                </p>
                <Link href="/categorias">
                  <Button className="w-full">Ver productos</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

