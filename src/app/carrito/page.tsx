'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCartStore, getLineId } from '@/store/cartStore'
import { formatCurrency } from '@/lib/formatCurrency'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { CONTACT_PHONE } from '@/lib/constants'

const WHATSAPP_NUMBER = CONTACT_PHONE.replace(/\D/g, '')

function buildWhatsAppOrderMessage(
  items: { product: { name: string; price: number }; quantity: number }[],
  total: number
): string {
  const lines = items.map(
    (item) =>
      `• ${item.product.name} x${item.quantity} - ${formatCurrency(item.product.price * item.quantity)}`
  )
  return [
    'Hola, quisiera realizar mi pedido:',
    '',
    lines.join('\n'),
    '',
    `Total: ${formatCurrency(total)}`,
  ].join('\n')
}

export default function CarritoPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    getTotal,
    isHydrated,
  } = useCartStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isHydrated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="mb-6 h-10 w-48 rounded bg-gray-200" />
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-32 rounded-lg bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-md text-center">
          <ShoppingBag className="mx-auto mb-6 h-24 w-24 text-gray-300" />
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Tu carrito está vacío
          </h1>
          <p className="mb-6 text-gray-600">
            Agrega productos para comenzar tu pedido
          </p>
          <Link href="/categorias">
            <Button size="lg">Explorar productos</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Carrito de Compras
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Cart items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={getLineId(item)} className="p-4">
                <div className="flex gap-4">
                  {/* Product image */}
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product info */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.product.name}
                      </h3>
                      <p className="mt-1 text-lg font-bold text-primary-600">
                        {formatCurrency(item.product.price)}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                        onClick={() =>
                          updateQuantity(
                            getLineId(item),
                            item.quantity - 1
                          )
                        }
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              getLineId(item),
                              item.quantity + 1
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(getLineId(item))}
                        className="ml-auto text-red-600 hover:text-red-700"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Resumen del pedido
            </h2>

            <div className="mb-4 space-y-2 border-b border-gray-200 pb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatCurrency(getTotal())}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Envío</span>
                <span className="text-green-600">Gratis</span>
              </div>
            </div>

            <div className="mb-6 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-primary-600">
                {formatCurrency(getTotal())}
              </span>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppOrderMessage(items, getTotal()))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Continuar con el pedido (WhatsApp)
            </a>

            <p className="mt-4 text-center text-xs text-gray-500">
              Serás redirigido a WhatsApp para confirmar tu pedido
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

