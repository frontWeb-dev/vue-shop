// src/routes.ts
import { createRouter, createWebHistory } from 'vue-router';

import CartPageVue from './pages/CartPage.vue';
import CategoryPage from './pages/CategoryPage.vue';
import DetailPage from './pages/DetailPage.vue';
import MainPage from './pages/MainPage.vue';
import ErrorPage from './pages/ErrorPage.vue';

const routes: any = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  { path: '/:category', name: 'category', component: CategoryPage },
  { path: '/product/:id', name: 'product', component: DetailPage, props: true },
  { path: '/cart', name: 'cart', component: CartPageVue },
  {
    path: '/404',
    name: 'ErrorPage',
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
