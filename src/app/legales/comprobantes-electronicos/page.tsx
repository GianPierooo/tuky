import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Comprobantes Electrónicos',
  description: 'Información sobre comprobantes electrónicos de TUKY',
  path: '/legales/comprobantes-electronicos',
})

export default function ComprobantesElectronicosPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">
        Comprobantes Electrónicos
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            ¿Qué son los Comprobantes Electrónicos?
          </h2>
          <p className="text-gray-700">
            Los comprobantes electrónicos son documentos digitales que tienen la
            misma validez legal que los comprobantes físicos tradicionales.
            TUKY, en cumplimiento con la normativa de SUNAT, emite facturas y
            boletas de venta electrónicas para todas las transacciones
            realizadas.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Tipos de Comprobantes
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 font-bold text-blue-900">
                BOLETA DE VENTA ELECTRÓNICA
              </h3>
              <p className="text-blue-800 mb-2">
                Comprobante emitido a consumidores finales para sustentar la
                compra de bienes.
              </p>
              <p className="text-sm text-blue-700">
                <strong>Requisitos:</strong> DNI del comprador
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4">
              <h3 className="mb-2 font-bold text-green-900">
                FACTURA ELECTRÓNICA
              </h3>
              <p className="text-green-800 mb-2">
                Comprobante emitido a empresas o personas con RUC que permite
                sustentar gastos deducibles para fines tributarios.
              </p>
              <p className="text-sm text-green-700">
                <strong>Requisitos:</strong> RUC y razón social del comprador
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Cómo Solicitar un Comprobante
          </h2>
          <p className="text-gray-700 mb-4">
            Para recibir su comprobante electrónico:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li>
              Al realizar su pedido, proporcione sus datos de facturación:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Para boleta: Nombres completos y número de DNI
                </li>
                <li>
                  Para factura: RUC, razón social y dirección fiscal
                </li>
              </ul>
            </li>
            <li>
              Indique su correo electrónico donde desea recibir el comprobante
            </li>
            <li>
              El comprobante será enviado automáticamente a su email dentro de
              las 24 horas posteriores a la compra
            </li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Validez Legal
          </h2>
          <p className="text-gray-700">
            Los comprobantes electrónicos emitidos por TUKY tienen plena validez
            legal y tributaria según lo establecido por:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
            <li>Resolución de Superintendencia N° 300-2014/SUNAT</li>
            <li>Resolución de Superintendencia N° 188-2010/SUNAT</li>
            <li>Decreto Legislativo N° 1314</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Verificación de Comprobantes
          </h2>
          <p className="text-gray-700 mb-4">
            Puede verificar la autenticidad de su comprobante electrónico
            mediante:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Código QR:</strong> Presente en el comprobante, escaneable
              con cualquier lector QR
            </li>
            <li>
              <strong>Portal SUNAT:</strong> Ingresando a
              www.sunat.gob.pe/consulta-comprobantes
            </li>
            <li>
              <strong>Email de TUKY:</strong> Solicitando verificación a
              facturacion@tuky.pe
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Notas de Crédito y Débito
          </h2>
          <p className="text-gray-700 mb-4">
            En caso de devoluciones, anulaciones o correcciones, emitimos:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Nota de Crédito:</strong> Para anular o reducir el monto
              de un comprobante (devoluciones, descuentos)
            </li>
            <li>
              <strong>Nota de Débito:</strong> Para aumentar el monto de un
              comprobante (cargos adicionales)
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Estos documentos también se envían electrónicamente y tienen la
            misma validez que los comprobantes originales.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Conservación de Comprobantes
          </h2>
          <p className="text-gray-700 mb-4">
            Es importante que conserve sus comprobantes electrónicos para:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Realizar cambios o devoluciones</li>
            <li>Ejercer la garantía del producto</li>
            <li>Fines tributarios (en caso de facturas)</li>
            <li>Sustento de gastos ante terceros</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Recomendamos guardar una copia digital de sus comprobantes en un
            lugar seguro o imprimir una copia física.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Problemas con Comprobantes
          </h2>
          <p className="text-gray-700 mb-4">
            Si tiene problemas para recibir o visualizar su comprobante:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Verifique su bandeja de spam o correo no deseado</li>
            <li>
              Compruebe que el email proporcionado sea correcto
            </li>
            <li>
              Espere hasta 24 horas desde la confirmación del pedido
            </li>
            <li>
              Si persiste el problema, contáctenos con su número de pedido
            </li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Corrección de Datos
          </h2>
          <p className="text-gray-700">
            Si detecta algún error en los datos de su comprobante, puede
            solicitar una corrección dentro de los 7 días posteriores a la
            emisión. Los datos que pueden corregirse incluyen: nombre/razón
            social, dirección fiscal, tipo de documento, número de documento.
            Envíe su solicitud a facturacion@tuky.pe con el comprobante a
            corregir y los datos correctos.
          </p>
        </section>

        <section className="mt-8 rounded-lg bg-primary-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-primary-900">
            Contacto Facturación
          </h2>
          <p className="text-primary-800 mb-2">
            Para consultas sobre comprobantes electrónicos:
          </p>
          <ul className="list-none pl-0 text-primary-800">
            <li>Email: facturacion@tuky.pe</li>
            <li>Teléfono: 01 601 3636 (opción 2)</li>
            <li>Horario: Lunes a Viernes de 9:00 a 18:00</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

