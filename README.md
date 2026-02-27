# TUKY - Minimarket Online

Web moderna y responsiva para el minimarket TUKY, inspirada en tiendas de conveniencia como Tambo y OXXO, con identidad propia cálida y funcional.

## 🚀 Características

- **Mobile-First**: Diseño optimizado para dispositivos móviles
- **Catálogo completo**: 30 productos en 8 categorías
- **Carrito persistente**: Usando Zustand + localStorage
- **Búsqueda y filtros**: Encuentra productos fácilmente
- **Promociones**: Sistema de ofertas y descuentos
- **Localizador de tiendas**: 8 tiendas en Lima
- **Páginas legales completas**: Términos, privacidad, libro de reclamaciones, etc.
- **Accesible**: Navegación por teclado, ARIA labels, focus visible
- **Rápida**: Optimizada para rendimiento

## 🛠 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS
- **Iconos**: lucide-react
- **Estado global**: Zustand
- **Gestión de datos**: Mock data en TypeScript

## 📦 Instalación

### Requisitos previos

- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone <url-del-repo>
cd Tuky
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 🏗 Estructura del Proyecto

```
Tuky/
├── src/
│   ├── app/                    # Páginas (App Router)
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página de inicio
│   │   ├── categorias/         # Catálogo de productos
│   │   ├── promociones/        # Ofertas y descuentos
│   │   ├── tiendas/            # Localizador de tiendas
│   │   ├── carrito/            # Carrito de compras
│   │   ├── legales/            # Páginas legales
│   │   │   ├── terminos/
│   │   │   ├── privacidad/
│   │   │   ├── libro-reclamaciones/
│   │   │   ├── comprobantes-electronicos/
│   │   │   └── cambios-devoluciones/
│   │   └── not-found.tsx       # Página 404
│   ├── components/             # Componentes reutilizables
│   │   ├── layout/             # Header, Footer, MobileMenu
│   │   ├── ui/                 # Button, Input, Card, Badge, etc.
│   │   ├── home/               # Componentes de la página principal
│   │   └── catalog/            # Componentes del catálogo
│   ├── data/                   # Datos mock
│   │   ├── categories.ts       # 8 categorías
│   │   ├── products.ts         # 30 productos
│   │   ├── promos.ts           # 6 promociones
│   │   └── stores.ts           # 8 tiendas
│   ├── store/                  # Estado global (Zustand)
│   │   └── cartStore.ts        # Carrito con persistencia
│   ├── lib/                    # Utilidades
│   │   ├── cn.ts               # Class names utility
│   │   ├── formatCurrency.ts   # Formato de moneda
│   │   ├── constants.ts        # Constantes globales
│   │   └── seo.ts              # Helpers de SEO
│   └── styles/
│       └── globals.css         # Estilos globales
├── public/                     # Archivos estáticos
├── .eslintrc.json             # Configuración ESLint
├── .prettierrc                # Configuración Prettier
├── tailwind.config.ts         # Configuración Tailwind
├── tsconfig.json              # Configuración TypeScript
├── next.config.js             # Configuración Next.js
└── package.json               # Dependencias

```

## 🎨 Personalización

### Colores de Marca

Los colores están definidos en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Naranja (del logo TUKY)
    500: '#f97316',
    600: '#ea580c',
    // ...
  },
  secondary: {
    // Amarillo (del logo TUKY)
    400: '#facc15',
    500: '#eab308',
    // ...
  },
  accent: {
    // Marrón (del logo TUKY)
    700: '#82695e',
    800: '#6d574f',
    // ...
  },
}
```

Para cambiar los colores:
1. Edita `tailwind.config.ts`
2. Los cambios se aplicarán automáticamente en toda la web

### Agregar Productos

Edita `src/data/products.ts`:

```typescript
{
  id: 'p31',
  name: 'Nuevo Producto',
  price: 9.99,
  categoryId: 'bebidas', // Debe existir en categories.ts
  image: 'https://...',
  isFeatured: false, // true para mostrarlo en home
  tags: ['etiqueta1', 'etiqueta2'],
  stock: 100,
}
```

### Agregar Categorías

Edita `src/data/categories.ts`:

```typescript
{
  id: 'nueva-categoria',
  name: 'Nueva Categoría',
  icon: '🆕', // Emoji o componente
  color: 'bg-blue-100 text-blue-700',
}
```

### Agregar Promociones

Edita `src/data/promos.ts`:

```typescript
{
  id: 'promo7',
  title: 'Nueva Promoción',
  discountText: '30% OFF',
  validFrom: '2026-01-15',
  validTo: '2026-02-15',
  image: 'https://...',
  relatedCategoryIds: ['bebidas'],
}
```

### Agregar Tiendas

Edita `src/data/stores.ts`:

```typescript
{
  id: 'store9',
  name: 'TUKY Nuevo Distrito',
  address: 'Av. Principal 123',
  district: 'Nuevo Distrito',
  hours: 'Lun-Dom: 7:00 - 23:00',
  mapsUrl: 'https://maps.google.com/?q=...',
}
```

## 🔍 Funcionalidades Implementadas

### Búsqueda
- Búsqueda por nombre de producto
- Búsqueda por tags/etiquetas
- Case-insensitive
- Búsqueda desde header y página de categorías

### Filtros
- Por categoría
- Combinable con búsqueda
- Ordenamiento: Relevancia, Precio ascendente/descendente

### Carrito
- Agregar productos
- Modificar cantidades
- Eliminar productos
- Persistencia en localStorage
- Hydration-safe (sin errores de SSR)
- Toast notifications

### Responsive
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menú hamburguesa en móvil
- Drawer de filtros en móvil
- Búsqueda colapsable en móvil

## 📱 Responsive Design

La web está optimizada para todos los tamaños de pantalla:

- **Mobile** (< 768px): Diseño vertical, menú hamburguesa, filtros drawer
- **Tablet** (768px - 1024px): 2-3 columnas, menú expandido
- **Desktop** (> 1024px): Sidebar de filtros, 4+ columnas

## ♿ Accesibilidad

- Navegación por teclado completa
- Focus visible en todos los elementos interactivos
- ARIA labels en botones de íconos
- Imágenes con texto alternativo
- Contraste de colores según WCAG 2.1
- Jerarquía semántica de headings

## 🚦 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Ejecutar versión de producción
npm run start

# Linting
npm run lint

# Formateo de código
npm run format
```

## 📋 Checklist de QA

### Responsive
- [x] Mobile (320px - 767px)
- [x] Tablet (768px - 1023px)
- [x] Desktop (1024px+)
- [x] Sin overflow horizontal en ningún breakpoint
- [x] Imágenes responsive
- [x] Tipografía legible en todos los tamaños

### Funcionalidad
- [x] Búsqueda funcional
- [x] Filtros por categoría
- [x] Ordenamiento de productos
- [x] Agregar al carrito
- [x] Modificar cantidades en carrito
- [x] Eliminar del carrito
- [x] Persistencia del carrito
- [x] Toast notifications
- [x] Navegación entre páginas

### Accesibilidad
- [x] Navegación por teclado
- [x] Focus visible
- [x] ARIA labels
- [x] Alt text en imágenes
- [x] Contraste de colores

### SEO
- [x] Metadata por página
- [x] Títulos descriptivos
- [x] Descripciones meta
- [x] Estructura semántica HTML

## 🎯 Próximos Pasos (Roadmap)

1. **Backend real**: Integración con API REST
2. **Autenticación**: Login/registro de usuarios
3. **Pasarela de pago**: Integración con Niubiz, Mercado Pago, etc.
4. **Sistema de pedidos**: Tracking de pedidos en tiempo real
5. **Panel admin**: Gestión de productos, categorías, tiendas
6. **Google Maps**: Integración real para localización de tiendas
7. **PWA**: Convertir en Progressive Web App
8. **Analytics**: Google Analytics, Facebook Pixel

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de TUKY © 2026

## 📞 Soporte

Para consultas o soporte:
- Email: contacto@tuky.pe
- Teléfono: 01 601 3636
- Horario: Lunes a Viernes de 9:00 a 18:00

---

Desarrollado con ❤️ para TUKY

