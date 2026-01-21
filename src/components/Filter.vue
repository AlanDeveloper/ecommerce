<script setup lang="ts">
import { categoriesMock } from '@/mocks/categories'
import { sneakersMock } from '@/mocks/sneakers'
import type { Category } from '@/types/Category'
import { ref } from 'vue'

const categories: Category[] = [{ id: 0, name: 'Todos' }, ...categoriesMock]

const activeCategory = ref(0)
const counter: number = sneakersMock.length
</script>

<template>
  <div
    class="flex flex-row items-center justify-between bg-[#1a1a1a] text-white p-5 lg:px-20 lg:py-12"
  >
    <div>
      <h1>Todos os produtos</h1>
      <p class="text-[#a0a0a0]">
        {{ counter != 1 ? `${counter} produtos disponíveis` : `1 produto disponível` }}
      </p>
    </div>
    <div class="flex gap-4 overflow-x-auto pb-2">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="activeCategory = category.id"
        :class="[
          'text-white px-8 py-4 h-min rounded-2xl transition-colors whitespace-nowrap cursor-pointer',
          activeCategory === category.id ? 'bg-[#ff6b35]' : 'bg-[#2a2a2a] hover:bg-[#ff6b35]',
        ]"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>
