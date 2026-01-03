<template>
  <button
    @click="toggleTheme"
    class="relative p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Transition name="theme-icon" mode="out-in">
      <Sun 
        v-if="theme === 'dark'" 
        :size="20" 
        class="sm:w-6 sm:h-6 text-yellow-400" 
      />
      <Moon 
        v-else 
        :size="20" 
        class="sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" 
      />
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: all 0.2s ease;
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}
</style>

