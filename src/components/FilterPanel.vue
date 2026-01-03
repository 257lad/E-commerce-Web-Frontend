<template>
  <div class="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
    <div class="flex items-center justify-between mb-4 sm:mb-6">
      <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Filters</h3>
      <button
        v-if="hasActiveFilters"
        @click="clearFilters"
        class="text-sm text-blue-600 hover:text-blue-700 font-medium"
      >
        Clear All
      </button>
    </div>

    <!-- Category Filter -->
    <div class="mb-6">
      <h4 class="text-sm font-semibold text-gray-700 mb-3">Category</h4>
      <div class="space-y-2">
        <label
          v-for="category in categories"
          :key="category"
          class="flex items-center cursor-pointer group"
        >
          <input
            v-model="selectedCategory"
            type="radio"
            :value="category"
            class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            @change="handleCategoryChange"
          />
          <span class="ml-2 text-sm text-gray-700 group-hover:text-gray-900">
            {{ category }}
          </span>
        </label>
      </div>
    </div>

    <!-- Price Range Filter -->
    <div class="mb-6">
      <h4 class="text-sm font-semibold text-gray-700 mb-3">Price Range</h4>
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <input
            v-model.number="minPrice"
            type="number"
            placeholder="Min"
            min="0"
            step="0.01"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white text-gray-900 placeholder-gray-400"
            @input="handlePriceChange"
          />
          <span class="text-gray-500">-</span>
          <input
            v-model.number="maxPrice"
            type="number"
            placeholder="Max"
            min="0"
            step="0.01"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white text-gray-900 placeholder-gray-400"
            @input="handlePriceChange"
          />
        </div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="range in priceRanges"
            :key="range.label"
            @click="applyPriceRange(range.min, range.max)"
            :class="[
              'px-2 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap',
              isPriceRangeActive(range.min, range.max)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ range.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Sort Options -->
    <div>
      <h4 class="text-sm font-semibold text-gray-700 mb-3">Sort By</h4>
      <select
        v-model="sortBy"
        @change="handleSortChange"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white text-gray-900"
      >
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { categories } from '@/data/mock_data'

export interface FilterOptions {
  category: string
  minPrice: number | null
  maxPrice: number | null
  sortBy: string
}

interface Emits {
  (e: 'filter', filters: FilterOptions): void
}

const emit = defineEmits<Emits>()

const selectedCategory = ref('All')
const minPrice = ref<number | null>(null)
const maxPrice = ref<number | null>(null)
const sortBy = ref('name-asc')

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50-$100', min: 50, max: 100 },
  { label: '$100-$200', min: 100, max: 200 },
  { label: 'Over $200', min: 200, max: null }
]

const hasActiveFilters = computed(() => {
  return selectedCategory.value !== 'All' || minPrice.value !== null || maxPrice.value !== null
})

const isPriceRangeActive = (min: number | null, max: number | null) => {
  return minPrice.value === min && maxPrice.value === max
}

const applyPriceRange = (min: number | null, max: number | null) => {
  minPrice.value = min
  maxPrice.value = max
  handlePriceChange()
}

const handleCategoryChange = () => {
  emitFilters()
}

const handlePriceChange = () => {
  emitFilters()
}

const handleSortChange = () => {
  emitFilters()
}

const clearFilters = () => {
  selectedCategory.value = 'All'
  minPrice.value = null
  maxPrice.value = null
  sortBy.value = 'name-asc'
  emitFilters()
}

const emitFilters = () => {
  emit('filter', {
    category: selectedCategory.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
    sortBy: sortBy.value
  })
}

// Emit initial filters
emitFilters()
</script>
