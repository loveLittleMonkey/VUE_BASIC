<template>
  <div>
    <span class="test">测试文字</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['myVuex']),
  },

  async created() {
    // 测试 axios 发请求 what can i do?
    try {
      console.log('请求前');
      const res = await this.$request('/carhailingService/login.do');
      console.log('请求返回', res);
    } catch (err) {
      console.log('出错', err);
    } finally {
      console.log('我需要被执行', this.myVuex);
      console.log(this.$tools.getData());
    }
  },
};
</script>

<style lang="scss">
@import './index.scss';
.test {
  color: red;
}
</style>
