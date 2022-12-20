<template>
  <!-- wrapper -->
  <div class="cart_page pt-16">
    <!-- inner -->
    <div class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <!-- category nav -->
      <div class="text-sm breadcrumbs">홈 > 장바구니</div>

      <div v-if="getItem === null || getItem.length === 0">
        <div class="mt-6 md:mt-14 px-2 lg:px-0">
          <h2 class="text-2xl">장바구니에 물품이 없습니다.</h2>
          <router-link to="/" class="btn btn-md btn-primary mt-10">담으러 가기</router-link>
        </div>
      </div>

      <div v-if="getItem !== null && getItem.length > 0">
        <div class="mt-6 md:mt-14 px-2 lg:px-0">
          <div class="lg:flex justify-between mb-20">
            <div>
              <div v-for="product in data" :key="product[0].id">
                <!-- cart image -->
                <div v-if="getItem.filter((a) => a[0].id === product[0].id).length > 0">
                  <div class="lg:flex lg:items-center mt-4 px-2 lg:px-0">
                    <router-link
                      :to="{
                        name: 'product',
                        params: {
                          id: `${product[0].id}`,
                        },
                      }"
                    >
                      <div
                        class="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white"
                      >
                        <img class="object-contain w-full h-48" :src="product[0].image" />
                      </div>
                    </router-link>
                    <!-- card body -->
                    <div class="product-info px-1 lg:px-12">
                      <router-link
                        class="titie-link"
                        :to="{
                          name: 'product',
                          params: {
                            id: `${product[0].id}`,
                          },
                        }"
                      >
                        <h3 class="product-title">{{ product[0].title }}</h3>
                      </router-link>
                      <!-- price -->
                      <div class="mt-2 mb-4 text-3xl">
                        $
                        {{
                          getItem?.filter((b) => b[0].id === product[0].id).length *
                          Math.ceil(product[0].price)
                        }}
                      </div>

                      <!-- count container -->
                      <div class="btn-group">
                        <button
                          class="btn btn-md btn-primary"
                          @click="deleteItem"
                          :data-id="product[0].id"
                        >
                          -
                        </button>
                        <button class="btn btn-md btn-ghost">
                          {{ getItem?.filter((b) => b[0].id === product[0].id).length }}
                        </button>
                        <button
                          class="btn btn-md btn-primary"
                          @click="addItem"
                          :data-id="product[0].id"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- total price -->
            <div class="self-start shrink-0 flex items-center mt-10 mb-20">
              <p class="text-xl md:text-2xl">총 : $ {{ totalPrice }}</p>
              <button class="btn btn-md btn-primary ml-5" @click="openMenu">구매하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal ref="child_component" />
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useCartStore } from '../stores/cart';
import Modal from './Modal.vue';
import { itemsProps, toggleMenuProps } from '../utils/types';

export default {
  setup() {
    const data = ref();
    const totalPrice = ref();
    const cartStore = useCartStore();
    const getItem = ref(JSON.parse(localStorage.getItem('Cart-data')));
    onMounted(() => {
      if (getItem.value !== null) {
        data.value = getItem.value.filter(
          (v: itemsProps, i: number) =>
            getItem.value.findIndex((x: itemsProps) => x[0].id === v[0].id) === i
        );
        totalPrice.value = getItem?.value
          .map((a: itemsProps) => a[0].price)
          .reduce((prev: number, current: number) => Math.ceil(prev + current), 0);
      }
    });
    watch(
      () => getItem,
      () => {
        console.log(getItem.value);
        if (getItem.value !== null) {
          totalPrice.value = getItem?.value
            .map((a: itemsProps) => a[0].price)
            .reduce((prev: number, current: number) => Math.ceil(prev + current), 0);
        }
        return { totalPrice };
      },
      { deep: true, immediate: true }
    );
    return { data, totalPrice, getItem, cartStore };
  },
  methods: {
    addItem(e: Event) {
      e.preventDefault();
      const id = (e.currentTarget as HTMLButtonElement).dataset.id;
      const filter = this.getItem.find((a: itemsProps) => a[0].id === +id);
      this.cartStore.addItem(filter);
      this.getItem.push({ ...filter });
      localStorage.setItem('Cart-data', JSON.stringify(this.getItem));
    },

    deleteItem(e: Event) {
      e.preventDefault();
      const id = (e.currentTarget as HTMLButtonElement).dataset.id;
      const index = this.getItem.findIndex((a: itemsProps) => a[0].id === +id);
      let copy = this.getItem.filter((_: itemsProps, i: number) => i !== index);
      this.cartStore.deleteItem(+id);
      this.getItem = copy;
      localStorage.setItem('Cart-data', JSON.stringify(copy));
    },
    openMenu() {
      (this.$refs['child_component'] as toggleMenuProps).toggleMenu();
    },
  },
  components: { Modal },
};
</script>
<style></style>
