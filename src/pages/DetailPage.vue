<template>
  <div class="pt-16 dark:main-bg dark:main-text main">
    <Suspense>
      <ItemDetail />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import ItemDetail from '../components/ItemDetail.vue';
export default {
  components: { ItemDetail },
};
</script>
<style></style>
