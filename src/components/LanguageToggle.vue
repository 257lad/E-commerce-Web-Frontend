<template>
  <button
    @click="toggleLanguage"
    class="relative p-2 sm:p-3 hover:bg-gray-100 rounded-md transition-colors flex items-center gap-1"
    :aria-label="language === 'en' ? t.switchToFrench : t.switchToEnglish"
  >
    <Languages :size="20" class="sm:w-6 sm:h-6 text-gray-600" />
    <Transition name="lang-text" mode="out-in">
      <span 
        :key="language"
        class="text-xs sm:text-sm font-semibold text-gray-700 uppercase"
      >
        {{ language }}
      </span>
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { Languages } from 'lucide-vue-next'
import { useLanguage } from '@/composables/useLanguage'

const { language, t, toggleLanguage } = useLanguage()
</script>

<style scoped>
.lang-text-enter-active,
.lang-text-leave-active {
  transition: all 0.2s ease;
}

.lang-text-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.lang-text-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
