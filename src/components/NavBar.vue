<template>
  <nav class="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700 sticky top-0 z-40 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">VibeShop</h1>
        </div>

        <!-- Navigation Links (Desktop) -->
        <div class="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#products"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            @click.prevent="scrollToSection('products')"
          >
            Products
          </a>
          <a
            href="#"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            About
          </a>
          <a
            href="#"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            Contact
          </a>
        </div>

        <!-- Right Side: Cart and Profile -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Theme and Language Toggles -->
          <div class="hidden sm:flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <!-- Cart Button -->
          <button
            @click="$emit('open-cart')"
            class="relative p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            aria-label="Open shopping cart"
          >
            <ShoppingCart :size="20" class="sm:w-6 sm:h-6" />
            <span
              v-if="cartCount > 0"
              class="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartCount }}
            </span>
          </button>

          <!-- Profile Dropdown -->
          <div class="relative" ref="dropdownRef">
            <button
              @click="toggleDropdown"
              class="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="User menu"
            >
              <img
                :src="user.avatar"
                :alt="user.name"
                class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              />
              <div class="hidden sm:block text-left">
                <div class="text-sm font-semibold text-gray-900 dark:text-white">{{ user.name }}</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">{{ user.email }}</div>
              </div>
              <ChevronDown
                :size="16"
                class="hidden sm:block text-gray-500 transform transition-transform"
                :class="{ 'rotate-180': isDropdownOpen }"
              />
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="isDropdownOpen"
              class="absolute right-0 mt-2 w-56 sm:w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
            >
              <div class="px-4 py-3 border-b border-gray-200">
                <div class="flex items-center gap-3">
                  <img
                    :src="user.avatar"
                    :alt="user.name"
                    class="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div class="font-semibold text-gray-900">{{ user.name }}</div>
                    <div class="text-sm text-gray-500">{{ user.email }}</div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                @click.prevent="closeDropdown"
              >
                <User :size="18" />
                My Profile
              </a>
              <a
                href="#"
                class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                @click.prevent="closeDropdown"
              >
                <ShoppingBag :size="18" />
                My Orders
              </a>
              <a
                href="#"
                class="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                @click.prevent="closeDropdown"
              >
                <Settings :size="18" />
                Settings
              </a>
              <div class="border-t border-gray-200 mt-2 pt-2">
                <a
                  href="#"
                  class="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  @click.prevent="closeDropdown"
                >
                  <LogOut :size="18" />
                  Sign Out
                </a>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Menu"
          >
            <Menu v-if="!isMobileMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-gray-200 py-4 space-y-2"
      >
        <a
          href="#products"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          @click.prevent="scrollToSection('products'); closeMobileMenu()"
        >
          Products
        </a>
        <a
          href="#"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          @click="closeMobileMenu"
        >
          About
        </a>
        <a
          href="#"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          @click="closeMobileMenu"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ShoppingCart, ChevronDown, User, ShoppingBag, Settings, LogOut, Menu, X } from 'lucide-vue-next'
import type { User as UserType } from '@/data/user'
import ThemeToggle from './ThemeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'

interface Props {
  user: UserType
  cartCount: number
}

defineProps<Props>()

const emit = defineEmits<{
  'open-cart': []
}>()

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

