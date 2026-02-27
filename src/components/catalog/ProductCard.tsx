'use client'

import { ShoppingCart } from 'lucide-react'
import { Product } from '@/data/products'
import { useCartStore } from '@/store/cartStore'
import { formatCurrency } from '@/lib/formatCurrency'
import { showToast } from '@/components/ui/Toast'
import { Card } from '@/components/ui/Card'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem(product)
    showToast(`${product.name} agregado al carrito`, 'success')
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-soft-lg">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        {product.stock !== undefined && product.stock < 10 && (
          <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
            ¡Últimas unidades!
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-900 group-hover:text-primary-600">
          {product.name}
        </h3>

        <div className="mb-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary-600">
            {formatCurrency(product.price)}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Agregar
        </button>
      </div>
    </Card>
  )
}

