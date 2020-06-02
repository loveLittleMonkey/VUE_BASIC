import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
  routes: [
<<<<<<< HEAD
    { path: '/', redirect: '/b' },
    { path: '/page1', component: () => import('../pages/page1.vue') },
    { path: '/b', component: () => import('../pages/b.vue') },
    { path: '/add', component: () => import('../pages/add.vue') },
    { path: '/serve', component: () => import('../pages/serve.vue') },
    { path: '/success', component: () => import('../pages/success.vue') },
=======
    { path: '/', redirect: '/backInfo' },
    { path: '/a', component: () => import('../pages/backInfo.vue') },
    { path: '/b', component: () => import('../pages/b.vue') },
    { path: '/backInfo', component: () => import('../pages/backInfo.vue') },
    { path: '/successInfo', component: () => import('../pages/successInfo.vue') },
    { path: '/c', component: () => import('../pages/c.vue') },
    { path: '/succ', component: () => import('../pages/succ.vue') },
    { path: '/page1', component: () => import('../pages/page1.vue') },
    { path: '/hsy', component: () => import('../pages/hsy.vue') },
>>>>>>> 761877a157605f5d8873638f881f5bee4bc4e753
  ],
});

export default router;
