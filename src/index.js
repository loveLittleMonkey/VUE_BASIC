import Vue from 'vue';

import store from './store/index';
import router from './router/index';
import app from './index.vue';

import tools from './common/js/index';
import request from './common/js/request';

Vue.use(tools);
Vue.use(request);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app),
}).$mount('#app');
