<template>
  <Suspense>
    <ItemList :category="category" />
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
<script lang="ts">
import ItemList from '../components/ItemList.vue';
import { menu } from '../mocks/menu';
export default {
  data() {
    return {
      menus: menu,
      products: [],
      category: menu.filter((a) => a.url === this.$route.params.category)[0].category,
    };
  },

  methode: {},
  components: { ItemList },
};
</script>
<style></style>
