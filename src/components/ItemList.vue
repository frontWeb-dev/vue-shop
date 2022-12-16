<template>
  <div class="item_List pt-16">
    <section
      v-if="$route.params.category === undefined"
      class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto"
    >
      <h2 class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{{ category }}</h2>
      <div class="grid gap-6 xmd:item_list md:grid-cols-2 lg:grid-cols-4">
        <ItemCard v-for="product in filterData.slice(0, 4)" :key="product.id" :product="product" />
      </div>
    </section>
    <section
      v-if="$route.params.category !== undefined"
      class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
    >
      <div>홈 > {{ category }}</div>
      <h2 class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{{ category }}</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ItemCard v-for="product in filterData" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { onMounted, watch } from '@vue/runtime-core';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

import { menu } from '../mocks/menu';
import { useApiStore } from '../stores/api';
import ItemCard from './ItemCard.vue';

export default {
  props: {
    category: String,
  },
  components: { ItemCard },

  setup(props) {
    const store = useApiStore();
    const filterData = ref();
    const map = ref();
    const { products } = storeToRefs(store);

    onMounted(async () => {
      await store.fetchApi();
      map.value = menu.filter((a) => a.category === props.category)[0].apiCategory;
      filterData.value = store.filterDatas(map.value);
      return { products, filterData };
    });

    watch(
      () => props,
      () => {
        map.value = menu.filter((a) => a.category === props.category)[0].apiCategory;
        filterData.value = store.filterDatas(map.value);
        return { filterData };
      },
      { deep: true, immediate: true }
    );

    return { map, filterData };
  },
};
</script>

<style></style>
