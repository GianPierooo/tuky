# Guía de Personalización TUKY

Esta guía explica cómo personalizar diferentes aspectos de la web de TUKY.

## 🎨 Cambiar Colores de Marca

### Opción 1: Editar Tailwind Config

Archivo: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    // Cambia estos valores hexadecimales
    500: '#f97316', // Color principal
    600: '#ea580c', // Hover/active
  },
  secondary: {
    400: '#facc15', // Color secundario
    500: '#eab308',
  },
  accent: {
    700: '#82695e', // Color de acento
    800: '#6d574f',
  },
}
```

### Colores que se actualizarán automáticamente:
- Botones primarios
- Enlaces
- Badges de descuento
- Header gradient
- Focus states
- Hover effects

## 📝 Cambiar Textos y Constantes

Archivo: `src/lib/constants.ts`

```typescript
export const SITE_NAME = 'TUKY' // Nombre del sitio
export const SITE_DESCRIPTION = '...' // Descripción meta
export const CONTACT_PHONE = '01 601 3636' // Teléfono
export const CONTACT_EMAIL = 'contacto@tuky.pe' // Email
export const BUSINESS_HOURS = '...' // Horario
```

## 🏪 Gestionar Productos

### Agregar un Producto

Archivo: `src/data/products.ts`

```typescript
{
  id: 'p31', // ID único
  name: 'Coca Cola 1.5L', // Nombre del producto
  price: 5.50, // Precio en soles (S/)
  categoryId: 'bebidas', // Debe existir en categories.ts
  image: 'https://...', // URL de imagen
  isFeatured: true, // ¿Mostrar en home?
  tags: ['coca', 'gaseosa', '1.5l'], // Para búsqueda
  stock: 100, // Stock disponible (opcional)
}
```

### Editar un Producto

Busca el producto por ID y modifica sus propiedades:

```typescript
{
  id: 'p1',
  name: 'Nuevo Nombre',
  price: 4.50, // Nuevo precio
  // ... resto de propiedades
}
```

### Eliminar un Producto

Simplemente elimina el objeto del array o comenta las líneas.

## 📂 Gestionar Categorías

Archivo: `src/data/categories.ts`

### Agregar Categoría

```typescript
{
  id: 'nueva-cat', // ID único (sin espacios)
  name: 'Nueva Categoría', // Nombre visible
  icon: '🆕', // Emoji (o componente de Lucide)
  color: 'bg-blue-100 text-blue-700', // Clases Tailwind
}
```

### Íconos Disponibles

Puedes usar:
- Emojis: '🍔', '🥤', '🧴', etc.
- Componentes Lucide: Importa desde `lucide-react`

## 🎉 Gestionar Promociones

Archivo: `src/data/promos.ts`

```typescript
{
  id: 'promo7',
  title: '3x2 en Snacks',
  discountText: '3x2', // Etiqueta del badge
  validFrom: '2026-01-15', // Fecha inicio (YYYY-MM-DD)
  validTo: '2026-02-15', // Fecha fin
  image: 'https://placeholder.com/600x300', // Imagen promocional
  relatedCategoryIds: ['snacks'], // Categorías relacionadas
}
```

## 🗺 Gestionar Tiendas

Archivo: `src/data/stores.ts`

```typescript
{
  id: 'store9',
  name: 'TUKY San Miguel',
  address: 'Av. La Marina 2000',
  district: 'San Miguel',
  hours: 'Lun-Dom: 7:00 - 23:00',
  mapsUrl: 'https://maps.google.com/?q=San+Miguel,Lima',
}
```

Para el `mapsUrl`, puedes:
1. Ir a Google Maps
2. Buscar la dirección
3. Click en "Compartir" → "Copiar enlace"

## 🎭 Personalizar el Logo

### Actualizar el Logo en el Header

Archivo: `src/components/layout/Header.tsx`

Opción 1: Mantener el texto gradiente (actual):
```tsx
<div className="flex h-10 items-center rounded-lg bg-gradient-to-r from-primary-500 to-secondary-400 px-3">
  <span className="text-2xl font-bold text-white">TUKY</span>
</div>
```

Opción 2: Usar imagen:
```tsx
<Image 
  src="/logo.png" 
  alt="TUKY" 
  width={120} 
  height={40}
  priority
/>
```

### Actualizar Favicon

1. Genera tu favicon en https://favicon.io
2. Coloca los archivos en `/public`
3. Agrega a `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  // ... otros metadatos
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
```

## 🖼 Imágenes de Productos

### Usar Placeholders (Desarrollo)

Actual (placeholder):
```typescript
image: 'https://via.placeholder.com/300x300/FF0000/FFFFFF?text=Coca+Cola'
```

### Usar Imágenes Reales (Producción)

Opción 1: Usar URLs externas
```typescript
image: 'https://cdn.tuky.pe/products/coca-cola-500ml.jpg'
```

Opción 2: Usar Next.js Image Optimization
```typescript
// Coloca imágenes en /public/products/
image: '/products/coca-cola-500ml.jpg'
```

En componentes, usa:
```tsx
import Image from 'next/image'

<Image 
  src={product.image} 
  alt={product.name}
  width={300}
  height={300}
/>
```

## 🎨 Personalizar Componentes UI

### Botones

Archivo: `src/components/ui/Button.tsx`

Variantes disponibles:
- `primary`: Naranja (default)
- `secondary`: Amarillo
- `outline`: Borde naranja
- `ghost`: Sin fondo

Tamaños:
- `sm`: Pequeño
- `md`: Mediano (default)
- `lg`: Grande

### Agregar Nueva Variante

```typescript
const variants = {
  primary: '...',
  secondary: '...',
  outline: '...',
  ghost: '...',
  // Nueva variante
  danger: 'bg-red-500 text-white hover:bg-red-600',
}
```

## 📱 Personalizar Breakpoints

Archivo: `tailwind.config.ts`

```typescript
theme: {
  screens: {
    'sm': '640px',  // Móvil grande
    'md': '768px',  // Tablet
    'lg': '1024px', // Desktop
    'xl': '1280px', // Desktop grande
    '2xl': '1536px', // Desktop extra grande
  }
}
```

## 🔔 Personalizar Notificaciones (Toasts)

Archivo: `src/components/ui/Toast.tsx`

Tipos disponibles:
- `success`: Verde
- `error`: Rojo
- `info`: Azul

Uso:
```typescript
import { showToast } from '@/components/ui/Toast'

showToast('Producto agregado', 'success')
showToast('Error al procesar', 'error')
showToast('Información importante', 'info')
```

Personalizar duración:
```tsx
<Toast 
  message="..."
  type="success"
  duration={5000} // 5 segundos
/>
```

## 📄 Editar Páginas Legales

### Términos y Condiciones
Archivo: `src/app/legales/terminos/page.tsx`

### Política de Privacidad
Archivo: `src/app/legales/privacidad/page.tsx`

### Libro de Reclamaciones
Archivo: `src/app/legales/libro-reclamaciones/page.tsx`

### Comprobantes Electrónicos
Archivo: `src/app/legales/comprobantes-electronicos/page.tsx`

### Cambios y Devoluciones
Archivo: `src/app/legales/cambios-devoluciones/page.tsx`

## 🌐 SEO y Metadata

### Por Página

Cada página puede tener metadata personalizada:

```typescript
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Título de la Página',
  description: 'Descripción para SEO',
  path: '/ruta-de-la-pagina',
})
```

### Global

Archivo: `src/lib/seo.ts`

```typescript
export function createMetadata({
  title,
  description = SITE_DESCRIPTION, // Cambia el default
  path = '',
}: {
  title?: string
  description?: string
  path?: string
}): Metadata {
  // ... lógica de metadata
}
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Importa el proyecto en Vercel
3. Configura variables de entorno (si las hay)
4. Deploy automático

### Netlify

1. Push tu código a GitHub
2. Conecta con Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Servidor Propio

```bash
npm run build
npm run start
```

## 🔧 Variables de Entorno

Crea `.env.local` para desarrollo:

```env
NEXT_PUBLIC_API_URL=https://api.tuky.pe
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
```

Accede con:
```typescript
process.env.NEXT_PUBLIC_API_URL
```

## 💡 Tips y Buenas Prácticas

1. **Imágenes**: Usa WebP para mejor rendimiento
2. **Datos**: Valida la estructura antes de agregar productos
3. **Colores**: Mantén contraste WCAG 2.1 AA mínimo
4. **IDs**: Usa IDs únicos y descriptivos
5. **Precios**: Usa 2 decimales siempre
6. **Stock**: Actualiza regularmente
7. **Categorías**: No exceder 12 para UX óptima
8. **Promociones**: Limpia promos vencidas periódicamente

## 🐛 Troubleshooting

### El carrito no persiste
- Verifica que localStorage esté habilitado
- Revisa la consola del navegador por errores
- Limpia caché y cookies

### Imágenes no cargan
- Verifica URLs
- Agrega dominio a `next.config.js` si es externo
- Comprueba permisos CORS

### Estilos no aplican
- Ejecuta `npm run build` para regenerar
- Verifica sintaxis Tailwind
- Revisa `tailwind.config.ts`

## 📞 Soporte

¿Necesitas ayuda adicional?
- Revisa la documentación de Next.js: https://nextjs.org/docs
- Revisa la documentación de Tailwind: https://tailwindcss.com/docs
- Crea un issue en el repositorio

---

¡Feliz personalización! 🎉

