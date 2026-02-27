import { create } from 'zustand'
import { Product } from '@/data/products'
import { CART_STORAGE_KEY } from '@/lib/constants'

export interface CartItem {
  product: Product
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

export function getLineId(item: CartItem): string {
  return `${item.product.id}-${item.selectedColor ?? ''}-${item.selectedSize ?? ''}`
}

interface AddItemOptions {
  selectedColor?: string
  selectedSize?: string
}

interface CartStore {
  items: CartItem[]
  isHydrated: boolean
  showNotification: boolean
  addItem: (product: Product, options?: AddItemOptions) => void
  removeItem: (lineId: string) => void
  updateQuantity: (lineId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getTotalItems: () => number
  setHydrated: () => void
  openNotification: () => void
  closeNotification: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isHydrated: false,
  showNotification: false,

  addItem: (product, options) => {
    const { selectedColor, selectedSize } = options ?? {}
    const items = get().items
    const existingIndex = items.findIndex(
      (item) =>
        item.product.id === product.id &&
        (item.selectedColor ?? '') === (selectedColor ?? '') &&
        (item.selectedSize ?? '') === (selectedSize ?? '')
    )

    let newItems: CartItem[]
    if (existingIndex >= 0) {
      newItems = items.map((item, i) =>
        i === existingIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    } else {
      newItems = [
        ...items,
        { product, quantity: 1, selectedColor, selectedSize },
      ]
    }

    set({ items: newItems, showNotification: true })
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems))
    }
  },

  removeItem: (lineId) => {
    const newItems = get().items.filter((item) => getLineId(item) !== lineId)
    set({ items: newItems })
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems))
    }
  },

  updateQuantity: (lineId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(lineId)
      return
    }
    const newItems = get().items.map((item) =>
      getLineId(item) === lineId ? { ...item, quantity } : item
    )
    set({ items: newItems })
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems))
    }
  },

  openNotification: () => set({ showNotification: true }),
  closeNotification: () => set({ showNotification: false }),

  clearCart: () => {
    set({ items: [] })
    if (typeof window !== 'undefined') {
      localStorage.removeItem(CART_STORAGE_KEY)
    }
  },

  getTotal: () => {
    return get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0)
  },

  setHydrated: () => {
    set({ isHydrated: true })
  },
}))

// Hydrate cart from localStorage (client-side only)
if (typeof window !== 'undefined') {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (savedCart) {
      const items = JSON.parse(savedCart)
      useCartStore.setState({ items, isHydrated: true })
    } else {
      useCartStore.getState().setHydrated()
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error)
    useCartStore.getState().setHydrated()
  }
}

