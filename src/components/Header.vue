<template>
  <div class="fixed z-10 w-full h-16 shadow-lg bg-white dark:header-bg">
    <div class="flex items-center justify-between h-full px-3 xl:container xl:m-auto">
      <!-- navigation -->
      <div class="gnb flex items-center gap-2">
        <!-- menu btn - mobile -->
        <button @click="openMenu" class="lg:hidden btn btn-square btn-ghost w-10 sm:w-auto">
          <span class="sr-only">메뉴 펼쳐보기</span>
          <img class="w-6 h-6 dark:dark-filter" src="/assets/asset 15.svg" alt="메뉴 펼쳐보기" />
        </button>
        <!-- logo -->
        <h1 class="font-bold text-lg dark:sub-text">
          <router-link to="/">Vue Shop</router-link>
        </h1>
        <!-- menu list - pc -->
        <ul class="menu flex hidden md:flex">
          <li
            v-for="menu in menus"
            :key="menu.category"
            class="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:sub-text"
          >
            <router-link :to="{ name: 'category', params: { category: menu.url } }">{{
              menu.category
            }}</router-link>
          </li>
        </ul>
      </div>

      <!-- side bar -->
      <div class="flex items-center px-2">
        <!-- change mode btn -->
        <button @click="toggleDark()" class="btn btn-square">
          <span class="sr-only">{{ isDark }} 모드</span>
          <img
            class="w-7 h-7 dark:dark-filter"
            :src="`${isDark ? '/assets/asset 16.svg' : '/assets/asset 17.svg'}`"
            alt="{{ isDark }} 모드"
          />
        </button>
        <!-- search items btn -->
        <button @click="searchItems" class="btn btn-square sm:hidden">
          <img
            class="w-5 h-5 dark:dark-filter"
            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
            alt="상품 검색하기"
          />
        </button>
        <!-- search form -->
        <form
          :class="{
            '-top-16, opacity-0': formIsOpen === false,
            'top-16, opacity-100': formIsOpen === true,
            'sm:block': true,
          }"
          class="w-full h-12 absolute top-16 left-0 transition-all in-expo duration-150 sm:block sm:relative sm:top-0 sm:rounded sm:opacity-100"
        >
          <input
            class="w-full h-full bg-gray-300 px-3 outline-0 dropdown dark:search"
            type="text"
            :value="inputText"
            v-on:input="updateInput"
            placeholder="검색"
          />

          <ul
            class="!fixed left-0 sm:!absolute sm:top-14 flex flex-col dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:sub-bg dark:text-white"
          >
            <li
              class="relative gap-3 py-3 px-4 flex flex-col flex-wrap items-stretch hover-bg"
              v-for="data in searchData"
              :key="data.id"
            >
              <router-link
                class="text-left rounded-sm whitespace-wrap text-ellipsis overflow-hidden"
                :to="{
                  name: 'product',
                  params: {
                    id: `${product.id}`,
                  },
                }"
                >{{ data.title }}</router-link
              >
            </li>
          </ul>
        </form>
        <!-- go to cart -->
        <router-link class="relative btn btn-square" :to="{ name: 'cart' }">
          <span
            class="flex items-center justify-center absolute top-0 right-0 py-1 px-2 rounded-full bg-red-500 text-white text-xs z-50"
          >
            {{ count }}
          </span>
          <img
            class="w-6 h-6 dark:dark-filter"
            src="https://cdn-icons-png.flaticon.com/512/4903/4903482.png"
            alt="장바구니 바로가기"
          />
        </router-link>
      </div>
    </div>
    <SideMenu ref="child_component" />
  </div>
</template>

<script lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { menu } from '../mocks/menu';
import router from '../routes';
import { itemsProps, toggleMenuProps } from '../utils/types';
import SideMenu from './SideMenu.vue';
import { useCartStore } from '../stores/cart';
import { onMounted, ref, watch } from 'vue';
import { useApiStore } from '../stores/api';

export default {
  setup() {
    // 모드 변경
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    // 전체 아이템
    const apiStore = useApiStore();
    const product = ref();
    const searchData = ref();
    // 장바구니 아이템
    const store = useCartStore();
    const { items } = storeToRefs(store);
    const getItem = ref(JSON.parse(localStorage.getItem('Cart-data')));
    const count = ref(0);

    onMounted(async () => {
      await apiStore.fetchApi();
      product.value = apiStore.products;
      if (getItem !== null) {
        store.items = getItem;
      }
    });

    watch(
      () => store.items,
      () => {
        if (getItem.value !== null) {
          count.value = store.items.length;
        }

        return { count };
      },
      { deep: true, immediate: true }
    );
    return { items, getItem, count, isDark, toggleDark, product, searchData };
  },

  data() {
    return {
      menus: menu,
      formIsOpen: false,
      inputText: '',
    };
  },

  methods: {
    searchItems() {
      if (this.formIsOpen === false) this.formIsOpen = true;
      else this.formIsOpen = false;
    },

    openMenu() {
      (this.$refs['child_component'] as toggleMenuProps).toggleMenu();
    },
    updateInput(e: Event) {
      let updateText = (e.target as HTMLInputElement).value;
      this.inputText = updateText;
    },
  },
  watch: {
    inputText() {
      this.searchData = this.product.filter((a: itemsProps) =>
        a.title.toLowerCase().includes(this.inputText)
      );
      console.log(this.searchData);
    },
  },
  components: {
    SideMenu,
    router,
  },
};
</script>

<style>
.dropdown-content {
  position: absolute;
  z-index: 50;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-content li {
  max-height: 72px;
}
</style>
