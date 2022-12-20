<template>
  <div
    @click="closeMenu"
    :class="{ '-left-full': menuIsOpen === false, 'bg-black/50': menuIsOpen === true }"
    class="fixed inset-0 w-screen h-screen"
  >
    <div class="menu w-60 sm:w-80 h-full p-4 bg-white dark:main-bg" data-type="menu">
      <ul>
        <li v-for="menu in menus" :key="menu.category">
          <router-link
            class="block link-active font-bold py-3 px-4 !text-gray-700 active:!text-white dark:!text-white"
            :to="{ name: 'category', params: { category: menu.url } }"
          >
            {{ menu.category }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { menu } from '../mocks/menu';

export default {
  data() {
    return {
      menus: menu,
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenu(): void {
      if (this.menuIsOpen === false) this.menuIsOpen = true;
      else this.menuIsOpen = false;
    },

    closeMenu(e: Event) {
      if (e) {
        const type = (e.target as HTMLUListElement).dataset.type;
        if (type === 'menu') return;
        else {
          if (this.menuIsOpen === false) this.menuIsOpen = true;
          else this.menuIsOpen = false;
        }
      }
    },
  },
};
</script>

<style></style>
