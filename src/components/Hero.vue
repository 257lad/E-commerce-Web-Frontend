<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
    <!-- Animated background elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
    </div>

    <!-- Shopping bag images -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Left side - Lady with shopping bags -->
      <div class="absolute left-0 bottom-0 w-64 sm:w-80 lg:w-96 opacity-20 sm:opacity-30 transform translate-x-[-20%] sm:translate-x-0 animate-float-left">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=800&fit=crop"
          alt="Woman shopping"
          class="w-full h-auto object-contain"
        />
      </div>
      <!-- Right side - Man with shopping bags -->
      <div class="absolute right-0 bottom-0 w-64 sm:w-80 lg:w-96 opacity-20 sm:opacity-30 transform translate-x-[20%] sm:translate-x-0 animate-float-right">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
          alt="Man shopping"
          class="w-full h-auto object-contain"
        />
      </div>
      <!-- Center - Kid with shopping bag -->
      <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-48 sm:w-64 lg:w-80 opacity-15 sm:opacity-25 animate-float-center">
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=800&fit=crop"
          alt="Child shopping"
          class="w-full h-auto object-contain"
        />
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
      <div class="text-center relative z-10">
        <!-- Welcome Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
          <Sparkles :size="16" class="animate-spin-slow" />
          <span class="text-sm font-medium">Welcome to VibeShop</span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up">
          <span class="block">Discover Your</span>
          <span class="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent animate-gradient">
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
            class="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg animate-bounce-subtle"
          >
            Shop Now
          </button>
          <button
            class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-lg"
          >
            Learn More
          </button>
        </div>

        <!-- Stats with CountUp -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 sm:mt-20 max-w-3xl mx-auto">
          <div class="text-center transform hover:scale-110 transition-transform duration-300">
            <div class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              <CountUp
                :end-val="1000"
                :duration="2.5"
                suffix="+"
              />
            </div>
            <div class="text-white/80 text-sm sm:text-base flex items-center justify-center gap-2">
              <Users :size="18" />
              Happy Customers
            </div>
          </div>
          <div class="text-center transform hover:scale-110 transition-transform duration-300">
            <div class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-300 to-white bg-clip-text text-transparent">
              <CountUp
                :end-val="500"
                :duration="2.5"
                suffix="+"
              />
            </div>
            <div class="text-white/80 text-sm sm:text-base flex items-center justify-center gap-2">
              <Package :size="18" />
              Products
            </div>
          </div>
          <div class="text-center transform hover:scale-110 transition-transform duration-300">
            <div class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              24/7
            </div>
            <div class="text-white/80 text-sm sm:text-base flex items-center justify-center gap-2">
              <Headphones :size="18" />
              Support
            </div>
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
import { onMounted, ref } from 'vue'
import { Sparkles, ChevronDown, Users, Package, Headphones } from 'lucide-vue-next'
import CountUp from 'vue-countup-v3'

const isVisible = ref(false)

const scrollToProducts = () => {
  const productsSection = document.getElementById('products')
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Trigger countup animation when component is mounted
  isVisible.value = true
})
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

@keyframes float-left {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes float-right {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(-10px);
  }
}

@keyframes float-center {
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-15px) translateX(-50%);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
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

.animate-float-left {
  animation: float-left 6s ease-in-out infinite;
}

.animate-float-right {
  animation: float-right 6s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-center {
  animation: float-center 5s ease-in-out infinite;
  animation-delay: 0.5s;
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

.delay-1000 {
  animation-delay: 1s;
}

.delay-500 {
  animation-delay: 0.5s;
}
</style>
