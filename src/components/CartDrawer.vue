<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 overflow-hidden"
    @click.self="closeDrawer"
  >
    <div class="absolute inset-0 bg-black/50" />
    <div class="absolute right-0 top-0 h-full w-full sm:max-w-md bg-white dark:bg-gray-800 shadow-xl flex flex-col transition-colors">
      <div class="flex items-center justify-between p-4 sm:p-6 border-b dark:border-gray-700">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Shopping Cart</h2>
        <button
          @click="closeDrawer"
          class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          aria-label="Close cart"
        >
          <X :size="20" class="sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-4 sm:p-6">
        <div v-if="cartStore.items.length === 0" class="text-center py-8 sm:py-12">
          <ShoppingCart :size="40" class="sm:w-12 sm:h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <p class="text-gray-500 dark:text-gray-400 text-sm sm:text-base">Your cart is empty</p>
        </div>

        <div v-else class="space-y-3 sm:space-y-4">
          <div
            v-for="item in cartStore.items"
            :key="item.product.id"
            class="flex gap-3 sm:gap-4 p-3 sm:p-4 border dark:border-gray-700 rounded-lg"
          >
            <img
              :src="item.product.image"
              :alt="item.product.name"
              class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold mb-1 text-sm sm:text-base truncate text-gray-900 dark:text-white">{{ item.product.name }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-2">${{ item.product.price.toFixed(2) }}</p>
              <div class="flex items-center gap-2">
                <button
                  @click="decrementQuantity(item.product.id)"
                  class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white"
                  aria-label="Decrease quantity"
                >
                  <Minus :size="14" class="sm:w-4 sm:h-4" />
                </button>
                <span class="w-10 sm:w-12 text-center font-medium text-sm sm:text-base text-gray-900 dark:text-white">{{ item.quantity }}</span>
                <button
                  @click="incrementQuantity(item.product.id)"
                  class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white"
                  aria-label="Increase quantity"
                >
                  <Plus :size="14" class="sm:w-4 sm:h-4" />
                </button>
                <button
                  @click="removeItem(item.product.id)"
                  class="ml-auto p-1.5 sm:p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 :size="16" class="sm:w-4.5 sm:h-4.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="cartStore.items.length > 0" class="border-t dark:border-gray-700 p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div class="flex justify-between text-base sm:text-lg text-gray-900 dark:text-white">
          <span class="font-semibold">Total Items:</span>
          <span class="font-bold">{{ cartStore.totalItems }}</span>
        </div>
        <div class="flex justify-between text-lg sm:text-xl text-gray-900 dark:text-white">
          <span class="font-semibold">Total Price:</span>
          <span class="font-bold">${{ cartStore.totalPrice.toFixed(2) }}</span>
        </div>
        <button
          class="w-full py-2.5 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors font-semibold text-sm sm:text-base"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart'
import { X, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-vue-next'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'update:isOpen', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const cartStore = useCartStore()

const closeDrawer = () => {
  emit('update:isOpen', false)
}

const incrementQuantity = (productId: string) => {
  const item = cartStore.items.find(item => item.product.id === productId)
  if (item) {
    cartStore.updateQuantity(productId, item.quantity + 1)
  }
}

const decrementQuantity = (productId: string) => {
  const item = cartStore.items.find(item => item.product.id === productId)
  if (item) {
    cartStore.updateQuantity(productId, item.quantity - 1)
  }
}

const removeItem = (productId: string) => {
  cartStore.removeItem(productId)
}
</script>

