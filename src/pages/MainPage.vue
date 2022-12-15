<template>
  <Banner />
  <Suspense>
    <ItemList v-for="menu in menus" :key="menu.url" :category="menu.category" />
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
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
