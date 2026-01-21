<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Card from './components/Card.vue'
import Filter from './components/Filter.vue'
import { sneakersMock } from './mocks/sneakers'
import type { Sneaker } from './types/Sneaker'

const sneakers = ref<Sneaker[]>([])
onMounted(() => {
  sneakers.value = sneakersMock
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main>
      <Filter />
      <div class="grow bg-black p-5 md:p-8 lg:px-20 lg:py-12">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 justify-items-center"
        >
          <Card v-for="sneaker in sneakers" :key="sneaker.id" :sneaker="sneaker" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
