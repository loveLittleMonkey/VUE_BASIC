<template>
  <div style="background-color: #eae6e6;">
    <div class="layout_header">
      <span style="text-align: center;">服务咨询</span>
    </div>
    <div class="layout_main">
      <div>
        <p>
          姓名
          <input type="text" placeholder="必填" style="margin-left: 45px;" id="name" @blur="nameInput()" v-model="name" />
          <br />
          <span v-show="nameMessage" style="color: red; font-size: 12px; text-align: center; padding-left: 70px;">{{
            nametishi
          }}</span>
        </p>
        <p>
          证件号
          <input type="text" name="lname" placeholder="选填" style="margin-left: 28px;" id="license" @blur="licenseInput()" />
          <br />
          <span v-show="nameMessage1" style="color: red; font-size: 12px; text-align: center; padding-left: 70px;">{{
            licensetishi
          }}</span>
        </p>
        <p>
          联系电话 <input type="text" name="lname" placeholder="必填" id="phone" @blur="phoneInput()" />
          <br />
          <span v-show="nameMessage2" style="color: red; font-size: 12px; text-align: center; padding-left: 70px;">{{
            phonetishi
          }}</span>
        </p>
      </div>
      <div>
        <p>
          卡号
          <input
            type="text"
            name="fname"
            placeholder="选填"
            style="margin-left: 38px;"
            @input="searchCard($event)"
            @blur="cardInput()"
          />
          <br />
          <span v-show="nameMessage3" style="color: red; font-size: 12px; text-align: center; padding-left: 70px;"
            >请重新输入银行卡号</span
          >
        </p>
        <p>
          业务类型
          <select>
            <option value="" disabled selected style="display: none; color: red;">必填</option>
            <option value="volvo">投资理财</option>
            <option value="saab">基金</option>
          </select>
        </p>
        <p>事由 <input type="text" name="lname" placeholder="必填" style="margin-left: 40px;" /></p>
      </div>
      <input type="submit" value="提交" class="btn" @click="to()" />
    </div>
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
  data() {
    return {
      nameMessage: false,
      nameMessage1: false,
      nameMessage2: false,
      nameMessage3: false,
      name: '',
      materialLicense: '',
      materialName: '',
      materialPhone: '',
      materialCard: '',
      length: '',
      nametishi: '',
      licensetishi: '',
      phonetishi: '',
      length: '',
    };
  },
  methods: {
    to() {
      this.$router.push('/b');
    },
    //姓名验证
    nameInput: function () {
      var materialName = document.getElementById('name').value;
      if (!/^[\u4E00-\u9FA5]{0,20}$/.test(materialName)) {
        this.nameMessage = true;
        this.nametishi = '请输入中文名字';
      } else if (materialName.length > 20) {
        this.nameMessage = true;
        this.nametishi = '请重新输入，名字不能超过20字符';
      } else {
        this.nameMessage = false;
      }
    },
    // 证件号验证
    licenseInput: function () {
      var materialLicense = document.getElementById('license').value;
      if (!/^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/.test(materialLicense)) {
        this.nameMessage1 = true;
        this.licensetishi = '输入错误，请重新输入';
      } else {
        this.nameMessage1 = false;
      }
    },
    //手机号验证
    phoneInput: function () {
      var materialPhone = document.getElementById('phone').value;
      if (!/1(3|4|5|6|7|8|9)\d{9}/.test(materialPhone)) {
        // console.log(materialPhone);
        // this.nameMessage2 = true;
        // this.phonetishi = '请输入数字';

        this.nameMessage2 = false;
        // var length = materialPhone.length;
        // console.log(length);
      } else if (length < 11) {
        console.log(length);
        this.nameMessage2 = true;
        this.phonetishi = '请输入11位手机号';
      } else {
        this.nameMessage2 = false;
        this.nameMessage2 = true;
        this.phonetishi = '请输入数字';
      }
    },
    //卡号验证
    searchCard: function (event) {
      if (event.data != null) {
        this.materialCard = this.materialCard + event.data;
      }
      console.log(this.materialCard);
    },
    cardInput: function () {
      var length = this.materialCard.length;
      if (length < 19 || length > 19) {
        this.nameMessage3 = !this.nameMessage3;
        console.log('请重新输入银行卡号');
      }
    },
  },
};
</script>

<<<<<<< HEAD:src/pages/a.vue
<style lang="scss" src="../common/css/a.scss"></style>
=======
<style lang="scss">
@import './index.scss';
.test {
  color: red;
}
</style>
>>>>>>> 39361ff5902a9a67edd7466dbadaf5fb0931d84f:src/pages/page1.vue
