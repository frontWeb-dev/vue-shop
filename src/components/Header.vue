<template>
  <div class="fixed z-10 w-full h-16 shadow-lg bg-white dark:bg-neutral">
    <div class="flex items-center justify-between h-full px-3 xl:container xl:m-auto">
      <!-- navigation -->
      <div class="gnb flex items-center gap-2">
        <!-- menu btn - mobile -->
        <button class="lg:hidden btn btn-square btn-ghost w-10 sm:w-auto">
          <span class="screen-only">메뉴 펼쳐보기</span>
          <img class="w-6 h-6" src="/assets/asset 15.svg" alt="메뉴 펼쳐보기" />
        </button>
        <!-- logo -->
        <h1 class="font-bold text-lg">
          <a href="/">Vue Shop</a>
        </h1>
        <!-- menu list - pc -->
        <ul class="menu flex hidden md:flex">
          <li
            v-for="menu in menus"
            :key="menu.category"
            class="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
          >
            <a :href="menu.url">{{ menu.category }}</a>
          </li>
        </ul>
      </div>

      <!-- side bar -->
      <div class="flex items-center px-2">
        <!-- change mode btn -->
        <button @click="changeTheme" class="btn btn-square">
          <span class="screen-only">{{ theme }} 모드</span>
          <img
            class="w-7 h-7"
            v-bind:src="`${theme === 'light' ? '/assets/asset 17.svg' : '/assets/asset 16.svg'}`"
            alt="{{ theme }} 모드"
          />
        </button>
        <!-- search items btn -->
        <button @click="searchItems" class="btn btn-square sm:hidden">
          <img
            class="w-5 h-5"
            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
            alt="상품 검색하기"
          />
        </button>
        <!-- search form -->
        <form
          :class="{
            '-top-16, opacity-0': formIsOpen === 'false',
            'top-16, opacity-100': formIsOpen === 'true',
          }"
          class="w-full h-12 absolute top-16 left-0 transition-all in-expo duration-150 sm:block"
        >
          <input class="w-full h-full bg-gray-200 px-3 outline-0" type="text" placeholder="검색" />
          <div class="results">
            <ul>
              <li><a href=""></a></li>
            </ul>
          </div>
        </form>
        <!-- go to cart -->
        <button class="relative btn btn-square">
          <span
            class="flex items-center justify-center absolute top-0 right-0 py-1 px-2 rounded-full bg-red-500 text-white text-xs"
            >1</span
          >
          <img
            class="w-6 h-6"
            src="https://cdn-icons-png.flaticon.com/512/4903/4903482.png"
            alt="장바구니 바로가기"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { menu } from '../mocks/menu';

export default {
  data() {
    return {
      menus: menu,
      theme: 'dark',
      formIsOpen: 'false',
    };
  },
  methods: {
    changeTheme() {
      if (this.theme === 'dark') this.theme = 'light';
      else this.theme = 'dark';
    },
    searchItems() {
      console.log(this.formIsOpen);
      if (this.formIsOpen === 'false') this.formIsOpen = 'true';
      else this.formIsOpen = 'false';
    },
  },
};
</script>

<style></style>