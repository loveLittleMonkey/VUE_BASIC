const tools = {
  getData() {
    console.log('getData');
  },
};
const install = Vue => {
  Vue.prototype.$tools = tools;
};

export default install;
