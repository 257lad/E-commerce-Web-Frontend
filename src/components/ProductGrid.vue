<template>
  <div v-if="products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else class="text-center py-12 sm:py-16">
    <div class="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full mb-4">
      <Search :size="32" class="text-gray-400" />
    </div>
    <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No products found</h3>
    <p class="text-gray-600 text-sm sm:text-base">Try adjusting your search or filters</p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/data/mock_data'
import { Search } from 'lucide-vue-next'
import ProductCard from './ProductCard.vue'

interface Props {
  products: Product[]
}

defineProps<Props>()
</script>

