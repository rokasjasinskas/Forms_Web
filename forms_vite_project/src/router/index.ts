// src/router/index.ts

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import FormPage from '../pages/FormPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/forms', component: FormPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
