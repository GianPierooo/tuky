'use client'

import Link from 'next/link'
import { categories } from '@/data/categories'

export function CategoryGrid() {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Categorías</h2>
        <p className="mt-2 text-gray-600">
          Encuentra todo lo que necesitas
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categorias?cat=${category.id}`}
            className="group"
          >
            <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-soft transition-all hover:shadow-soft-lg hover:-translate-y-1">
              <div
                className={`mb-3 flex h-16 w-16 items-center justify-center rounded-full ${category.color} text-3xl`}
              >
                {category.icon}
              </div>
              <h3 className="text-center text-sm font-semibold text-gray-900 group-hover:text-primary-600">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

