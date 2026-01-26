<script setup lang="ts">
import type { Category } from '@/types/Category'
import type { Sneaker } from '@/types/Sneaker'

defineProps<{
  filteredSneakers: Sneaker[]
  categories: Category[]
  activeCategory: number
}>()

const emit = defineEmits<{
  'update:activeCategory': [value: number]
}>()
</script>

<template>
  <div
    id="products"
    class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 bg-secondary text-white p-5 md:p-8 lg:px-20 lg:py-12"
  >
    <div>
      <h1 class="text-xl lg:text-2xl font-bold">Todos os produtos</h1>
      <p class="text-secondary-text text-sm lg:text-base">
        {{
          filteredSneakers.length != 1
            ? `${filteredSneakers.length} produtos disponíveis`
            : `1 produto disponível`
        }}
      </p>
    </div>
    <div class="flex gap-3 lg:gap-4 overflow-x-auto pb-2 w-full lg:w-auto">
      <button
        @click="emit('update:activeCategory', 0)"
        :class="[
          'text-white px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base h-min rounded-2xl transition-colors whitespace-nowrap cursor-pointer',
          activeCategory === 0 ? 'bg-primary' : 'bg-[#2a2a2a] hover:bg-primary',
        ]"
      >
        Todos
      </button>
      <button
        v-for="category in categories"
        :key="category.id"
        @click="emit('update:activeCategory', category.id)"
        :class="[
          'text-white px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base h-min rounded-2xl transition-colors whitespace-nowrap cursor-pointer',
          activeCategory === category.id ? 'bg-primary' : 'bg-[#2a2a2a] hover:bg-primary',
        ]"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>
