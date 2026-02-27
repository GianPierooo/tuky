'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Filter, X } from 'lucide-react'
import { products } from '@/data/products'
import { Filters } from '@/components/catalog/Filters'
import { ProductGrid } from '@/components/catalog/ProductGrid'
import { SortDropdown, SortOption } from '@/components/catalog/SortDropdown'
import { Input } from '@/components/ui/Input'
import { cn } from '@/lib/cn'

export default function CategoriasPage() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('relevance')
  const [isLoading, setIsLoading] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('cat')
    const q = searchParams.get('q')
    if (cat) setSelectedCategory(cat)
    if (q) setSearchQuery(q)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.categoryId === selectedCategory)
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Sort
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [selectedCategory, searchQuery, sortBy])

  const handleFilterChange = (categoryId: string | null) => {
    setIsLoading(true)
    setSelectedCategory(categoryId)
    setTimeout(() => setIsLoading(false), 300)
  }

  const handleSortChange = (newSort: SortOption) => {
    setIsLoading(true)
    setSortBy(newSort)
    setTimeout(() => setIsLoading(false), 300)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Categorías</h1>

      {/* Search bar */}
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Buscar productos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex gap-6">
        {/* Desktop sidebar */}
        <aside className="hidden w-64 flex-shrink-0 lg:block">
          <div className="sticky top-24 rounded-lg bg-white p-6 shadow-soft">
            <Filters
              selectedCategory={selectedCategory}
              onCategoryChange={handleFilterChange}
            />
          </div>
        </aside>

        {/* Mobile filter button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="fixed bottom-6 left-6 z-30 flex items-center gap-2 rounded-full bg-primary-500 px-4 py-3 font-medium text-white shadow-lg hover:bg-primary-600 lg:hidden"
        >
          <Filter className="h-5 w-5" />
          Filtros
        </button>

        {/* Mobile filter drawer */}
        <div
          className={cn(
            'fixed inset-0 z-50 bg-black/50 transition-opacity lg:hidden',
            isFilterOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          )}
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={cn(
            'fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform lg:hidden',
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-bold">Filtros</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <Filters
                selectedCategory={selectedCategory}
                onCategoryChange={(cat) => {
                  handleFilterChange(cat)
                  setIsFilterOpen(false)
                }}
                isMobile
              />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {filteredProducts.length} producto(s) encontrado(s)
            </p>
            <SortDropdown value={sortBy} onChange={handleSortChange} />
          </div>

          <ProductGrid products={filteredProducts} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

