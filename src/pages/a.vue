<template>
  <div>
    aaa
  </div>
</template>

<script>
export default {
  async created() {
    // 测试 axios 发请求
    try {
      const res = await this.$request('/carhailingService/login.do');
      console.log(res);
    } catch (err) {
      console.log('出错', err);
    } finally {
      console.log('我需要被执行');
      console.log(this.$tools.getData());
    }
  },
};
</script>
