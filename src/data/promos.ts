export interface Promo {
  id: string
  title: string
  discountText: string
  validFrom: string
  validTo: string
  image: string
  relatedCategoryIds?: string[]
}

export const promos: Promo[] = [
  {
    id: 'promo1',
    title: '2x1 en Bebidas',
    discountText: '50% OFF',
    validFrom: '2026-01-01',
    validTo: '2026-01-31',
    image: 'https://via.placeholder.com/600x300/1E90FF/FFFFFF?text=2x1+Bebidas',
    relatedCategoryIds: ['bebidas'],
  },
  {
    id: 'promo2',
    title: 'Snacks desde S/5.50',
    discountText: 'Ofertas',
    validFrom: '2026-01-01',
    validTo: '2026-01-15',
    image: 'https://via.placeholder.com/600x300/FFD700/000000?text=Snacks+Ofertas',
    relatedCategoryIds: ['snacks'],
  },
  {
    id: 'promo3',
    title: '20% OFF en Lácteos',
    discountText: '20% OFF',
    validFrom: '2026-01-05',
    validTo: '2026-01-20',
    image: 'https://via.placeholder.com/600x300/9370DB/FFFFFF?text=20%25+Lacteos',
    relatedCategoryIds: ['lacteos'],
  },
  {
    id: 'promo4',
    title: 'Helados a mitad de precio',
    discountText: '50% OFF',
    validFrom: '2026-01-01',
    validTo: '2026-01-28',
    image: 'https://via.placeholder.com/600x300/FF69B4/FFFFFF?text=Helados+50%25',
    relatedCategoryIds: ['helados'],
  },
  {
    id: 'promo5',
    title: 'Pack Limpieza S/30',
    discountText: 'Pack',
    validFrom: '2026-01-10',
    validTo: '2026-01-31',
    image: 'https://via.placeholder.com/600x300/32CD32/FFFFFF?text=Pack+Limpieza',
    relatedCategoryIds: ['limpieza'],
  },
  {
    id: 'promo6',
    title: 'Combo Despensa S/25',
    discountText: 'Combo',
    validFrom: '2026-01-01',
    validTo: '2026-02-28',
    image: 'https://via.placeholder.com/600x300/FF4500/FFFFFF?text=Combo+Despensa',
    relatedCategoryIds: ['despensa'],
  },
]

