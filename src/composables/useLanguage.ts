import { ref, computed } from 'vue'

export type Language = 'en' | 'fr'

const translations = {
  en: {
    // Header
    appName: 'VibeShop',
    openCart: 'Open shopping cart',
    
    // Hero
    welcomeBadge: 'Welcome to VibeShop',
    heroTitle1: 'Discover Your',
    heroTitle2: 'Perfect Style',
    heroSubtitle: 'Shop the latest trends and find everything you need in one place. Quality products, amazing prices, and exceptional service.',
    shopNow: 'Shop Now',
    learnMore: 'Learn More',
    happyCustomers: 'Happy Customers',
    products: 'Products',
    support: 'Support',
    
    // Products Section
    featuredProducts: 'Featured Products',
    showing: 'Showing',
    product: 'product',
    productsPlural: 'products',
    
    // Search & Filter
    searchPlaceholder: 'Search products...',
    category: 'Category',
    allCategories: 'All',
    priceRange: 'Price Range',
    minPrice: 'Min',
    maxPrice: 'Max',
    sortBy: 'Sort By',
    nameAZ: 'Name (A-Z)',
    nameZA: 'Name (Z-A)',
    priceLowHigh: 'Price (Low to High)',
    priceHighLow: 'Price (High to Low)',
    clearFilters: 'Clear Filters',
    
    // Product Card
    addToCart: 'Add to Cart',
    
    // Cart
    cart: 'Cart',
    yourCart: 'Your Cart',
    emptyCart: 'Your cart is empty',
    emptyCartMessage: 'Add some products to get started!',
    continueShopping: 'Continue Shopping',
    subtotal: 'Subtotal',
    checkout: 'Checkout',
    remove: 'Remove',
    
    // Footer
    footerDescription: 'Your one-stop destination for quality products and exceptional shopping experience.',
    quickLinks: 'Quick Links',
    home: 'Home',
    aboutUs: 'About Us',
    contact: 'Contact',
    customerService: 'Customer Service',
    shippingInfo: 'Shipping Info',
    returns: 'Returns',
    faq: 'FAQ',
    newsletter: 'Newsletter',
    newsletterDescription: 'Subscribe to get special offers and updates.',
    yourEmail: 'Your email',
    subscribe: 'Subscribe',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    
    // Language
    switchToFrench: 'Switch to French',
    switchToEnglish: 'Switch to English',
  },
  fr: {
    // Header
    appName: 'VibeShop',
    openCart: 'Ouvrir le panier',
    
    // Hero
    welcomeBadge: 'Bienvenue sur VibeShop',
    heroTitle1: 'Découvrez Votre',
    heroTitle2: 'Style Parfait',
    heroSubtitle: 'Découvrez les dernières tendances et trouvez tout ce dont vous avez besoin en un seul endroit. Produits de qualité, prix incroyables et service exceptionnel.',
    shopNow: 'Acheter Maintenant',
    learnMore: 'En Savoir Plus',
    happyCustomers: 'Clients Satisfaits',
    products: 'Produits',
    support: 'Assistance',
    
    // Products Section
    featuredProducts: 'Produits en Vedette',
    showing: 'Affichage de',
    product: 'produit',
    productsPlural: 'produits',
    
    // Search & Filter
    searchPlaceholder: 'Rechercher des produits...',
    category: 'Catégorie',
    allCategories: 'Toutes',
    priceRange: 'Fourchette de Prix',
    minPrice: 'Min',
    maxPrice: 'Max',
    sortBy: 'Trier Par',
    nameAZ: 'Nom (A-Z)',
    nameZA: 'Nom (Z-A)',
    priceLowHigh: 'Prix (Croissant)',
    priceHighLow: 'Prix (Décroissant)',
    clearFilters: 'Effacer les Filtres',
    
    // Product Card
    addToCart: 'Ajouter au Panier',
    
    // Cart
    cart: 'Panier',
    yourCart: 'Votre Panier',
    emptyCart: 'Votre panier est vide',
    emptyCartMessage: 'Ajoutez des produits pour commencer !',
    continueShopping: 'Continuer les Achats',
    subtotal: 'Sous-total',
    checkout: 'Commander',
    remove: 'Supprimer',
    
    // Footer
    footerDescription: 'Votre destination unique pour des produits de qualité et une expérience d\'achat exceptionnelle.',
    quickLinks: 'Liens Rapides',
    home: 'Accueil',
    aboutUs: 'À Propos',
    contact: 'Contact',
    customerService: 'Service Client',
    shippingInfo: 'Livraison',
    returns: 'Retours',
    faq: 'FAQ',
    newsletter: 'Newsletter',
    newsletterDescription: 'Abonnez-vous pour recevoir des offres spéciales et des mises à jour.',
    yourEmail: 'Votre email',
    subscribe: 'S\'abonner',
    allRightsReserved: 'Tous droits réservés.',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions d\'Utilisation',
    
    // Language
    switchToFrench: 'Passer en français',
    switchToEnglish: 'Passer en anglais',
  }
}

const currentLanguage = ref<Language>(
  (localStorage.getItem('language') as Language) || 'en'
)

export function useLanguage() {
  const t = computed(() => translations[currentLanguage.value])
  
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'en' ? 'fr' : 'en'
    localStorage.setItem('language', currentLanguage.value)
  }
  
  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
  }
  
  return {
    language: currentLanguage,
    t,
    toggleLanguage,
    setLanguage
  }
}

