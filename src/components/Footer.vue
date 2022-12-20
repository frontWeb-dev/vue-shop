<template>
  <div
    class="footer flex flex-col items-center gap-y-10 gap-x-4 p-10 dark:header-bg dark:main-text"
  >
    <router-link to="/">제로베이스</router-link>
    <ul class="flex gap-2">
      <li v-for="card in cards" :key="card.name">
        <img :src="card.image" :alt="card.name" />
      </li>
    </ul>
    <div class="grid grid-flow-col gap-4">
      <button
        v-for="icon in icons"
        :key="icon.name"
        @click="moveLink(icon.path)"
        :style="{ backgroundImage: `url('${icon.image}') ` }"
        class="w-6 h-6 dark:dark-filter"
      >
        <span class="sr-only">{a.name}</span>
      </button>
    </div>
    <p>Copyright @ 2022 Zero Base</p>
  </div>
</template>

<script lang="ts">
import { cards } from '../mocks/card';
import { icons } from '../mocks/icons';

export default {
  data() {
    return {
      cards: cards,
      icons: icons,
    };
  },
  methods: {
    moveLink(path: string) {
      window.open(path);
    },
  },
};
</script>
<style>
.footer {
  background-color: #f9fafb;
}
</style>
