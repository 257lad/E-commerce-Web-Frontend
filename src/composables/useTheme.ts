import { ref } from 'vue'

type Theme = 'light' | 'dark'

// Shared state
const theme = ref<Theme>('light')
let isInitialized = false

// Apply theme to document
function applyTheme(newTheme: Theme) {
  const root = document.documentElement
  
  if (newTheme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  
  localStorage.setItem('theme', newTheme)
}

export function useTheme() {
  // Initialize only once
  if (!isInitialized) {
    isInitialized = true
    
    // Get saved theme or system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      theme.value = savedTheme
    } else if (prefersDark) {
      theme.value = 'dark'
    }
    
    // Apply immediately
    applyTheme(theme.value)
  }

  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light'
    theme.value = newTheme
    applyTheme(newTheme)
  }

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    applyTheme(newTheme)
  }

  return {
    theme,
    toggleTheme,
    setTheme
  }
}
