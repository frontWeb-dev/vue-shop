<template>
  <div
    :class="{
      'opacity-0, hidden': modalIsOpen === false,
      'opacity-100, block, bg-black/50': modalIsOpen === true,
    }"
    class="modal"
  >
    <div class="modal-box" data-type="modal">
      <h3 class="font-bold text-lg">정말로 구매하시겠습니까?</h3>
      <p class="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
      <div class="flex mt-6 justify-end gap-2" @click="buyItems">
        <button class="btn btn-md btn-primary" data-type="yes">네</button>
        <button class="btn btn-md btn-border" data-type="no">아니오</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useCartStore } from '../stores/cart';
export default {
  setup() {
    const store = useCartStore();
    return { store };
  },
  data() {
    return {
      modalIsOpen: false,
    };
  },

  methods: {
    toggleMenu(): void {
      if (this.modalIsOpen === false) this.modalIsOpen = true;
    },
    buyItems(e: Event) {
      if (e) {
        const type = (e.target as HTMLButtonElement).dataset.type;
        if (type === 'yes') {
          localStorage.removeItem('Cart-data');
          this.store.items = [];
        }
        this.modalIsOpen = false;
      }
    },
  },
};
</script>

<style></style>
