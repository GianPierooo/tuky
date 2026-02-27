'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { promos } from '@/data/promos'

export function PromoRail() {
  return (
    <section className="bg-gradient-to-r from-primary-50 to-secondary-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Promociones
            </h2>
            <p className="mt-1 text-gray-600">
              Las mejores ofertas de la semana
            </p>
          </div>
          <Link
            href="/promociones"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 md:text-base"
          >
            Ver todas →
          </Link>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 lg:grid lg:grid-cols-3">
            {promos.slice(0, 3).map((promo) => (
              <Link
                key={promo.id}
                href="/promociones"
                className="group min-w-[280px] flex-shrink-0 lg:min-w-0"
              >
                <div className="overflow-hidden rounded-xl bg-white shadow-soft transition-all hover:shadow-soft-lg">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3">
                      <Badge variant="danger">{promo.discountText}</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-600">
                      {promo.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Válido hasta{' '}
                      {new Date(promo.validTo).toLocaleDateString('es-PE')}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

