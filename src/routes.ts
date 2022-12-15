// src/routes.ts
import { createRouter, createWebHistory } from 'vue-router';

import CartPageVue from './pages/CartPage.vue';
import CategoryPage from './pages/CategoryPage.vue';
import DetailPage from './pages/DetailPage.vue';
import MainPage from './pages/MainPage.vue';
import ErrorPage from './pages/ErrorPage.vue';

const routes = [
  { path: '/', name: 'home', component: MainPage },
  { path: '/product/:productId', component: DetailPage },
  { path: '/:category', component: CategoryPage },
  { path: '/cart', component: CartPageVue },
  { path: '/:catchAll(.*)', name: 'ErrorPage', component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
