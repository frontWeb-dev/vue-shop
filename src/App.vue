<template>
  <div id="app">
    <Header />
    <router-view :category="category" />
  </div>
</template>
<script lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { menu } from './mocks/menu';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: { Header },

  setup() {
    const route = useRoute();
    const category = ref();

    watch(
      () => route.params.category,
      () => {
        if (route.params.category !== undefined) {
          category.value = menu.filter((a) => a.url === route.params.category)[0].category;
        }
      }
    );

    return { category };
  },
};
</script>
<style></style>
