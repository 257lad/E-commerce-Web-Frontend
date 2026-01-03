<template>
  <section class="bg-gradient-to-b from-gray-50 to-white">
    <!-- Main Hero Banner -->
    <div class="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-red-500">
      <!-- Decorative elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 items-center py-12 sm:py-16 lg:py-20">
          <!-- Left Content -->
          <div class="text-white space-y-6 text-center lg:text-left">
            <!-- Flash Sale Badge -->
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-gray-900 rounded-full font-bold text-sm animate-pulse-glow">
              <Zap :size="16" class="fill-current" />
              <span>FLASH SALE</span>
              <span class="bg-gray-900 text-yellow-400 px-2 py-0.5 rounded text-xs ml-1">-70%</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              <span class="block">Super Deals</span>
              <span class="block text-yellow-300">New Year Sale!</span>
            </h1>

            <!-- Countdown Timer -->
            <div class="flex items-center justify-center lg:justify-start gap-3">
              <span class="text-white/80 text-sm font-medium">Ends in:</span>
              <div class="flex gap-2">
                <div class="bg-gray-900/80 backdrop-blur px-3 py-2 rounded-lg text-center min-w-[50px]">
                  <div class="text-xl font-bold text-yellow-400">{{ countdown.hours }}</div>
                  <div class="text-[10px] text-white/60 uppercase">Hours</div>
                </div>
                <span class="text-2xl font-bold text-yellow-400">:</span>
                <div class="bg-gray-900/80 backdrop-blur px-3 py-2 rounded-lg text-center min-w-[50px]">
                  <div class="text-xl font-bold text-yellow-400">{{ countdown.minutes }}</div>
                  <div class="text-[10px] text-white/60 uppercase">Min</div>
                </div>
                <span class="text-2xl font-bold text-yellow-400">:</span>
                <div class="bg-gray-900/80 backdrop-blur px-3 py-2 rounded-lg text-center min-w-[50px]">
                  <div class="text-xl font-bold text-yellow-400">{{ countdown.seconds }}</div>
                  <div class="text-[10px] text-white/60 uppercase">Sec</div>
                </div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                @click="scrollToProducts"
                class="group px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag :size="20" />
                Shop Now
                <ArrowRight :size="18" class="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-lg"
              >
                View All Deals
              </button>
            </div>
          </div>

          <!-- Right Content - Featured Products Preview -->
          <div class="hidden lg:block relative">
            <div class="grid grid-cols-2 gap-4">
              <!-- Product Card 1 -->
              <div class="bg-white rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-float-1">
                <div class="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-50%</div>
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" 
                  alt="Smart Watch"
                  class="w-full h-32 object-cover rounded-xl mb-3"
                />
                <p class="text-gray-800 font-semibold text-sm truncate">Smart Watch Pro</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-red-500 font-bold">$49.99</span>
                  <span class="text-gray-400 text-sm line-through">$99.99</span>
                </div>
              </div>

              <!-- Product Card 2 -->
              <div class="bg-white rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300 mt-8 animate-float-2">
                <div class="absolute -top-2 -left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">HOT</div>
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" 
                  alt="Headphones"
                  class="w-full h-32 object-cover rounded-xl mb-3"
                />
                <p class="text-gray-800 font-semibold text-sm truncate">Wireless Headphones</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-red-500 font-bold">$79.99</span>
                  <span class="text-gray-400 text-sm line-through">$149.99</span>
                </div>
              </div>

              <!-- Product Card 3 -->
              <div class="bg-white rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-float-3">
                <div class="absolute -top-2 -left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</div>
                <img 
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop" 
                  alt="Camera"
                  class="w-full h-32 object-cover rounded-xl mb-3"
                />
                <p class="text-gray-800 font-semibold text-sm truncate">Polaroid Camera</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-red-500 font-bold">$89.99</span>
                  <span class="text-gray-400 text-sm line-through">$159.99</span>
                </div>
              </div>

              <!-- Product Card 4 -->
              <div class="bg-white rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300 mt-8 animate-float-4">
                <div class="absolute -top-2 -left-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">-30%</div>
                <img 
                  src="https://images.unsplash.com/photo-1491553895911-0055uj?w=300&h=300&fit=crop" 
                  alt="Sneakers"
                  class="w-full h-32 object-cover rounded-xl mb-3"
                />
                <p class="text-gray-800 font-semibold text-sm truncate">Running Sneakers</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-red-500 font-bold">$69.99</span>
                  <span class="text-gray-400 text-sm line-through">$99.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Category Quick Links -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="category in categories"
          :key="category.name"
          @click="scrollToProducts"
          class="group flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-1"
        >
          <div :class="[category.bgColor, 'w-14 h-14 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform']">
            <component :is="category.icon" :size="24" :class="category.iconColor" />
          </div>
          <span class="text-gray-700 font-medium text-sm text-center">{{ category.name }}</span>
          <span class="text-xs text-gray-400">{{ category.count }} items</span>
        </div>
      </div>
    </div>

    <!-- Promo Banner Strip -->
    <div class="bg-gray-900 py-4 overflow-hidden">
      <div class="flex animate-marquee whitespace-nowrap">
        <div class="flex items-center gap-8 mx-8">
          <div class="flex items-center gap-2 text-white">
            <Truck :size="20" class="text-yellow-400" />
            <span class="font-medium">Free Shipping on Orders $50+</span>
          </div>
          <div class="flex items-center gap-2 text-white">
            <Shield :size="20" class="text-green-400" />
            <span class="font-medium">Secure Payment</span>
          </div>
          <div class="flex items-center gap-2 text-white">
            <RotateCcw :size="20" class="text-blue-400" />
            <span class="font-medium">30-Day Returns</span>
          </div>
          <div class="flex items-center gap-2 text-white">
            <Headphones :size="20" class="text-purple-400" />
            <span class="font-medium">24/7 Customer Support</span>
          </div>
        </div>
        <div class="flex items-center gap-8 mx-8">
          <div class="flex items-center gap-2 text-white">
            <Truck :size="20" class="text-yellow-400" />
            <span class="font-medium">Free Shipping on Orders $50+</span>
          </div>
          <div class="flex items-center gap-2 text-white">
            <Shield :size="20" class="text-green-400" />
            <span class="font-medium">Secure Payment</span>
          </div>
          <div class="flex items-center gap-2 text-white">
            <RotateCcw :size="20" class="text-blue-400" />
            <span class="font-medium">30-Day Returns</span>
          </div>
          <div class="flex items-center gap-2 text-white">
            <Headphones :size="20" class="text-purple-400" />
            <span class="font-medium">24/7 Customer Support</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { 
  Zap, ShoppingBag, ArrowRight, Truck, Shield, RotateCcw, Headphones,
  Smartphone, Shirt, Home, Dumbbell, Sparkles, Gift
} from 'lucide-vue-next'

// Countdown timer
const countdown = ref({
  hours: '12',
  minutes: '45',
  seconds: '30'
})

let countdownInterval: number | null = null

const updateCountdown = () => {
  const now = new Date()
  const endOfDay = new Date()
  endOfDay.setHours(23, 59, 59, 999)
  
  const diff = endOfDay.getTime() - now.getTime()
  
  if (diff > 0) {
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    
    countdown.value = {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    }
  }
}

// Categories
const categories = [
  { name: 'Electronics', icon: Smartphone, bgColor: 'bg-blue-100', iconColor: 'text-blue-600', count: 234 },
  { name: 'Fashion', icon: Shirt, bgColor: 'bg-pink-100', iconColor: 'text-pink-600', count: 567 },
  { name: 'Home & Living', icon: Home, bgColor: 'bg-orange-100', iconColor: 'text-orange-600', count: 189 },
  { name: 'Sports', icon: Dumbbell, bgColor: 'bg-green-100', iconColor: 'text-green-600', count: 145 },
  { name: 'Beauty', icon: Sparkles, bgColor: 'bg-purple-100', iconColor: 'text-purple-600', count: 312 },
  { name: 'Gifts', icon: Gift, bgColor: 'bg-red-100', iconColor: 'text-red-600', count: 98 },
]

const scrollToProducts = () => {
  const productsSection = document.getElementById('products')
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  updateCountdown()
  countdownInterval = window.setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>

<style scoped>
@keyframes float-1 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes float-2 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes float-3 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes float-4 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.7); }
  50% { box-shadow: 0 0 20px 5px rgba(250, 204, 21, 0.4); }
}

.animate-float-1 {
  animation: float-1 4s ease-in-out infinite;
}

.animate-float-2 {
  animation: float-2 5s ease-in-out infinite;
  animation-delay: 0.5s;
}

.animate-float-3 {
  animation: float-3 4.5s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-4 {
  animation: float-4 5.5s ease-in-out infinite;
  animation-delay: 1.5s;
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
</style>
