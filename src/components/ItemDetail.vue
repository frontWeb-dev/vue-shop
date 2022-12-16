<template>
  <div class="item_detail pt-16" v-for="item in data" :key="item.id">
    <section class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div class="py-2">
        {{ menu.filter((a) => item.category.match(a.apiCategory))[0].category }} >
        {{ item.title }}
      </div>
      <div class="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
        <div class="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
          <img class="object-contain w-full h-72" :src="item.image" />
        </div>
        <div class="flex flex-col flex-auto p-8 gap-2 px-1 lg:px-12">
          <h2 class="flex items-center gap-2 text-xl font-bold">
            {{ item.title }} <span class="badge badge-accent ml-2">NEW</span>
          </h2>
          <p>{{ item.description }}</p>
          <div class="flex items-center mt-3">
            <p class="ml-2">{{ item.rating.rate }} / {{ item.rating.count }} 참여</p>
          </div>
          <p class="mt-2 mb-4 text-3xl">$ {{ item.price }}</p>
          <div class="flex items-start gap-2">
            <button class="btn btn-md btn-primary text-white" @click="addItem">
              장바구니에 담기
            </button>
            <router-link :to="{ name: 'cart' }" class="btn btn-md btn-border ml-1"
              >장바구니로 이동
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { menu } from '../mocks/menu';
import { useApiStore } from '../stores/api';
import { useCartStore } from '../stores/cart';

export default {
  setup() {
    const route = useRoute();
    const store = useApiStore();
    const cartStore = useCartStore();
    const data = ref();

    onMounted(async () => {
      const id = route.params.id.toString();
      await store.fetchApi();

      data.value = store.filterId(+id);
    });
    return { data, cartStore };
  },
  data() {
    return {
      menu: menu,
    };
  },
  methods: {
    addItem() {
      this.cartStore.addItem(this.data);
    },
  },
};
</script>

<style></style>
