'use client'

import { MapPin, Clock, Navigation } from 'lucide-react'
import { stores } from '@/data/stores'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function TiendasPage() {
  const store = stores[0]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Ubicación de nuestra tienda
        </h1>
        <p className="text-gray-600">
          Visítanos en Av. Simón Bolívar 1427, Lima. Te esperamos.
        </p>
      </div>

      {/* Mapa de ubicación */}
      <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <iframe
          title="Ubicación TUKY - Av. Simón Bolívar 1427, Lima"
          src="https://www.google.com/maps?q=Av.+Sim%C3%B3n+Bol%C3%ADvar+1427,+Lima+15084&output=embed"
          className="h-[320px] w-full md:h-[400px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Datos de la tienda */}
      <div className="mx-auto max-w-lg">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Nuestra tienda
        </h2>
        {store && (
          <Card className="p-6">
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {store.name}
              </h3>

              <div className="mb-2 flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  <p>{store.address}</p>
                  <p className="font-medium text-primary-600">
                    {store.district}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <p>{store.hours}</p>
              </div>
            </div>

            <a
              href={store.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="outline" className="w-full">
                <Navigation className="mr-2 h-4 w-4" />
                Cómo llegar
              </Button>
            </a>
          </Card>
        )}
      </div>
    </div>
  )
}

