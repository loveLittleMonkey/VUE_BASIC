<template>
  <div>
    <div class="b">
      <h3>增加人员</h3>
      <button @click="back()"><span class="iconfont icon-fanhui"></span></button>
    </div>
    <form action="/innermanage/addMember.do?rf=JSON">
      <input type="text" v-model="name" placeholder="请输入姓名" /><br />
      <input type="number" v-model="tel" placeholder="请输入电话" /><br />
      <input type="text" v-model="group" placeholder="请输入组别" /><br />
      <input type="text" v-model="IDCard" placeholder="请输入身份证" /><br />
      <input type="text" v-model="addr" placeholder="请输入地址" /><br />
      <input type="button" @click="send()" value="提交" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      tel: '',
      group: '',
      IDCard: '',
      addr: '',
    };
  },
  methods: {
    back() {
      history.go(-1);
    },
    async send() {
      // 测试 axios 发请求 what can i do?
      try {
        console.log('请求前');
        console.log(this.roster);
        // const res = await this.$request('/carhailingService/login.do');
        const res = await this.$request('/innermanage/addMember.do?rf=JSON', {
          ROname: this.name,
          ROtel: this.tel,
          ROgroup: this.group,
          ROIDCard: this.IDCard,
          ROaddr: this.addr,
        });
        console.log('请求返回', res);
        if (res.status === 200) {
          alert('增加成功！');
          // eslint-disable-next-line func-names
          setTimeout(function () {
            this.$router.push('/b');
          }, 1000);
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
  async created() {},
};
</script>
<style lang="scss" scoped>
.b {
  width: 100%;
  height: 50px;
  position: relative;
  background-color: slategray;
}
.b button {
  font-size: 16px;
  background-color: slategray;
  /* background-color: rgba($color: #000000, $alpha: 0); */
  outline: none;
  position: absolute;
  top: 15px;
  left: 10px;
  color: #ffffff;
  border: none;
}
form {
  width: 80%;
  line-height: 25px;
  margin: 50px auto 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rosybrown;
  padding: 50px 20px 40px;
}
h3 {
  font-size: 20px;
  width: 100%;
  padding: 0px;
  margin: 0px 0px 20px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #ffffff;
}
form input {
  height: 30px;
  line-height: 30px;
  width: 80%;
  font-size: 20px;
  padding-left: 8px;
  outline: none;
  background-color: #ffffff;
  border: none;
}
form input:nth-last-child(1) {
  width: 40%;
  height: 35px;
  line-height: 35px;
  background-color: tomato;
  border-radius: 20px;
  color: #ffffff;
}
</style>
