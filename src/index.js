import Vue from 'vue';

import store from './store/index';
import router from './router/index';
import app from './index.vue';

import tools from './common/js/index';
import request from './common/js/request';
import './common/css/iconfont.css';
import './common/css/index.scss';

Vue.use(tools);
Vue.use(request);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app),
}).$mount('#app');
