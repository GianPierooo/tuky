import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Libro de Reclamaciones',
  description: 'Libro de reclamaciones virtual de TUKY',
  path: '/legales/libro-reclamaciones',
})

export default function LibroReclamacionesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">
        Libro de Reclamaciones
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            ¿Qué es el Libro de Reclamaciones?
          </h2>
          <p className="text-gray-700">
            El Libro de Reclamaciones es un mecanismo de protección al
            consumidor establecido por el Código de Protección y Defensa del
            Consumidor (Ley N° 29571). Permite a nuestros clientes registrar sus
            quejas o reclamos sobre los productos o servicios adquiridos en
            TUKY.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Tipos de Registro
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 font-bold text-blue-900">
                RECLAMO
              </h3>
              <p className="text-blue-800">
                Disconformidad relacionada a los productos o servicios
                adquiridos. Ejemplo: producto defectuoso, servicio no recibido,
                cobro indebido.
              </p>
            </div>
            <div className="rounded-lg bg-orange-50 p-4">
              <h3 className="mb-2 font-bold text-orange-900">
                QUEJA
              </h3>
              <p className="text-orange-800">
                Disconformidad no relacionada a los productos o servicios, sino
                a la atención al cliente. Ejemplo: mala atención, demora
                excesiva, trato inadecuado.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Cómo Presentar un Reclamo o Queja
          </h2>
          <p className="text-gray-700 mb-4">
            Puede presentar su reclamo o queja de las siguientes formas:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Presencial:</strong> En cualquiera de nuestras tiendas
              solicitando el Libro de Reclamaciones físico
            </li>
            <li>
              <strong>Virtual:</strong> A través de nuestro formulario en línea
              (próximamente disponible)
            </li>
            <li>
              <strong>Email:</strong> Enviando su reclamo a
              reclamaciones@tuky.pe
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Información Requerida
          </h2>
          <p className="text-gray-700 mb-4">
            Para procesar su reclamo o queja, necesitamos la siguiente
            información:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Nombre completo del consumidor</li>
            <li>Documento de identidad (DNI, CE, Pasaporte)</li>
            <li>Dirección y teléfono de contacto</li>
            <li>Email (opcional pero recomendado)</li>
            <li>Descripción detallada del reclamo o queja</li>
            <li>
              Pedido que reclama (si aplica): número de pedido, fecha, monto
            </li>
            <li>Detalle del producto o servicio contratado</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Tiempo de Respuesta
          </h2>
          <p className="text-gray-700">
            De acuerdo con la normativa vigente, TUKY tiene un plazo máximo de
            30 días calendario para dar respuesta a su reclamo o queja. La
            respuesta será enviada a través del medio de contacto que usted haya
            indicado (email, teléfono o dirección física).
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Proceso de Atención
          </h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li>
              <strong>Recepción:</strong> Registramos su reclamo o queja en
              nuestro sistema
            </li>
            <li>
              <strong>Evaluación:</strong> Nuestro equipo analiza el caso y
              recopila información necesaria
            </li>
            <li>
              <strong>Investigación:</strong> Verificamos los hechos y
              consultamos con las áreas involucradas
            </li>
            <li>
              <strong>Resolución:</strong> Determinamos la solución apropiada
              según el caso
            </li>
            <li>
              <strong>Comunicación:</strong> Le notificamos la respuesta y las
              acciones tomadas
            </li>
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Sus Derechos como Consumidor
          </h2>
          <p className="text-gray-700 mb-4">
            Como consumidor, usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Recibir productos y servicios de calidad</li>
            <li>
              Ser informado adecuadamente sobre características y condiciones
            </li>
            <li>Recibir un trato digno y respetuoso</li>
            <li>Presentar reclamos y recibir respuesta oportuna</li>
            <li>Elegir libremente entre productos y servicios</li>
            <li>Ser protegido contra métodos comerciales coercitivos</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Autoridad Competente
          </h2>
          <p className="text-gray-700">
            Si no está satisfecho con nuestra respuesta, puede acudir al
            Instituto Nacional de Defensa de la Competencia y de la Protección
            de la Propiedad Intelectual (INDECOPI) para presentar su denuncia.
          </p>
          <ul className="list-none pl-0 text-gray-700 mt-4">
            <li>
              <strong>INDECOPI:</strong>
            </li>
            <li>Teléfono: 224-7777</li>
            <li>Web: www.indecopi.gob.pe</li>
            <li>Email: sacreclamo@indecopi.gob.pe</li>
          </ul>
        </section>

        <section className="mt-8 rounded-lg bg-primary-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-primary-900">
            Contacto TUKY
          </h2>
          <p className="text-primary-800 mb-2">
            Para presentar un reclamo o consulta:
          </p>
          <ul className="list-none pl-0 text-primary-800">
            <li>Email: reclamaciones@tuky.pe</li>
            <li>Teléfono: 01 601 3636</li>
            <li>Horario: Lunes a Viernes de 9:00 a 18:00</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

