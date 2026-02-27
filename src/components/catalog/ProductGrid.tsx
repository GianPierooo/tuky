import { Product } from '@/data/products'
import { ProductCard } from './ProductCard'
import { PackageOpen } from 'lucide-react'

interface ProductGridProps {
  products: Product[]
  isLoading?: boolean
}

export function ProductGrid({ products, isLoading }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse overflow-hidden rounded-lg bg-gray-200"
          >
            <div className="aspect-square bg-gray-300" />
            <div className="p-4">
              <div className="mb-2 h-4 rounded bg-gray-300" />
              <div className="mb-3 h-6 w-20 rounded bg-gray-300" />
              <div className="h-10 rounded bg-gray-300" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <PackageOpen className="mb-4 h-16 w-16 text-gray-300" />
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          No se encontraron productos
        </h3>
        <p className="text-gray-600">
          Intenta cambiar los filtros o realizar otra búsqueda
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

