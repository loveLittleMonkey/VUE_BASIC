import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
  routes: [
    { path: '/', redirect: '/hsy' },
    { path: '/page1', component: () => import('../pages/page1.vue') },
    { path: '/b', component: () => import('../pages/b.vue') },
    { path: '/hsy', component: () => import('../pages/hsy.vue') },
    { path: '/succ', component: () => import('../pages/succ.vue') },
  ],
});

export default router;
