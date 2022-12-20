<template>
  <div id="app">
    <Header />
    <router-view :category="category" />
    <Footer />
  </div>
</template>
<script lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { menu } from './mocks/menu';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: { Header, Footer },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const category = ref();

    watch(
      () => route.params.category,
      () => {
        if (route.params.category !== undefined) {
          const filter = menu.filter((a) => a.url === route.params.category).length;
          if (filter === 0) {
            router.push('/404');
          } else {
            category.value = menu.filter((a) => a.url === route.params.category)[0].category;
          }
        }
      }
    );

    return { category };
  },
};
</script>
<style></style>
