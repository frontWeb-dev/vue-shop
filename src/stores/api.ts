import axios from 'axios';
import { defineStore } from 'pinia';

export const useApiStore = defineStore('api', {
  state: () => ({
    products: [],
  }),
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  actions: {
    async fetchProducts() {
      try {
        await axios.get('https://fakestoreapi.com/products').then((response) => {
          this.products = response.data;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});

// const store = useApiStore();
// const props = defineProps<{
//   category: string;
// }>();

// const products = await store.fetchProducts();
// const map = menu.filter((a) => a.category === props.category)[0].apiCategory;
// const filterData: itemsProps[] = products.filter((a: any) => a.category.match(map)).slice(0, 4);

// console.log(filterData);
