<template>
  <div class="pt-16 main dark:main-bg dark:main-text">
    <Suspense>
      <ItemList :category="category" />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import ItemList from '../components/ItemList.vue';

export default {
  props: {
    category: String,
  },

  components: { ItemList },
};
</script>
<style></style>
