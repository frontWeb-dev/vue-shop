<template>
  <Suspense>
    <ItemDetail />
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
<script lang="ts">
import ItemDetail from '../components/ItemDetail.vue';
export default {
  components: { ItemDetail },
};
</script>
<style></style>
