export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    category: 'Audio'
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    description: 'Feature-rich smartwatch with fitness tracking and heart rate monitoring.',
    category: 'Wearables'
  },
  {
    id: '3',
    name: 'Laptop Stand',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    description: 'Ergonomic aluminum laptop stand for better posture and workspace organization.',
    category: 'Accessories'
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    description: 'RGB mechanical keyboard with Cherry MX switches for the ultimate typing experience.',
    category: 'Accessories'
  },
  {
    id: '5',
    name: 'USB-C Hub',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop',
    description: 'Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader support.',
    category: 'Accessories'
  },
  {
    id: '6',
    name: 'Wireless Mouse',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
    category: 'Accessories'
  }
]

export const categories = ['All', 'Audio', 'Wearables', 'Accessories']

