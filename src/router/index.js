import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
  routes: [
    { path: '/', redirect: '/backInfo' },
    { path: '/a', component: () => import('../pages/backInfo.vue') },
    { path: '/b', component: () => import('../pages/b.vue') },
    { path: '/backInfo', component: () => import('../pages/backInfo.vue') },
    { path: '/successInfo', component: () => import('../pages/successInfo.vue') },
    { path: '/c', component: () => import('../pages/c.vue') },
    { path: '/succ', component: () => import('../pages/succ.vue') },
    { path: '/page1', component: () => import('../pages/page1.vue') },
    { path: '/hsy', component: () => import('../pages/hsy.vue') },
  ],
});

export default router;
