<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useCartStore } from '@/stores/CartStore'
import { formatPrice } from '@/utils/formatPrice'

const cartStore = useCartStore()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header :cartCount="cartStore.cartCount" />
    <main>
      <section class="bg-black text-white p-6 md:p-10 lg:px-20 lg:py-16 min-h-screen">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            Meu carrinho
            <span
              v-if="cartStore.cartCount > 0"
              class="text-sm md:text-base text-secondary-text font-medium"
            >
              ({{ cartStore.cartCount }} {{ cartStore.cartCount === 1 ? 'item' : 'itens' }})
            </span>
          </h1>

          <div v-if="cartStore.items.length === 0" class="text-center py-20 md:py-32">
            <div class="text-8xl md:text-9xl mb-6 text-secondary-text">🛒</div>
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Seu carrinho está vazio</h2>
            <p class="text-secondary-text mb-8 text-base md:text-lg">
              Adicione alguns sneakers incríveis para começar!
            </p>
            <router-link
              to="/"
              class="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full text-lg transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/50 active:scale-95"
            >
              Explorar Produtos
            </router-link>
          </div>

          <div v-else class="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div class="lg:col-span-2 space-y-6">
              <div
                v-for="item in cartStore.items"
                :key="`${item.id}-${item.selectedSize}`"
                class="bg-secondary rounded-xl p-4 md:p-6 flex flex-col sm:flex-row gap-4 md:gap-6 transition-all duration-300"
              >
                <div
                  class="w-full sm:w-32 md:w-40 h-32 md:h-40 flex-shrink-0 bg-black rounded-lg overflow-hidden"
                >
                  <img :src="item.src" :alt="item.name" class="w-full h-full object-cover" />
                </div>

                <div class="flex-1 flex flex-col justify-between">
                  <div>
                    <p class="text-xs md:text-sm text-secondary-text uppercase tracking-wider mb-1">
                      {{ item.category.name }}
                    </p>
                    <h3 class="text-lg md:text-xl font-bold mb-2">{{ item.name }}</h3>
                    <p class="text-sm text-secondary-text mb-3">
                      Tamanho: <span class="text-white font-medium">{{ item.selectedSize }}</span>
                    </p>

                    <div class="flex items-center gap-3 mb-3">
                      <span class="text-sm text-secondary-text">Quantidade:</span>
                      <div class="flex items-center gap-2 bg-black rounded-lg p-1">
                        <button
                          @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                          class="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors duration-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                          :disabled="item.quantity <= 1"
                        >
                          −
                        </button>
                        <span class="w-8 text-center font-medium">{{ item.quantity }}</span>
                        <button
                          @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                          class="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors duration-300 font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-end justify-between">
                    <div>
                      <p
                        class="text-xs text-secondary-text line-through"
                        v-if="item.originalPrice !== item.price"
                      >
                        {{ formatPrice(item.originalPrice * item.quantity) }}
                      </p>
                      <p class="text-xl md:text-2xl font-bold text-primary">
                        {{ formatPrice(item.price * item.quantity) }}
                      </p>
                    </div>
                    <button
                      @click="cartStore.removeFromCart(item.id)"
                      class="text-sm text-secondary-text hover:text-red-500 transition-colors duration-300 underline cursor-pointer"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-1">
              <div class="bg-secondary rounded-xl p-6 md:p-8 lg:sticky lg:top-32">
                <h2 class="text-2xl md:text-3xl font-bold mb-6">Resumo do Pedido</h2>

                <div class="space-y-4 mb-6 pb-6 border-b border-white/10">
                  <div class="flex justify-between text-base">
                    <span class="text-secondary-text">Subtotal</span>
                    <span class="font-medium">{{ formatPrice(cartStore.subtotal) }}</span>
                  </div>
                  <div class="flex justify-between text-base">
                    <span class="text-secondary-text">Frete</span>
                    <span
                      class="font-medium"
                      :class="cartStore.shipping === 0 ? 'text-green-500' : ''"
                    >
                      {{ cartStore.shipping === 0 ? 'GRÁTIS' : formatPrice(cartStore.shipping) }}
                    </span>
                  </div>
                  <p v-if="cartStore.shipping > 0" class="text-xs text-secondary-text">
                    Frete grátis para compras acima de R$ 500,00
                  </p>
                </div>

                <div class="flex justify-between text-xl md:text-2xl font-bold mb-8">
                  <span>Total</span>
                  <span class="text-primary">{{ formatPrice(cartStore.total) }}</span>
                </div>

                <button
                  class="w-full px-8 py-4 bg-primary text-white font-bold rounded-full text-lg transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/50 active:scale-95 mb-4 cursor-pointer"
                >
                  Finalizar Compra
                </button>

                <router-link
                  to="/"
                  class="block text-center text-sm text-secondary-text hover:text-primary transition-colors duration-300"
                >
                  Continuar comprando
                </router-link>

                <div class="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <div class="flex items-center gap-3 text-sm">
                    <span class="text-2xl">🔒</span>
                    <span class="text-secondary-text">Compra 100% segura</span>
                  </div>
                  <div class="flex items-center gap-3 text-sm">
                    <span class="text-2xl">✓</span>
                    <span class="text-secondary-text">Autenticidade garantida</span>
                  </div>
                  <div class="flex items-center gap-3 text-sm">
                    <span class="text-2xl">📦</span>
                    <span class="text-secondary-text">Entrega para todo Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
