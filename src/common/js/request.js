import Axios from 'axios';

const axios = Axios.create({
  timeout: 60000,
  withCredentials: true,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(config => {
  // 请求发出前集中搞事情
  return config;
});

axios.interceptors.response.use(response => {
  // 请求返回之后集中搞事情
  return response;
});
const request = (url, data = {}) => {
  return axios({
    url,
    params: { rf: 'JSON', ...data },
  });
};

const install = Vue => {
  Vue.prototype.$request = request;
};

export default install;
