<template>
  <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1">
    <div class="aspect-square bg-gray-100 overflow-hidden">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div class="p-4 sm:p-5">
      <h3 class="font-semibold text-base sm:text-lg mb-2 text-gray-900">{{ product.name }}</h3>
      <p class="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{{ product.description }}</p>
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <span class="text-xl sm:text-2xl font-bold text-gray-900">${{ product.price.toFixed(2) }}</span>
        <button
          @click="handleAddToCart"
          class="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium text-sm sm:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/data/mock_data'
import { useCartStore } from '@/store/cart'

interface Props {
  product: Product
}

const props = defineProps<Props>()

const cartStore = useCartStore()

const handleAddToCart = () => {
  cartStore.addItem(props.product)
}
</script>
