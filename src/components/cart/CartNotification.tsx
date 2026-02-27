'use client'

import Link from 'next/link'
import { ShoppingCart, X, ChevronRight } from 'lucide-react'
import type { CartItem } from '@/store/cartStore'
import { getLineId } from '@/store/cartStore'
import { cn } from '@/lib/cn'

interface CartNotificationProps {
  isOpen: boolean
  onClose: () => void
  cartItems: CartItem[]
}

export function CartNotification({
  isOpen,
  onClose,
  cartItems,
}: CartNotificationProps) {
  if (!isOpen) return null

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      {/* Backdrop (opcional: cierra al hacer clic fuera) */}
      <button
        type="button"
        aria-label="Cerrar"
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
      />

      <div
        className={cn(
          'cart-notification-panel',
          'fixed top-[85px] left-3 right-3 z-50 flex max-h-[calc(100vh-120px)] w-auto flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]',
          'animate-slide-in-right',
          'md:left-auto md:right-6 md:w-[400px]'
        )}
      >
        {/* Cabecera */}
        <div className="flex flex-none items-center justify-between border-b border-gray-100 bg-gradient-to-r from-primary-50 to-white px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary-500" />
            <span className="font-bold text-gray-900">Mi Carrito</span>
            {totalItems > 0 && (
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-primary-500 px-2 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-primary-50 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cuerpo */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          {cartItems.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-12 text-center">
              <p className="font-medium text-gray-900">Tu carrito está vacío</p>
              <p className="text-sm text-gray-500">
                Agrega productos para comenzar
              </p>
            </div>
          ) : (
            <>
              <ul
                className="flex-1 overflow-y-auto"
                style={{ maxHeight: '420px' }}
              >
                {cartItems.map((item) => (
                  <li
                    key={getLineId(item)}
                    className="flex gap-4 border-b border-gray-100 px-5 py-4 transition-colors hover:bg-gray-50/80"
                  >
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-20 sm:w-20">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-gray-900 line-clamp-2">
                        {item.product.name}
                      </p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-2">
                        {item.selectedColor && (
                          <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                            <span
                              className="h-2.5 w-2.5 rounded-full border border-gray-300"
                              style={{
                                backgroundColor: item.selectedColor.toLowerCase(),
                              }}
                            />
                            {item.selectedColor}
                          </span>
                        )}
                        {item.selectedSize && (
                          <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                            {item.selectedSize}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        × {item.quantity}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex-none border-t border-gray-200 bg-gray-50/50 p-4">
                <Link
                  href="/carrito"
                  onClick={onClose}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-5 py-3.5 font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Ver carrito completo
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
