import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { Sneaker } from '@/types/Sneaker'
import type { CartItem } from '@/types/CartItem'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>(JSON.parse(sessionStorage.getItem('cart') || '[]'))

  watch(
    items,
    (newItems) => {
      sessionStorage.setItem('cart', JSON.stringify(newItems))
    },
    { deep: true },
  )
  const addToCart = (sneaker: Sneaker, size: number = 42) => {
    const existingItem = items.value.find(
      (item) => item.id === sneaker.id && item.selectedSize === size,
    )

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({
        ...sneaker,
        quantity: 1,
        selectedSize: size,
      })
    }
  }

  const removeFromCart = (itemId: number) => {
    items.value = items.value.filter((item) => item.id !== itemId)
  }

  const updateQuantity = (itemId: number, quantity: number) => {
    const item = items.value.find((item) => item.id === itemId)
    if (item && quantity > 0) {
      item.quantity = quantity
    } else if (item && quantity <= 0) {
      removeFromCart(itemId)
    }
  }

  const clearCart = () => {
    items.value = []
  }

  const cartCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const subtotal = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  const shipping = computed(() => {
    return subtotal.value > 500 ? 0 : 29.9
  })

  const total = computed(() => {
    return subtotal.value + shipping.value
  })

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    subtotal,
    shipping,
    total,
  }
})
