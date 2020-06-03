<template>
  <div class="hsy">
    <div class="title">
      <ul>
        <li><span class="iconfont icon-b-"></span></li>
        <li>服务咨询</li>
      </ul>
      <!-- <span class="iconfont icon-b-"></span>
        <img :src="imgs" alt="t"/> -->
    </div>
    <div class="content">
      <ul>
        <li>姓名<input type="text" v-model="name" placeholder="必填" required="required" @keyup="key1" @blur="blur1" /></li>
        <div class="err">
          <p v-show="p1">请输入姓名</p>
        </div>
        <li>证件号<input type="text" v-model="ID_card" :placeholder="data" @keyup="key2" /></li>
        <div class="err">
          <p v-show="p2">请输入正确身份证号码</p>
        </div>
        <li>联系电话<input type="number" v-model="tel" placeholder="必填" @keyup="key3" @blur="blur3" /></li>
        <div class="err">
          <p v-show="p3">请输入11位号码</p>
        </div>
      </ul>
    </div>
    <div class="content cent">
      <ul>
        <li>卡号<input type="text" v-model="card_num" :placeholder="data" @keyup="key4" /></li>
        <div class="err">
          <p v-show="p4">请输入正确卡号</p>
        </div>
        <li>
          业务类型
          <select :class="{ sel: colo == true }" v-model="type">
            <option value="0" disabled selected style="display: none;">必填</option>
            <option v-for="(item, index) in option1" :key="index" :value="item.value">{{ item.text }}</option>
          </select>
        </li>
        <div class="err">
          <p v-show="p5">请选择业务类型</p>
        </div>
        <li>事由<input type="text" v-model="desc" placeholder="必填" @keyup="key6" /></li>
        <div class="err">
          <p v-show="p6">请输入事由</p>
        </div>
        <li>
          验证码<input type="text" placeholder="输入短信验证码" />
          <span class="p1" v-show="sendCode" @click="gety()">获取</span>
          <span class="p1" v-show="!sendCode">{{ time }}秒之后重新发送</span>
        </li>
      </ul>
    </div>
    <div class="but">
      <button :class="{ active: select == true }" v-on:click="submit()">提交</button>
    </div>
  </div>
</template>

<script>
// import imgs from '@/img/2014278.jpg';
export default {
  data() {
    return {
      imgs: '#',
      sendCode: true,
      time: 0,
      data: '选填',
      select: false,
      name: '',
      tel: '',
      ID_card: '',
      card_num: '',
      desc: '',
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      p5: false,
      p6: false,
      type: 0,
      typeID: '',
      colo: true,
      option1: [
        { text: '协商还款', value: 'IBMA_XSHK' },
        { text: '银行服务', value: 'IBMA_YHFW' },
        { text: '费用收取', value: 'IBMA_FYSQ' },
        { text: '业务政策', value: 'IBMA_YWZC' },
        { text: '其他', value: 'IBMA_QT' },
      ],
    };
  },
  //监听数据变化
  computed: {
    listenName() {
      const { type } = this;
      return { type };
    },
    listenType() {
      const { type } = this;
      return { type };
    },
  },
  watch: {
    listenName(val) {
      console.log(val.type);
      if (val.type != 0) {
        this.colo = false;
      } else {
        this.colo = true;
      }
    },
    listenType(val) {
      if (val.type == 'IBMA_XSHK') {
        this.data = '必填';
      } else {
        this.data = '选填';
        this.p2 = false;
        this.p4 = false;
      }
      if (val.type != 0) {
        this.p5 = false;
      } else {
        this.p5 = true;
      }
    },
  },
  methods: {
    //提交
    async submit() {
      this.jub();
      console.log(this.jub());

      if (this.jub() == '可以提交') {
        try {
          console.log('请求前');
          const res = await this.$request('/innermanage/addFeedback.do?rf=JSON', {
            ROname: this.name,
            ROIDCard: this.ID_card,
            ROtel: this.tel,
            ROcardNum: this.card_num,
            ROtype: this.type,
            ROdesc: this.desc,
          });
          console.log('请求返回', res);
          // var data=res.data.cd.errorCode
          // console.log(res.data.cd.errorCode)
        } catch (err) {
          console.log('出错', err);
        } finally {
          if (data == 200) {
            this.name = '';
            this.ID_card = '';
            this.tel = '';
            this.card_num = '';
            this.type = 0;
            this.p5 = false;
            this.desc = '';
            this.$router.push('/succ');
          } else {
            console.log('请求失败');
          }
        }
      }
    },
    //获取焦点
    key1() {
      if (this.name.length < 19) {
        this.p1 = false;
        return;
      } else {
        this.p1 = true;
        return;
      }
    },
    //失去焦点
    blur1() {
      if (this.name.length == 0) {
        this.p1 = true;
        return;
      } else {
        this.p1 = false;
        return;
      }
    },
    key2() {
      //    var card=/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
      var card = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (this.ID_card != '') {
        if (card.test(this.ID_card)) {
          this.p2 = false;
        } else {
          this.p2 = true;
        }
      } else {
        this.p2 = false;
      }
    },
    //    blur2(){
    //         var card=/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
    //         if(card.test(this.ID_card)){
    //            this.p2=false
    //        }
    //    },
    key3() {
      var ph = /^1[3|4|5|7|8]\d{9}$/;
      if (!ph.test(this.tel)) {
        this.p3 = true;
      } else {
        this.p3 = false;
      }
    },
    key4() {
      var ca = /^([1-9]{1})(\d{14}|\d{18})$/;
      if (this.card_num != '') {
        if (ca.test(this.card_num)) {
          this.p4 = false;
        }
      } else {
        this.p4 = false;
      }
    },
    blur3() {
      var ph = /^1[3|4|5|7|8]\d{9}$/;
      if (ph.test(this.tel)) {
        this.p3 = false;
      } else {
        this.p3 = true;
      }
    },
    key6() {
      if (this.desc != '') {
        this.p6 = false;
      }
    },

    //判断
    jub() {
      //银行卡
      var ca = /^([1-9]{1})(\d{14}|\d{18})$/;
      //身份证
      //var card=/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
      var card = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (this.name == '') {
        this.p1 = true;
        return;
      }
      if (this.ID_card != '') {
        if (!card.test(this.ID_card)) {
          this.p2 = true;
        }
      }
      if (this.card_num != '') {
        if (!ca.test(this.card_num)) {
          this.p4 = true;
        }
      }

      if (this.tel == '') {
        this.p3 = true;
        return;
      }
      if (this.type == 0) {
        this.p5 = true;
        return;
      }
      if (this.type == 'IBMA_XSHK') {
        if (this.ID_card == '') {
          this.p2 = true;
          return;
        }
        if (this.card_num == '') {
          this.p4 = true;
          return;
        }
      }
      if (this.desc == '') {
        this.p6 = true;
        return;
      }
      return '可以提交';
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.hsy {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: #ddd;
}
.title {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid#ddd;
  margin-bottom: 15px;
}
.title ul {
  display: flex;
  flex-wrap: wrap;
  font-size: 17px;
}
.title ul li {
  text-align: center;
  padding: 14px 0;
}
.title ul li span {
  font-size: 20px;
}
.title ul li:nth-child(1) {
  width: 15%;
}
.title ul li:nth-child(2) {
  width: 70%;
}
.content {
  width: 94%;
  background-color: #fff;
  margin: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}
.content ul {
  padding: 15px;
}
.content ul li {
  border-bottom: 1px solid#ddd;
}
.content ul li {
  border-bottom: 1px solid#ddd;
  padding: 12px 0;
  position: relative;
}
.content input {
  width: 72%;
  border: 0;
  float: right;
}
.content p {
  font-size: 14px;
  color: red;
  padding: 4px 0;
  margin-left: 100px;
}
.content select {
  width: 72%;
  //  margin-left: 30px;
  float: right;
  padding: 0 0 10px 0;
  border: none;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: #fff;
}
.sel {
  color: #6c6c6c;
}
.content option {
  color: #000;
}
.cent {
  margin-bottom: 60px;
  position: relative;
}
.cent span {
  position: absolute;
  top: 12px;
  right: 5px;
  font-size: 14px;
  color: red;
}
.but {
  width: 87%;
  margin: auto;
}
.but button {
  width: 100%;
  margin: auto;
  background-color: #aaa;
  color: royalblue;
  border: 0;
  border-radius: 30px;
  padding: 13px 0;
  font-size: 17px;
}
.but .active {
  background-color: coral;
}
</style>
