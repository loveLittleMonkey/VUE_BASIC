<template>
  <div>
    <span class="test">测试文字</span>
  </div>
</template>

<script>
export default {
  async created() {
    // 测试 axios 发请求
    try {
      console.log('请求前');
      const res = await this.$request('/carhailingService/login.do');
      console.log(res);
      console.log('请求后');
    } catch (err) {
      console.log('出错', err);
    } finally {
      console.log('我需要被执行');
      console.log(this.$tools.getData());
    }
  },
};
</script>

<style lang="scss">
.test {
  color: red;
}
</style>
