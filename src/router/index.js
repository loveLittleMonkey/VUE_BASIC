import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
  routes: [
    { path: '/', redirect: '/page1' },
    { path: '/page1', component: () => import('../pages/page1.vue') },
    { path: '/b', component: () => import('../pages/b.vue') },
  ],
});

export default router;
