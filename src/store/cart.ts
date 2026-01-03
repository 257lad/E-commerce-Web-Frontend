import { defineStore } from 'pinia'
import type { Product } from '@/data/mock_data'

export interface CartItem {
  product: Product
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.product.price * item.quantity, 0)
    },
  },

  actions: {
    addItem(product: Product) {
      const existingItem = this.items.find(item => item.product.id === product.id)
      
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({
          product,
          quantity: 1,
        })
      }
    },

    removeItem(productId: string) {
      const index = this.items.findIndex(item => item.product.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },

    updateQuantity(productId: string, quantity: number) {
      const item = this.items.find(item => item.product.id === productId)
      if (item) {
        if (quantity <= 0) {
          this.removeItem(productId)
        } else {
          item.quantity = quantity
        }
      }
    },

    clearCart() {
      this.items = []
    },
  },
})

