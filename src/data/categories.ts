export interface Category {
  id: string
  name: string
  icon: string
  color: string
}

export const categories: Category[] = [
  {
    id: 'bebidas',
    name: 'Bebidas',
    icon: '🥤',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'snacks',
    name: 'Snacks',
    icon: '🍿',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    id: 'despensa',
    name: 'Despensa',
    icon: '🛒',
    color: 'bg-green-100 text-green-700',
  },
  {
    id: 'lacteos',
    name: 'Lácteos',
    icon: '🥛',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    id: 'helados',
    name: 'Helados',
    icon: '🍦',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    id: 'limpieza',
    name: 'Limpieza',
    icon: '🧼',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    id: 'cuidado-personal',
    name: 'Cuidado Personal',
    icon: '🧴',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    id: 'comida-rapida',
    name: 'Comida Rápida',
    icon: '🍔',
    color: 'bg-red-100 text-red-700',
  },
]

