import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Política de Privacidad',
  description: 'Política de privacidad y protección de datos de TUKY',
  path: '/legales/privacidad',
})

export default function PrivacidadPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">
        Política de Privacidad
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">
          Última actualización: 10 de enero de 2026
        </p>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            1. Información que Recopilamos
          </h2>
          <p className="text-gray-700 mb-4">
            En TUKY, recopilamos diferentes tipos de información para brindarle
            un mejor servicio:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Información personal:</strong> Nombre, dirección de correo
              electrónico, teléfono, dirección de entrega
            </li>
            <li>
              <strong>Información de pago:</strong> Datos de tarjetas de crédito
              o débito (procesados de forma segura)
            </li>
            <li>
              <strong>Información de navegación:</strong> Dirección IP,
              navegador, páginas visitadas, tiempo de permanencia
            </li>
            <li>
              <strong>Historial de compras:</strong> Productos adquiridos,
              preferencias, frecuencia de compra
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            2. Uso de la Información
          </h2>
          <p className="text-gray-700 mb-4">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Procesar y gestionar sus pedidos</li>
            <li>Mejorar nuestros productos y servicios</li>
            <li>Personalizar su experiencia de compra</li>
            <li>Enviar notificaciones sobre su pedido</li>
            <li>Comunicar promociones y ofertas (con su consentimiento)</li>
            <li>Cumplir con obligaciones legales y regulatorias</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            3. Protección de Datos
          </h2>
          <p className="text-gray-700 mb-4">
            Implementamos medidas de seguridad técnicas y organizativas para
            proteger su información personal:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Cifrado SSL/TLS para transmisión de datos</li>
            <li>Almacenamiento seguro en servidores protegidos</li>
            <li>Acceso restringido a información personal</li>
            <li>Monitoreo constante de sistemas</li>
            <li>Capacitación regular del personal en protección de datos</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            4. Compartir Información
          </h2>
          <p className="text-gray-700 mb-4">
            No vendemos ni alquilamos su información personal a terceros.
            Podemos compartir información limitada con:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              Proveedores de servicios de delivery para completar entregas
            </li>
            <li>Procesadores de pago para transacciones seguras</li>
            <li>
              Servicios de análisis para mejorar nuestro sitio web (datos
              anonimizados)
            </li>
            <li>Autoridades legales cuando sea requerido por ley</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            5. Cookies y Tecnologías Similares
          </h2>
          <p className="text-gray-700">
            Utilizamos cookies y tecnologías similares para mejorar su
            experiencia. Las cookies son pequeños archivos de texto almacenados
            en su dispositivo que nos ayudan a recordar sus preferencias,
            analizar el tráfico del sitio y personalizar contenido. Puede
            configurar su navegador para rechazar cookies, pero esto puede
            afectar la funcionalidad del sitio.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            6. Sus Derechos
          </h2>
          <p className="text-gray-700 mb-4">
            De acuerdo con la Ley de Protección de Datos Personales del Perú,
            usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Acceder a sus datos personales</li>
            <li>Rectificar información inexacta</li>
            <li>Cancelar o eliminar sus datos</li>
            <li>Oponerse al procesamiento de sus datos</li>
            <li>Revocar su consentimiento en cualquier momento</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            7. Retención de Datos
          </h2>
          <p className="text-gray-700">
            Conservamos su información personal durante el tiempo necesario para
            cumplir con los propósitos descritos en esta política, a menos que
            la ley requiera o permita un período de retención más largo. Los
            datos de transacciones se conservan según lo requieran las
            regulaciones fiscales y contables.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            8. Menores de Edad
          </h2>
          <p className="text-gray-700">
            Nuestros servicios están destinados a mayores de 18 años. No
            recopilamos intencionalmente información de menores de edad. Si
            descubrimos que hemos recopilado datos de un menor, eliminaremos
            dicha información inmediatamente.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            9. Cambios a esta Política
          </h2>
          <p className="text-gray-700">
            Podemos actualizar esta política de privacidad periódicamente. Le
            notificaremos sobre cambios significativos publicando la nueva
            política en nuestro sitio web y actualizando la fecha de "última
            actualización".
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            10. Contacto
          </h2>
          <p className="text-gray-700">
            Si tiene preguntas sobre nuestra política de privacidad o desea
            ejercer sus derechos, contáctenos en:
          </p>
          <ul className="list-none pl-0 text-gray-700 mt-2">
            <li>Email: privacidad@tuky.pe</li>
            <li>Teléfono: 01 601 3636</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

