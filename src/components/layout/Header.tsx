'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { cn } from '@/lib/cn'
import { MobileMenu } from './MobileMenu'
import { CartNotification } from '@/components/cart/CartNotification'

export function Header() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const {
    items,
    getTotalItems,
    isHydrated,
    showNotification,
    closeNotification,
  } = useCartStore()

  const cartCount = getTotalItems()
  const isCartPanelOpen = showNotification || isCartOpen

  const handleCloseCartNotification = () => {
    closeNotification()
    setIsCartOpen(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/categorias?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
        {/* Top banner */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-400 px-4 py-2 text-center text-sm font-medium text-white">
          Bienvenido a TUKY · Tu nuevo minimarket con grandes precios
        </div>

        {/* Main header */}
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/logo/logo_120x120.png"
                alt="TUKY"
                className="h-16 w-16 object-contain md:h-20 md:w-20"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.nextElementSibling
                  if (fallback) (fallback as HTMLElement).style.display = 'block'
                }}
              />
              <span
                className="hidden text-xl font-bold tracking-tight text-primary-500 md:text-2xl"
                style={{ display: 'none' }}
                aria-hidden
              >
                TUKY
              </span>
            </Link>

            {/* Desktop Search */}
            <form
              onSubmit={handleSearch}
              className="hidden flex-1 max-w-md lg:block"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                />
              </div>
            </form>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 lg:flex">
              <Link
                href="/categorias"
                className="font-medium text-gray-700 hover:text-primary-600"
              >
                Categorías
              </Link>
              <Link
                href="/promociones"
                className="font-medium text-gray-700 hover:text-primary-600"
              >
                Promociones
              </Link>
              <Link
                href="/tiendas"
                className="font-medium text-gray-700 hover:text-primary-600"
              >
                Tiendas
              </Link>
            </nav>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              {/* Mobile search toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="lg:hidden"
                aria-label="Buscar"
              >
                {isSearchOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Search className="h-6 w-6 text-gray-700" />
                )}
              </button>

              {/* Cart: abre el dropdown al hacer clic */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative"
                aria-label="Carrito de compras"
              >
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {isHydrated && cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div
            className={cn(
              'overflow-hidden transition-all lg:hidden',
              isSearchOpen ? 'mb-4 max-h-20' : 'max-h-0'
            )}
          >
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                />
              </div>
            </form>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Preview del carrito: no se muestra en la página /carrito */}
      {!pathname?.startsWith('/carrito') && (
        <CartNotification
          isOpen={isCartPanelOpen}
          onClose={handleCloseCartNotification}
          cartItems={items}
        />
      )}
    </>
  )
}

