<template>
  <div class="dark:main-bg dark:main-text">
    <Banner />
    <Suspense>
      <div class="mt-10 pb-20">
        <ItemList v-for="menu in menus" :key="menu.url" :category="menu.category" />
      </div>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import Banner from '../components/Banner.vue';
import ItemList from '../components/ItemList.vue';
import { menu } from '../mocks/menu';

export default {
  name: 'MainPage',
  data() {
    return {
      menus: menu,
      products: [],
    };
  },

  methode: {},
  components: { Banner, ItemList },
};
</script>

<style></style>
