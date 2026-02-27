import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Cambios y Devoluciones',
  description: 'Política de cambios y devoluciones de TUKY',
  path: '/legales/cambios-devoluciones',
})

export default function CambiosDevolucionesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">
        Política de Cambios y Devoluciones
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">
          Última actualización: 10 de enero de 2026
        </p>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            1. Derecho de Cambio y Devolución
          </h2>
          <p className="text-gray-700">
            En TUKY, queremos que esté completamente satisfecho con su compra.
            De acuerdo con el Código de Protección y Defensa del Consumidor, usted
            tiene derecho a solicitar el cambio o devolución de productos bajo
            ciertas condiciones especificadas en esta política.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            2. Plazo para Cambios y Devoluciones
          </h2>
          <p className="text-gray-700 mb-4">
            Los plazos varían según el tipo de producto:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Productos no perecibles:</strong> 7 días calendario desde
              la fecha de compra
            </li>
            <li>
              <strong>Productos con defecto de fábrica:</strong> Según lo
              establezca la garantía del producto
            </li>
            <li>
              <strong>Productos perecibles:</strong> El mismo día de la compra,
              solo si presentan defectos
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            3. Condiciones para Aceptar Cambios y Devoluciones
          </h2>
          <p className="text-gray-700 mb-4">
            Para que podamos procesar su solicitud, el producto debe cumplir:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Estar en su empaque original sin abrir (productos sellados)</li>
            <li>
              No presentar señales de uso, deterioro o alteración
            </li>
            <li>Incluir todos sus accesorios, etiquetas y embalaje original</li>
            <li>
              Presentar el comprobante de pago (boleta o factura electrónica)
            </li>
            <li>Estar dentro del plazo establecido</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            4. Productos Excluidos
          </h2>
          <p className="text-gray-700 mb-4">
            Los siguientes productos NO son elegibles para cambio o devolución,
            excepto en caso de defecto de fábrica:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              Alimentos perecibles (lácteos, carnes, productos refrigerados)
            </li>
            <li>Bebidas alcohólicas una vez abiertos los sellos</li>
            <li>Productos de higiene personal abiertos o sin sello</li>
            <li>Productos en promoción o liquidación (salvo defecto)</li>
            <li>Medicamentos y productos de cuidado personal abiertos</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            5. Cómo Solicitar un Cambio o Devolución
          </h2>
          <p className="text-gray-700 mb-4">
            Puede realizar su solicitud de dos formas:
          </p>
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 font-bold text-blue-900">
                PRESENCIAL EN TIENDA
              </h3>
              <ol className="list-decimal pl-6 text-blue-800 space-y-1">
                <li>Acérquese a cualquiera de nuestras tiendas</li>
                <li>Presente el producto y su comprobante de pago</li>
                <li>Explique el motivo del cambio o devolución</li>
                <li>Nuestro personal evaluará el producto</li>
                <li>
                  Se procesará el cambio inmediatamente o la devolución en un
                  máximo de 7 días hábiles
                </li>
              </ol>
            </div>
            <div className="rounded-lg bg-green-50 p-4">
              <h3 className="mb-2 font-bold text-green-900">
                DELIVERY/ONLINE
              </h3>
              <ol className="list-decimal pl-6 text-green-800 space-y-1">
                <li>
                  Envíe un correo a devoluciones@tuky.pe con:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Número de pedido</li>
                    <li>Foto del producto y comprobante</li>
                    <li>Motivo de la devolución</li>
                  </ul>
                </li>
                <li>Coordinaremos la recogida del producto sin costo</li>
                <li>Una vez recibido, evaluaremos el producto</li>
                <li>
                  Procesaremos el reembolso o cambio en un máximo de 10 días
                  hábiles
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            6. Métodos de Reembolso
          </h2>
          <p className="text-gray-700 mb-4">
            Los reembolsos se realizarán mediante:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Pago con tarjeta:</strong> Reversión al mismo medio de
              pago en 7-14 días hábiles
            </li>
            <li>
              <strong>Pago en efectivo:</strong> Vale de compra o depósito
              bancario según su preferencia
            </li>
            <li>
              <strong>Vale de compra:</strong> Válido por 90 días en cualquier
              tienda TUKY
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            7. Productos con Defecto o Error de Envío
          </h2>
          <p className="text-gray-700 mb-4">
            Si recibe un producto defectuoso o diferente al solicitado:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Notifíquenos dentro de las 24 horas de recibido</li>
            <li>
              No es necesario que el empaque esté sin abrir (para verificar
              defecto)
            </li>
            <li>
              Asumimos el costo de recogida y reenvío
            </li>
            <li>
              Prioridad en el cambio o reembolso inmediato según su preferencia
            </li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            8. Garantías del Fabricante
          </h2>
          <p className="text-gray-700">
            Algunos productos cuentan con garantía del fabricante adicional a
            nuestras políticas. Para hacer efectiva la garantía del fabricante,
            consulte las condiciones específicas incluidas con el producto o
            contáctenos para orientación sobre el proceso.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            9. Casos Especiales
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">
                Productos en Oferta o Promoción
              </h3>
              <p className="text-gray-700">
                Los productos adquiridos en oferta o promoción pueden ser
                cambiados o devueltos bajo las mismas condiciones, excepto que
                la promoción indique lo contrario.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">
                Packs o Combos
              </h3>
              <p className="text-gray-700">
                Los packs o combos deben devolverse completos. No se aceptan
                devoluciones parciales de productos que forman parte de un pack.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            10. Seguimiento de su Solicitud
          </h2>
          <p className="text-gray-700">
            Una vez presentada su solicitud de cambio o devolución, recibirá:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
            <li>
              Número de caso para seguimiento
            </li>
            <li>
              Confirmación por email del estado de su solicitud
            </li>
            <li>
              Actualizaciones durante el proceso de evaluación
            </li>
            <li>
              Notificación de la resolución final
            </li>
          </ul>
        </section>

        <section className="mt-8 rounded-lg bg-primary-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-primary-900">
            Contacto Devoluciones
          </h2>
          <p className="text-primary-800 mb-2">
            Para consultas sobre cambios y devoluciones:
          </p>
          <ul className="list-none pl-0 text-primary-800">
            <li>Email: devoluciones@tuky.pe</li>
            <li>Teléfono: 01 601 3636 (opción 3)</li>
            <li>Horario: Lunes a Viernes de 9:00 a 18:00</li>
            <li>WhatsApp: +51 999 888 777</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

