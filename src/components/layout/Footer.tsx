'use client'

import Link from 'next/link'
import { Facebook, Instagram, ChevronUp } from 'lucide-react'
import { CONTACT_PHONE, CONTACT_ADDRESS, BUSINESS_HOURS, SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Conócenos */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Conócenos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Trabaja con nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/tiendas"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Zonas de despacho
                </Link>
              </li>
            </ul>
          </div>

          {/* Legales */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Legales</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legales/privacidad"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/legales/terminos"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/legales/libro-reclamaciones"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Libro de reclamaciones
                </Link>
              </li>
              <li>
                <Link
                  href="/legales/comprobantes-electronicos"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Comprobantes electrónicos
                </Link>
              </li>
              <li>
                <Link
                  href="/legales/cambios-devoluciones"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Cambios y devoluciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Redes sociales
            </h3>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-primary-500 transition-colors"
                aria-label="TikTok"
              >
                <span className="text-lg font-bold">T</span>
              </a>
            </div>
          </div>

          {/* Atención al cliente */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Atención al cliente
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold text-white">Teléfono:</span>{' '}
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">Dirección:</span>{' '}
                {CONTACT_ADDRESS}
              </li>
              <li>
                <span className="font-semibold text-white">Horario:</span>{' '}
                {BUSINESS_HOURS}
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="mx-auto max-w-md text-center">
            <h3 className="mb-2 text-lg font-bold text-white">
              Suscríbete a nuestras promociones
            </h3>
            <p className="mb-4 text-sm">
              Recibe las mejores ofertas directo en tu email
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary-500 px-6 py-2 font-medium text-white hover:bg-primary-600 transition-colors"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm">
          <p>© 2026 TUKY. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs text-gray-500">
            Consumir bebidas alcohólicas en exceso es dañino.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        aria-label="Volver arriba"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </footer>
  )
}

