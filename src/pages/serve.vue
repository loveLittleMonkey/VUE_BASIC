<template>
  <div>
    <div class="nav">
      <span class="iconfont icon-fanhui" @click="back()"></span>
      <h5>服务咨询</h5>
    </div>
    <div class="con">
      <div class="con1">
        <div>
          <label for="name">姓名</label>
          <input type="text" v-model="name" id="name" placeholder="必填" maxlength="20" required />
        </div>
        <div>
          <label for="card">证件号</label>
          <input type="text" v-model="card" id="card" placeholder="必填" maxlength="18" required />
        </div>
        <div>
          <label for="tel">联系电话</label>
          <input type="tel" v-model="tel" pattern="" id="tel" placeholder="必填" minlength="11" maxlength="11" required />
        </div>
      </div>
      <div class="con2">
        <div>
          <label for="cardNum">卡号</label>
          <input type="number" v-model="cardNum" id="cardNum" placeholder="必填" minlength="14" maxlength="20" required />
        </div>
        <div class="chioce">
          <label for="type">业务类型</label>
          <input type="text" v-model="type" id="type" placeholder="必填" required />
          <span class="iconfont icon-you" @click="chioce()"></span>
          <div class="selectBox" v-show="isShow">
            <div class="selectList" v-for="(item, index) in typeSelect" :key="index" @click="option(index)">
              <span>{{ item.text }}：</span>{{ item.value }}
            </div>
          </div>
        </div>
        <div class="borNone desc">
          <label for="desc">事由</label>
          <!-- <textarea name="desc" v-model="desc" id="desc"  placeholder="必填" maxlength="500" required></textarea> -->
          <input type="text" v-model="desc" id="desc" placeholder="必填" required />
        </div>
        <div class="last borNone">
          <label for="tip">验证码</label>
          <input type="text" v-model="tip" id="tip" placeholder="输入短信验证码" required />
          <span>获取</span>
        </div>
      </div>
      <button class="submit" @click="sendMes()">提交</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      card: '',
      tel: '',
      cardNum: '',
      type: '',
      desc: '',
      tip: '',
      isShow: false,
      typeSelect: [
        { text: '协商还款', value: 'IBMA_XSHK' },
        { text: '银行服务', value: 'IBMA_YHFW' },
        { text: '费用收取', value: 'IBMA_FYSQ' },
        { text: '业务政策', value: 'IBMA_YWZC' },
        { text: '其他', value: 'IBMA_QT' },
      ],
    };
  },
  methods: {
    back() {
      history.go(-1);
    },
    chioce() {
      this.isShow = !this.isShow;
    },
    option(index) {
      this.type = this.typeSelect[index].value;
      this.isShow = !this.isShow;
    },
    async sendMes() {
      try {
        const res = await this.$request('/innermanage/addFeedback.do', {
          ROname: this.name,
          ROtel: this.tel,
          ROcardNum: this.card,
          ROIDCard: this.cardNum,
          ROdesc: this.desc,
          ROtype: this.type,
          ROtip: this.tip,
        });
        console.log('请求返回', res);
        if (res.status === 200) {
          alert('ok');
          // setTimeout(function(){
          //     this.$router.push("/success");
          // },1000);
        } else {
          alert('增加失败！');
        }
      } catch (err) {
        console.log('出错', err);
      } finally {
        console.log('我需要被执行', this.myVuex);
        console.log(this.$tools.getData());
      }
    },
  },
};
</script>
<style lang="scss" scoped>
html {
  height: 100%;
}
.nav {
  width: 100%;
  height: 50px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #ffffff;
}
.nav span {
  font-size: 14px;
  position: absolute;
  left: 10px;
}
.nav h5 {
  width: 100%;
  text-align: center;
  font-weight: 550;
}
.con {
  height: 100vh;
  line-height: 40px;
  background-color: #f6f6f6;
  padding: 50px 10px 0px;
  box-sizing: border-box;
}
.con1,
.con2 {
  width: 100%;
  font-size: 16px;
  color: #333333;
  background-color: #ffffff;
  padding: 0px 10px;
  box-sizing: border-box;
  border-radius: 10px;
}
.con1 > div,
.con2 > div {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
}
.con label {
  width: 20%;
}
.con input {
  width: 80%;
  outline: none;
  border: none;
  padding-left: 10px;
  line-height: 40px;
}
.con input::-webkit-input-placeholder {
  color: #dddddd;
}
textarea::-webkit-input-placeholder {
  color: #dddddd;
}
.con1 {
  margin-top: 15px;
  padding-bottom: 20px;
}
#type {
  width: 70%;
}
.chioce {
  width: 100%;
  position: relative;
}
.chioce span {
  width: 10%;
  text-align: center;
}
.selectBox {
  width: 80%;
  color: #aaaaaa;
  position: absolute;
  top: 40px;
  right: 0px;
  z-index: 100;
  background-color: #ffffee;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid #eeeeee;
}
.selectList {
  font-size: 15px;
}
.con2 {
  margin-top: 15px;
  padding-bottom: 20px;
}
.con2 .borNone {
  border-bottom: none;
}
/* textarea{
        border: none;
        width: 80%;
        height: 45px;
        outline: none;
    } */
.desc input {
  display: flex;
  flex-wrap: wrap;
}
.last input {
  width: 62%;
}
.last span {
  text-align: right;
  width: 18%;
  color: #ec6764;
  font-size: 16px;
}
.submit {
  width: 100%;
  line-height: 40px;
  font-size: 16px;
  border: none;
  color: #bbbbbb;
  background-color: #e9eaef;
  border-radius: 20px;
  margin-top: 40px;
  outline: none;
}
</style>
