<template>
  <div>
    <div class="alayout_header">
      <router-link to="/a" style="padding-right: 6rem; padding-left: 0.5rem; color: black; text-decoration: none;"
        >返回</router-link
      >
      <span>提交结果</span>
    </div>
    <div v-show="success" class="submitMessage">
      <h4 style="text-align: center; line-height: 20px;">提交成功</h4>
      <span style="margin-top: 10px;">尊敬的客户，您好：</span>
      <br />
      <span>您的反馈意见我行已派专人跟进，将在两个工作日内回复，请耐心等候，谢谢！</span>
      <br />
    </div>
    <div class="btnMessage">
      <input type="submit" value="完成" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      success: true,
    };
  },
};
</script>
<style lang="sass" src="../common/css/b.scss"></style>
