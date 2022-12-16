<template>
  <router-link
    class="item_card border-gray-200 dark:border-gray-800"
    :to="{
      name: 'product',
      params: {
        id: `${product.id}`,
      },
    }"
  >
    <div class="flex items-center justify-center bg-white overflow-hidden h-80">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="flex flex-auto flex-col gap-2 p-4 text-base bg-gray-100 dark:bg-gray-700">
      <p class="mb-1 font-bold">{{ product.title }}</p>
      <p>$ {{ product.price }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
img {
  max-width: 50%;
  max-height: 50%;
}
</style>
