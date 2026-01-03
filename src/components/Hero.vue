<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
    <!-- Animated background elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
      <div class="text-center">
        <!-- Welcome Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
          <Sparkles :size="16" />
          <span class="text-sm font-medium">Welcome to VibeShop</span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up">
          <span class="block">Discover Your</span>
          <span class="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Perfect Style
          </span>
        </h1>

        <!-- Subheading -->
        <p class="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 px-4 animate-slide-up-delay">
          Shop the latest trends and find everything you need in one place. 
          Quality products, amazing prices, and exceptional service.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
          <button
            @click="scrollToProducts"
            class="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Shop Now
          </button>
          <button
            class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-lg"
          >
            Learn More
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 sm:mt-20 max-w-3xl mx-auto">
          <div class="text-center">
            <div class="text-3xl sm:text-4xl font-bold mb-2">1000+</div>
            <div class="text-white/80 text-sm sm:text-base">Happy Customers</div>
          </div>
          <div class="text-center">
            <div class="text-3xl sm:text-4xl font-bold mb-2">500+</div>
            <div class="text-white/80 text-sm sm:text-base">Products</div>
          </div>
          <div class="text-center">
            <div class="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
            <div class="text-white/80 text-sm sm:text-base">Support</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown :size="24" class="text-white/70" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Sparkles, ChevronDown } from 'lucide-vue-next'

const scrollToProducts = () => {
  const productsSection = document.getElementById('products')
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-up {
  animation: slide-up 1s ease-out;
}

.animate-slide-up-delay {
  animation: slide-up 1.2s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
}

.animate-fade-in-delay {
  animation: fade-in 1s ease-out;
  animation-delay: 0.4s;
  animation-fill-mode: both;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>


