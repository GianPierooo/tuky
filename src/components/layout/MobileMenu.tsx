'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X, Home, Grid, Tag, MapPin, FileText } from 'lucide-react'
import { cn } from '@/lib/cn'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const links = [
    { href: '/', label: 'Inicio', icon: Home },
    { href: '/categorias', label: 'Categorías', icon: Grid },
    { href: '/promociones', label: 'Promociones', icon: Tag },
    { href: '/tiendas', label: 'Tiendas', icon: MapPin },
  ]

  const legalLinks = [
    { href: '/legales/terminos', label: 'Términos y Condiciones' },
    { href: '/legales/privacidad', label: 'Política de Privacidad' },
    { href: '/legales/libro-reclamaciones', label: 'Libro de Reclamaciones' },
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/50 transition-opacity lg:hidden',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
      />

      {/* Menu panel */}
      <div
        className={cn(
          'fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform lg:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo/logo_120x120.png"
                alt="TUKY"
                className="h-12 w-12 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.nextElementSibling
                  if (fallback) (fallback as HTMLElement).style.display = 'block'
                }}
              />
              <span
                className="hidden text-lg font-bold text-primary-500"
                style={{ display: 'none' }}
                aria-hidden
              >
                TUKY
              </span>
            </div>
            <button onClick={onClose} aria-label="Cerrar menú">
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-1">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="my-6 border-t border-gray-200" />

            <div className="space-y-1">
              <div className="mb-2 flex items-center gap-2 px-4 text-sm font-semibold text-gray-500">
                <FileText className="h-4 w-4" />
                Legales
              </div>
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-200 px-6 py-4">
            <p className="text-center text-sm text-gray-600">
              © 2026 TUKY
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

