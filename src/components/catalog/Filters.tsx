'use client'

import { categories } from '@/data/categories'
import { cn } from '@/lib/cn'

interface FiltersProps {
  selectedCategory: string | null
  onCategoryChange: (categoryId: string | null) => void
  isMobile?: boolean
}

export function Filters({
  selectedCategory,
  onCategoryChange,
  isMobile = false,
}: FiltersProps) {
  return (
    <div className={cn(isMobile ? 'space-y-2' : 'space-y-4')}>
      <h3 className="font-bold text-gray-900">Categorías</h3>

      <div className="space-y-1">
        <button
          onClick={() => onCategoryChange(null)}
          className={cn(
            'block w-full rounded-lg px-4 py-2 text-left text-sm transition-colors',
            selectedCategory === null
              ? 'bg-primary-100 font-semibold text-primary-700'
              : 'text-gray-700 hover:bg-gray-100'
          )}
        >
          Todas
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              'flex w-full items-center gap-3 rounded-lg px-4 py-2 text-left text-sm transition-colors',
              selectedCategory === category.id
                ? 'bg-primary-100 font-semibold text-primary-700'
                : 'text-gray-700 hover:bg-gray-100'
            )}
          >
            <span className="text-lg">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

