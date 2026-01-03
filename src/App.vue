<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <NavBar :user="user" :cart-count="cartStore.totalItems" @open-cart="openCart" />

    <main class="flex-grow">
      <Hero />
      <section id="products" class="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
            Featured Products
          </h2>
          
          <!-- Search Bar -->
          <div class="mb-6 sm:mb-8">
            <SearchBar @search="handleSearch" />
          </div>

          <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <!-- Filter Panel -->
            <aside class="lg:w-64 flex-shrink-0 order-2 lg:order-1">
              <div class="lg:sticky lg:top-24">
                <FilterPanel @filter="handleFilter" />
              </div>
            </aside>

            <!-- Products Grid -->
            <div class="flex-1 order-1 lg:order-2">
              <div class="mb-4 sm:mb-6 flex items-center justify-between flex-wrap gap-2">
                <p class="text-sm sm:text-base text-gray-600">
                  Showing <span class="font-semibold text-gray-900">{{ filteredProducts.length }}</span> 
                  {{ filteredProducts.length === 1 ? 'product' : 'products' }}
                </p>
              </div>
              <ProductGrid :products="filteredProducts" />
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />

    <CartDrawer :is-open="isCartOpen" @update:is-open="isCartOpen = $event" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCartStore } from '@/store/cart'
import { mockProducts } from '@/data/mock_data'
import { mockUser } from '@/data/user'
import { useProductFilter } from '@/composables/useProductFilter'
import type { FilterOptions } from '@/components/FilterPanel'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import SearchBar from './components/SearchBar.vue'
import FilterPanel from './components/FilterPanel.vue'
import ProductGrid from './components/ProductGrid.vue'
import CartDrawer from './components/CartDrawer.vue'
import Footer from './components/Footer.vue'

const cartStore = useCartStore()
const user = mockUser

const isCartOpen = ref(false)

const searchQuery = ref('')
const filterOptions = ref<FilterOptions>({
  category: 'All',
  minPrice: null,
  maxPrice: null,
  sortBy: 'name-asc'
})

const products = computed(() => mockProducts)

const { filteredProducts } = useProductFilter(products, searchQuery, filterOptions)

const openCart = () => {
  isCartOpen.value = true
}

const handleSearch = (query: string) => {
  searchQuery.value = query
}

const handleFilter = (filters: FilterOptions) => {
  filterOptions.value = filters
}
</script>

