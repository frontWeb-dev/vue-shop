<template>
  <div class="list">
    <div v-if="$route.params.category === undefined">
      <div>{{ category }}</div>
      <div v-for="product in filterData.slice(0, 4)" :key="product.id">
        {{ product.title }}
      </div>
    </div>
    <div v-if="$route.params.category !== undefined">
      <div>{{ category }}</div>
      <div v-for="product in filterData" :key="product.id">{{ product.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core';
import { menu } from '../mocks/menu';
import { useApiStore } from '../stores/api';
import { itemsProps } from '../utils/types';

const store = useApiStore();
const props = defineProps<{
  category: string;
}>();
let filterData: itemsProps[] = [];

onMounted(async () => {
  store.fetchProducts();
  const products = store.getProducts();
  const map = menu.filter((a) => a.category === props.category)[0].apiCategory;
  filterData = products.filter((a: any) => a.category.match(map));
});

console.log(filterData);
</script>

<style></style>
