// src/main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './routes';
import App from './App.vue';

import './assets/styles/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faBars);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');

app.component('font-awesome-icon', FontAwesomeIcon);
