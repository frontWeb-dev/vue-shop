<template>
  <div class="dark:main-bg dark:main-text main">
    <Suspense>
      <Cart />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import Cart from '../components/Cart.vue';
export default {
  name: 'CartPage',
  components: { Cart },
};
</script>

<style></style>
