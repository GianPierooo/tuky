import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso del servicio TUKY',
  path: '/legales/terminos',
})

export default function TerminosPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">
        Términos y Condiciones
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">
          Última actualización: 10 de enero de 2026
        </p>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            1. Aceptación de los Términos
          </h2>
          <p className="text-gray-700">
            Al acceder y utilizar el sitio web y servicios de TUKY, usted acepta
            cumplir con estos términos y condiciones. Si no está de acuerdo con
            alguna parte de estos términos, no debe utilizar nuestros servicios.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            2. Uso del Servicio
          </h2>
          <p className="text-gray-700 mb-4">
            TUKY proporciona un servicio de venta minorista de productos de
            consumo con opción de delivery. Al utilizar nuestro servicio, usted
            se compromete a:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Proporcionar información veraz y actualizada</li>
            <li>Mantener la confidencialidad de su cuenta</li>
            <li>Notificar inmediatamente cualquier uso no autorizado</li>
            <li>Utilizar el servicio solo para fines legales</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            3. Productos y Precios
          </h2>
          <p className="text-gray-700 mb-4">
            Nos esforzamos por proporcionar información precisa sobre nuestros
            productos, pero no garantizamos que las descripciones u otro
            contenido sean exactos, completos o libres de errores.
          </p>
          <p className="text-gray-700">
            Los precios están sujetos a cambios sin previo aviso. Nos reservamos
            el derecho de limitar las cantidades de productos vendidos y de
            rechazar pedidos a nuestra discreción.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            4. Política de Delivery
          </h2>
          <p className="text-gray-700 mb-4">
            Nuestro servicio de delivery está disponible en zonas específicas de
            Lima. Los tiempos de entrega son estimados y pueden variar según:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Disponibilidad de productos</li>
            <li>Condiciones climáticas</li>
            <li>Tráfico vehicular</li>
            <li>Demanda del servicio</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            5. Pagos
          </h2>
          <p className="text-gray-700">
            Aceptamos diversas formas de pago incluyendo efectivo, tarjetas de
            débito y crédito, y billeteras digitales. Todos los pagos deben
            realizarse en Soles peruanos (S/). Las transacciones electrónicas
            están protegidas mediante sistemas de seguridad certificados.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            6. Responsabilidad
          </h2>
          <p className="text-gray-700">
            TUKY no será responsable por daños indirectos, incidentales o
            consecuentes que resulten del uso o la imposibilidad de usar
            nuestros servicios. Nuestra responsabilidad máxima estará limitada
            al monto pagado por el producto o servicio en cuestión.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            7. Modificaciones
          </h2>
          <p className="text-gray-700">
            Nos reservamos el derecho de modificar estos términos en cualquier
            momento. Las modificaciones entrarán en vigor inmediatamente después
            de su publicación en el sitio web. Su uso continuado del servicio
            después de dichas modificaciones constituye su aceptación de los
            nuevos términos.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            8. Ley Aplicable
          </h2>
          <p className="text-gray-700">
            Estos términos se regirán e interpretarán de acuerdo con las leyes
            de la República del Perú. Cualquier disputa relacionada con estos
            términos estará sujeta a la jurisdicción exclusiva de los tribunales
            de Lima, Perú.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            9. Contacto
          </h2>
          <p className="text-gray-700">
            Si tiene preguntas sobre estos términos y condiciones, puede
            contactarnos en:
          </p>
          <ul className="list-none pl-0 text-gray-700 mt-2">
            <li>Email: contacto@tuky.pe</li>
            <li>Teléfono: 01 601 3636</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

