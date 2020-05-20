
  import Vue from 'vue'
  import Router from 'vue-router'
  Vue.use(Router)
const router = new Router({
    routes: 
    [
        { path: "/", redirect: "/a" },
        { path: "/a", component: () => import("../pages/a.vue") },
        { path: "/b", component: () => import("../pages/a.vue") },
      ]
    
})



  export default router;
