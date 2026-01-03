import { computed, type Ref } from 'vue'
import type { Product } from '@/data/mock_data'
import type { FilterOptions } from '@/components/FilterPanel'

export function useProductFilter(
  products: Ref<Product[]>,
  searchQuery: Ref<string>,
  filterOptions: Ref<FilterOptions>
) {
  const filteredProducts = computed(() => {
    let result = [...products.value]

    // Apply search filter
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase().trim()
      result = result.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      )
    }

    // Apply category filter
    if (filterOptions.value.category && filterOptions.value.category !== 'All') {
      result = result.filter(product => product.category === filterOptions.value.category)
    }

    // Apply price range filter
    if (filterOptions.value.minPrice !== null) {
      result = result.filter(product => product.price >= filterOptions.value.minPrice!)
    }
    if (filterOptions.value.maxPrice !== null) {
      result = result.filter(product => product.price <= filterOptions.value.maxPrice!)
    }

    // Apply sorting
    const [sortField, sortOrder] = filterOptions.value.sortBy.split('-')
    result.sort((a, b) => {
      let aValue: string | number
      let bValue: string | number

      if (sortField === 'name') {
        aValue = a.name.toLowerCase()
        bValue = b.name.toLowerCase()
      } else {
        aValue = a.price
        bValue = b.price
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0
      }
    })

    return result
  })

  return {
    filteredProducts
  }
}


