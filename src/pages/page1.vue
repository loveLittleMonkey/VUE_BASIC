<template>
  <div>
    <span class="test">测试文字</span>

    <img :src="imageSrc" alt="图片1" srcset="" />
    <img src="@a/images/2.jpg" alt="图片2" srcset="" />
    <div class="image-block">图片3</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import image1 from '../../assets/images/1.jpg';
import image1 from '@a/images/1.jpg';
export default {
  computed: {
    ...mapGetters(['myVuex']),
  },
  data() {
    return {
      imageSrc: '#',
    };
  },

  async created() {
    // 测试 axios 发请求 what can i do?
    try {
      this.imageSrc = image1;
      const image3 = require('@/assets/images/3.jpg');
      console.log('image3', image3);
      console.log('请求前');
      // const res = await this.$request('/carhailingService/login.do');
      const res = await this.$request('/innermanage/queryBankNotice1.do');
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
