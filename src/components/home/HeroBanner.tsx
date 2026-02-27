'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const banners = [
  {
    id: 1,
    title: 'Bienvenido a TUKY',
    subtitle: 'Tu minimarket de confianza',
    cta: 'Explorar categorías',
    href: '/categorias',
    image: '/images/banners/foto_local.jpeg',
  },
  {
    id: 2,
    title: 'Visítanos',
    subtitle: 'Av. Simón Bolívar 1427, Lima',
    cta: 'Ver ubicación',
    href: '/tiendas',
    image: '/images/banners/foto_local2.jpeg',
  },
]

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + banners.length) % banners.length
    )
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-100">
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative flex h-full items-center justify-center p-8 text-white">
                <div className="text-center">
                  <h1 className="mb-2 text-3xl font-bold md:text-5xl">
                    {banner.title}
                  </h1>
                  <p className="mb-6 text-lg md:text-xl">{banner.subtitle}</p>
                  <Link href={banner.href}>
                    <Button variant="secondary" size="lg">
                      {banner.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-6 bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir al banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

