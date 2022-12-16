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
    <div class="img">
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
.img {
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  overflow: hidden;
}

img {
  max-width: 50%;
  max-height: 50%;
}
.info {
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 20px;
  padding: 1.5rem;
  color: #000;
  font-weight: 600;
  background-color: #eee;
}
</style>
