<script setup lang="ts">
import type { Sneaker } from '@/types/Sneaker'

defineProps<{
  sneaker: Sneaker
}>()

const formatPrice = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
</script>

<template>
  <div
    class="group text-white bg-secondary relative rounded-lg overflow-hidden max-w-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-primary/50"
  >
    <span
      v-if="sneaker.flag"
      :style="{ backgroundColor: sneaker.flag.bg_color }"
      class="absolute left-4 top-4 px-3 py-1 rounded-md z-10 text-sm font-medium"
    >
      {{ sneaker.flag.name }}
    </span>

    <div class="overflow-hidden">
      <img
        loading="lazy"
        :src="sneaker.src"
        alt="Air Max Velocity"
        class="w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />
    </div>

    <div class="p-4">
      <p class="text-gray-400 text-sm">{{ sneaker.category.name }}</p>
      <h2 class="text-lg font-semibold">{{ sneaker.name }}</h2>
      <div class="flex gap-2 mt-2">
        <div class="w-4 h-4 rounded-full border border-gray-300 bg-white"></div>
        <div class="w-4 h-4 rounded-full bg-indigo-400"></div>
        <div class="w-4 h-4 rounded-full bg-red-400"></div>
      </div>
      <div class="flex justify-between items-center mt-4">
        <div class="flex gap-2">
          <p class="line-through text-gray-400" v-if="sneaker.originalPrice != sneaker.price">
            {{ formatPrice(sneaker.originalPrice) }}
          </p>
          <p class="font-semibold">{{ formatPrice(sneaker.price) }}</p>
        </div>
        <button
          aria-label="Adicionar ao carrinho"
          class="h-12 w-12 bg-primary rounded-md font-bold hover:bg-[#ff8555] duration-300 transition-all hover:rotate-90 cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>
