import type { Sneaker } from '@/types/Sneaker'

export const sneakersMock: Sneaker[] = [
  {
    id: 1,
    name: 'Air Max Velocity',
    originalPrice: 1229.0,
    price: 899.0,
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    category: {
      id: 1,
      name: 'RUNNING',
    },
    flag: {
      id: 1,
      name: 'Novo',
      bg_color: '#00d4ff',
    },
  },
  {
    id: 2,
    name: 'Nike Zoom Fly',
    originalPrice: 945.0,
    price: 699.0,
    src: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
    category: {
      id: 1,
      name: 'RUNNING',
    },
    flag: {
      id: 3,
      name: '-25%',
      bg_color: '#ff3838',
    },
  },
  {
    id: 3,
    name: 'New Balance 574',
    originalPrice: 549.0,
    price: 549.0,
    src: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop',
    category: {
      id: 2,
      name: 'CASUAL',
    },
  },
  {
    id: 4,
    name: 'Puma RS-X',
    originalPrice: 649.0,
    price: 649.0,
    src: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop',
    category: {
      id: 1,
      name: 'RUNNING',
    },
    flag: {
      id: 1,
      name: 'Novo',
      bg_color: '#00d4ff',
    },
  },
  {
    id: 5,
    name: 'Nike Court Borough',
    originalPrice: 899.0,
    price: 749.0,
    src: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=600&fit=crop&crop=left',
    category: {
      id: 1,
      name: 'RUNNING',
    },
    flag: {
      id: 3,
      name: '-15%',
      bg_color: '#ff3838',
    },
  },
  {
    id: 6,
    name: 'Puma Rickie',
    originalPrice: 799.0,
    price: 699.0,
    src: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop&crop=left',
    category: {
      id: 2,
      name: 'CASUAL',
    },
  },
]
