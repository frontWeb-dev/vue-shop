import axios from 'axios';
import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';
import { menu } from '../mocks/menu';
import { itemsProps } from '../utils/types';

export const useApiStore = defineStore('api', {
  state: () => ({
    products: [] as itemsProps[],
  }),
  actions: {
    filterDatas(category: string) {
      return this.products.filter((a: any) => a.category.match(category));
    },
    filterId(id: number) {
      return this.products.filter((a: any) => a.id === id);
    },
    async fetchApi() {
      try {
        const result = await axios.get('https://fakestoreapi.com/products');
        this.products = result.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
