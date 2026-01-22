<script setup lang="ts">
import { computed, ref, type ComputedRef } from 'vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Card from './components/Card.vue'
import Filter from './components/Filter.vue'
import { sneakersMock } from './mocks/sneakers'
import { categoriesMock } from './mocks/categories'
import type { Category } from './types/Category'
import type { Sneaker } from './types/Sneaker'

const categories: Category[] = [{ id: 0, name: 'Todos' }, ...categoriesMock]
const activeCategory = ref(0)

const filteredSneakers: ComputedRef<Sneaker[]> = computed(() => {
  if (activeCategory.value === 0) return sneakersMock
  return sneakersMock.filter((sneaker) => sneaker.category.id === activeCategory.value)
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main>
      <Filter
        :filteredSneakers="filteredSneakers"
        :categories="categories"
        :activeCategory="activeCategory"
        @update:activeCategory="activeCategory = $event"
      />
      <div class="grow bg-black p-5 md:p-8 lg:px-20 lg:py-12">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 justify-items-center"
        >
          <Card v-for="sneaker in filteredSneakers" :key="sneaker.id" :sneaker="sneaker" />
        </div>
      </div>
      <div class="bg-[#1a1a1a] text-white" id="#about">
        <div class="p-5 py-15 md:p-8 lg:px-20 lg:py-40 flex flex-col lg:flex-row gap-5 lg:gap-8">
          <div class="flex flex-col gap-5 flex-1">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">Marca</h1>
            <p class="text-[#a0a0a0] text-sm md:text-base">
              Somos apaixonados por sneakers e por proporcionar experiências únicas aos nossos
              clientes. Desde 2018, trabalhamos com as melhores marcas do mundo para trazer até você
              os modelos mais exclusivos e desejados.
            </p>
            <p class="text-[#a0a0a0] text-sm md:text-base">
              Nossa missão é democratizar o acesso aos melhores sneakers do mercado, oferecendo
              autenticidade garantida, preços justos e um atendimento excepcional.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 sm:gap-4 text-center sm:mx-auto mt-4">
              <div class="flex-1">
                <h2 class="text-3xl md:text-4xl font-bold text-[#ff6b35]">50k+</h2>
                <p class="text-[#a0a0a0] text-xs md:text-sm mt-2">CLIENTES FELIZES</p>
              </div>
              <div class="flex-1">
                <h2 class="text-3xl md:text-4xl font-bold text-[#ff6b35]">500+</h2>
                <p class="text-[#a0a0a0] text-xs md:text-sm mt-2">MODELOS</p>
              </div>
              <div class="flex-1">
                <h2 class="text-3xl md:text-4xl font-bold text-[#ff6b35]">100%</h2>
                <p class="text-[#a0a0a0] text-xs md:text-sm mt-2">AUTÊNTICOS</p>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=1000&fit=crop"
            alt="Nossa loja"
            class="w-full lg:w-[400px] xl:w-[500px] h-64 sm:h-80 lg:h-[500px] object-cover rounded-2xl flex-shrink-0"
          />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
