<template>
  <div class="banner">
    <Carousel :autoplay="5000" :wrap-around="true">
      <Slide v-for="item in items" :key="item.type">
        <div
          class="carousel__item w-full h-220 mt-16 bg-no-repeat bg-cover lg:h-700"
          v-bind:style="{ backgroundImage: `url('${item.image}') ` }"
        >
          <div
            class="carousel-description w-full h-full flex flex-col items-start justify-center gap-2 px-4 md:px-10 text-white bg-black/40"
          >
            <h2 class="font-bold text-2xl lg:text-4xl">{{ item.title }}</h2>
            <p>{{ item.text }}</p>
            <button class="flex items-center justify-center mt-3 btn btn-sm lg:btn-md bg-btnColor">
              바로가기
              <img class="w-5 h-5 ml-1 filter" src="/assets/asset 20.svg" alt="바로가기" />
            </button>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>
<script lang="ts">
import '../assets/styles/tailwind.css';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import { items } from '../mocks/bannerData';

export default {
  name: 'Banner',
  data() {
    return { items: items };
  },
  methode: {},
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  computed: {
    bgProps() {},
  },
};
</script>
<style scoped>
.filter {
  filter: invert(90%) sepia(63%) saturate(5038%) hue-rotate(180deg) brightness(79%) contrast(81%);
}
</style>
