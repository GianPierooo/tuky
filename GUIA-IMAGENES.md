# 📸 Guía Completa de Imágenes - TUKY

Esta guía te explica dónde colocar cada tipo de imagen y las especificaciones técnicas recomendadas.

## 📁 Estructura de Carpetas

```
public/
├── images/
│   ├── logo/           → Logo, favicon, iconos de app
│   ├── products/       → Fotos de productos (IMPORTANTE)
│   ├── banners/        → Banners del carrusel principal
│   ├── promos/         → Imágenes de promociones
│   ├── categories/     → Iconos de categorías (opcional)
│   └── stores/         → Fotos de tiendas (opcional)
└── favicon.ico         → Favicon principal
```

---

## 🎨 1. LOGO Y FAVICON

### Ubicación
`/public/images/logo/`

### Archivos necesarios

#### **logo.png** (Logo principal)
- **Dimensiones**: 400x120px (ratio flexible según tu logo)
- **Formato**: PNG con transparencia
- **Fondo**: Transparente
- **Peso**: Máximo 50KB
- **Uso**: Header, footer, páginas internas

#### **logo-white.png** (Logo blanco - opcional)
- **Dimensiones**: 400x120px
- **Formato**: PNG con transparencia
- **Color**: Blanco (#FFFFFF)
- **Uso**: Para fondos oscuros

#### **favicon.ico**
- **Dimensiones**: 32x32px y 16x16px (multi-tamaño)
- **Formato**: ICO
- **Coloca en**: `/public/favicon.ico` (raíz de public)
- **Generador recomendado**: https://favicon.io

#### **apple-touch-icon.png**
- **Dimensiones**: 180x180px
- **Formato**: PNG
- **Fondo**: Opaco (sin transparencia)
- **Coloca en**: `/public/apple-touch-icon.png`
- **Uso**: iOS home screen

### ¿Cómo aplicar el logo?

Edita `src/components/layout/Header.tsx`:

```tsx
import Image from 'next/image'

// Reemplaza la sección del logo con:
<Link href="/" className="flex items-center">
  <Image 
    src="/images/logo/logo.png" 
    alt="TUKY" 
    width={120} 
    height={40}
    priority
    className="h-10 w-auto"
  />
</Link>
```

Para el favicon, edita `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  // ... otros metadatos
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}
```

---

## 🛍️ 2. PRODUCTOS (MUY IMPORTANTE)

### Ubicación
`/public/images/products/`

### Especificaciones técnicas

- **Dimensiones**: **800x800px** (CUADRADO 1:1 - OBLIGATORIO)
- **Formato**: PNG (preferido) o JPG
- **Fondo**: **BLANCO PURO (#FFFFFF)**
- **Resolución**: 72 DPI
- **Peso**: Máximo 200KB por imagen
- **Calidad JPG**: 85-90%

### Consejos para fotografía de productos

1. **Iluminación**: Uniforme, sin sombras duras
2. **Centrado**: Producto centrado en el cuadrado
3. **Padding**: Dejar ~50px de margen alrededor
4. **Ángulo**: Frontal o ligeramente inclinado
5. **Foco**: Producto nítido y en foco

### Nomenclatura de archivos

**Formato**: `categoria-marca-producto-tamaño.extensión`

Ejemplos:
```
bebidas-coca-cola-500ml.png
snacks-lays-original-180g.png
lacteos-gloria-leche-entera-1l.png
limpieza-ace-detergente-1kg.png
helados-donofrio-sublime.png
```

**Reglas**:
- Todo en minúsculas
- Sin espacios (usar guiones)
- Sin tildes ni caracteres especiales
- Descriptivo pero conciso

### ¿Cómo aplicar las imágenes de productos?

Edita `src/data/products.ts`:

```typescript
{
  id: 'p1',
  name: 'Coca Cola 500ml',
  price: 3.5,
  categoryId: 'bebidas',
  image: '/images/products/bebidas-coca-cola-500ml.png', // ← Cambia aquí
  isFeatured: true,
  tags: ['gaseosa', 'coca', 'refresco'],
  stock: 50,
}
```

### Optimización de imágenes

Para reducir el peso sin perder calidad:

**Online**:
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app

**Software**:
- Photoshop: "Save for Web" → JPG calidad 85%
- GIMP: Exportar → JPG calidad 85-90%

---

## 🎪 3. BANNERS DEL CARRUSEL (Hero)

### Ubicación
`/public/images/banners/`

### Especificaciones técnicas

#### Desktop
- **Dimensiones**: **1920x600px** (ratio 16:5)
- **Formato**: JPG (preferido) o PNG
- **Resolución**: 72 DPI
- **Peso**: Máximo 300KB

#### Mobile (opcional, si quieres imágenes diferentes)
- **Dimensiones**: **1200x800px** (ratio 3:2)
- **Formato**: JPG
- **Peso**: Máximo 200KB

### Contenido recomendado

- **Texto**: Mínimo, que sea legible en móvil
- **Área segura**: Centro de la imagen (evita texto en bordes)
- **Contraste**: Alto contraste para legibilidad
- **Call to Action**: Visible y claro

### Cantidad recomendada
3-5 banners en rotación

### Nombres de archivo

```
banner-01-bienvenida.jpg
banner-02-ofertas.jpg
banner-03-delivery.jpg
banner-04-nuevos-productos.jpg
```

### ¿Cómo aplicar los banners?

Edita `src/components/home/HeroBanner.tsx`:

```tsx
const banners = [
  {
    id: 1,
    title: 'Bienvenido a TUKY',
    subtitle: 'Tu minimarket de confianza',
    cta: 'Explorar categorías',
    href: '/categorias',
    image: '/images/banners/banner-01-bienvenida.jpg', // ← Agrega esto
  },
  // ... más banners
]

// Y en el JSX:
<div className="relative aspect-[16/9] md:aspect-[21/9]">
  {banners.map((banner, index) => (
    <div key={banner.id} className={/* ... */}>
      <div 
        className="flex h-full items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${banner.image})` }} // ← Usa la imagen
      >
        {/* Contenido del banner */}
      </div>
    </div>
  ))}
</div>
```

---

## 🎉 4. PROMOCIONES

### Ubicación
`/public/images/promos/`

### Especificaciones técnicas

- **Dimensiones**: **1200x675px** (ratio 16:9)
- **Formato**: JPG o PNG
- **Resolución**: 72 DPI
- **Peso**: Máximo 250KB
- **Calidad JPG**: 85-90%

### Diseño recomendado

- **Producto visible**: Muestra el producto promocionado
- **Descuento destacado**: Grande y visible (ej: "50% OFF")
- **Colores**: Usa los colores de marca (naranja, amarillo)
- **Texto**: Legible incluso en móvil

### Nombres de archivo

```
promo-2x1-bebidas.jpg
promo-20off-lacteos.jpg
promo-pack-limpieza.jpg
promo-helados-verano.jpg
```

### ¿Cómo aplicar las imágenes de promos?

Edita `src/data/promos.ts`:

```typescript
{
  id: 'promo1',
  title: '2x1 en Bebidas',
  discountText: '50% OFF',
  validFrom: '2026-01-01',
  validTo: '2026-01-31',
  image: '/images/promos/promo-2x1-bebidas.jpg', // ← Cambia aquí
  relatedCategoryIds: ['bebidas'],
}
```

---

## 📦 5. CATEGORÍAS (Opcional)

### Ubicación
`/public/images/categories/`

### Especificaciones técnicas

- **Dimensiones**: **256x256px** (cuadrado)
- **Formato**: PNG con transparencia (preferido) o SVG
- **Resolución**: 72 DPI
- **Peso**: Máximo 50KB
- **Fondo**: Transparente

### Nota
Por defecto, usamos emojis (🥤🍿🛒) que se ven bien en todos los dispositivos. Solo usa iconos personalizados si tienes un diseño específico.

### Si decides usar iconos personalizados

Edita `src/data/categories.ts`:

```typescript
{
  id: 'bebidas',
  name: 'Bebidas',
  icon: '/images/categories/bebidas.png', // ← En lugar de emoji
  color: 'bg-blue-100 text-blue-700',
}
```

Y edita `src/components/home/CategoryGrid.tsx`:

```tsx
<div className={`mb-3 flex h-16 w-16 items-center justify-center rounded-full ${category.color}`}>
  {category.icon.startsWith('/') ? (
    <Image src={category.icon} alt={category.name} width={48} height={48} />
  ) : (
    <span className="text-3xl">{category.icon}</span>
  )}
</div>
```

---

## 🏪 6. TIENDAS (Opcional)

### Ubicación
`/public/images/stores/`

### Especificaciones técnicas

- **Dimensiones**: **1200x800px** (ratio 3:2)
- **Formato**: JPG
- **Resolución**: 72 DPI
- **Peso**: Máximo 200KB

### Contenido recomendado

- Foto exterior de la tienda
- Fachada visible con logo TUKY
- Buena iluminación
- Sin personas identificables (privacidad)

### Nombres de archivo

```
tienda-miraflores.jpg
tienda-san-isidro.jpg
tienda-surco.jpg
```

---

## 🎯 RESUMEN RÁPIDO

| Tipo | Carpeta | Dimensiones | Formato | Peso Max |
|------|---------|-------------|---------|----------|
| **Logo** | `/images/logo/` | 400x120px | PNG | 50KB |
| **Favicon** | `/public/` | 32x32px | ICO | 10KB |
| **Productos** | `/images/products/` | **800x800px** | PNG/JPG | 200KB |
| **Banners** | `/images/banners/` | 1920x600px | JPG | 300KB |
| **Promos** | `/images/promos/` | 1200x675px | JPG | 250KB |
| **Categorías** | `/images/categories/` | 256x256px | PNG | 50KB |
| **Tiendas** | `/images/stores/` | 1200x800px | JPG | 200KB |

---

## 🛠️ Herramientas Recomendadas

### Edición de imágenes
- **Photoshop** (profesional)
- **GIMP** (gratis, alternativa a Photoshop)
- **Canva** (online, fácil de usar)
- **Figma** (diseño y exportación)

### Optimización/Compresión
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **ImageOptim** (Mac)
- **FileOptimizer** (Windows)

### Generación de favicons
- **Favicon.io**: https://favicon.io
- **RealFaviconGenerator**: https://realfavicongenerator.net

### Redimensionamiento por lotes
- **Bulk Resize Photos**: https://bulkresizephotos.com
- **IrfanView** (Windows)
- **ImageMagick** (línea de comandos)

---

## ✅ Checklist antes de subir imágenes

### Productos
- [ ] Fondo blanco puro (#FFFFFF)
- [ ] 800x800px exactos
- [ ] Producto centrado
- [ ] Peso menor a 200KB
- [ ] Nombre de archivo descriptivo
- [ ] Sin tildes ni espacios en el nombre

### Banners
- [ ] 1920x600px para desktop
- [ ] Texto legible en móvil
- [ ] Peso menor a 300KB
- [ ] Call to Action visible
- [ ] Optimizado (comprimido)

### Logo
- [ ] Fondo transparente
- [ ] Alta calidad
- [ ] Versión blanca (si necesitas)
- [ ] Favicon generado

---

## 🚀 Pasos para aplicar tus imágenes

1. **Prepara tus imágenes** según las especificaciones
2. **Optimiza/comprime** las imágenes
3. **Renombra** con nombres descriptivos
4. **Coloca** en la carpeta correspondiente
5. **Actualiza** los archivos de datos (products.ts, promos.ts, etc.)
6. **Prueba** en el navegador
7. **Verifica** que se vean bien en móvil

---

## 💡 Tips Profesionales

1. **Consistencia**: Todas las fotos de productos deben tener el mismo estilo
2. **Calidad**: Es mejor tener menos productos con buenas fotos que muchos con fotos malas
3. **Optimización**: SIEMPRE optimiza las imágenes antes de subirlas
4. **WebP**: Considera convertir a WebP para mejor rendimiento
5. **Lazy Loading**: Next.js lo hace automático con el componente Image
6. **Alt text**: Usa nombres descriptivos para SEO y accesibilidad

---

## 📞 ¿Necesitas ayuda?

Si tienes dudas sobre:
- Cómo editar/optimizar imágenes
- Problemas para aplicar las imágenes
- Errores al cargar imágenes

¡Pregunta! Estoy aquí para ayudarte 😊

---

**¡Éxito con tus imágenes!** 🎨📸

