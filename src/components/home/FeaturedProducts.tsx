'use client'

import Link from 'next/link'
import { ProductCard } from '@/components/catalog/ProductCard'
import { products } from '@/data/products'

export function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.isFeatured)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Productos destacados
          </h2>
          <p className="mt-2 text-gray-600">Los más vendidos esta semana</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/categorias"
            className="inline-block rounded-lg bg-primary-500 px-6 py-3 font-medium text-white hover:bg-primary-600 transition-colors"
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  )
}

