import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
  routes: [
    { path: '/', redirect: '/b' },
    { path: '/page1', component: () => import('../pages/page1.vue') },
    { path: '/b', component: () => import('../pages/b.vue') },
    { path: '/add', component: () => import('../pages/add.vue') },
    { path: '/serve', component: () => import('../pages/serve.vue') },
    { path: '/success', component: () => import('../pages/success.vue') },
  ],
});

export default router;
