<template>
  <div>
    <div class="b">
      <button @click="back()"><span class="iconfont icon-fanhui"></span></button>
      <h1>全部人员展示</h1>
    </div>
    <div class="msgtitle">
      <ol>
        <li>ID</li>
        <li>姓名</li>
        <li>电话</li>
        <li>组别</li>
        <li>身份证</li>
        <li>地址</li>
      </ol>
    </div>
    <div class="msg" v-for="(item, index) in msg" :key="index">
      <ul>
        <li>{{ item.ROid }}</li>
        <li>{{ item.ROname }}</li>
        <li>{{ item.ROtel }}</li>
        <li>{{ item.ROgroup }}</li>
        <li>{{ item.ROIDCard }}</li>
        <li>{{ item.ROaddr }}</li>
      </ul>
    </div>
    <!--  <span class="test">测试文字</span> -->
    <div class="list">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <p>ID{{ item.ROid }}</p>
          <p>姓名:{{ item.ROname }}</p>
          <p>电话:{{ item.ROtel }}</p>
          <p>组:{{ item.ROgroup }}</p>
          <p>身份证:{{ item.ROIDCard }}</p>
          <p>地址:{{ item.ROaddr }}</p>
          <span v-on:click="getId(item.ROid)">删除</span>
        </li>
      </ul>
      <!-- 	<p>{{list}}</p> -->
    </div>
    <p @click="add()">跳转</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      msg: {},
      list: [],
    };
  },
  methods: {
    back() {
      history.go(-1);
    },
    add() {
      console.log(12);
      this.$router.push('/b');
    },
    async getId(id) {
      console.log(id);
      try {
        console.log('删除');
        // const res = await this.$request('/carhailingService/login.do');
        const res = await this.$request('/innermanage/delMember.do?rf=JSON', {
          ROid: id,
        });
        console.log('请求返回', res.data);
        this.list = res.data.cd.result;
        console.log(this.list);
      } catch (err) {
        console.log('出错', err);
      } finally {
        console.log('我需要被执行', this.myVuex);
        this.init();
        console.log(this.$tools.getData());
      }
    },
    async init() {
      try {
        console.log('请求前');
        // const res = await this.$request('/carhailingService/login.do');
        const res = await this.$request('/innermanage/findMember.do');
        console.log('请求返回', res.data.cd.result);
        this.list = res.data.cd.result;
        console.log(this.list);
      } catch (err) {
        console.log('出错', err);
      } finally {
        console.log('我需要被执行', this.myVuex);
        console.log(this.$tools.getData());
      }
    },
  },
  computed: {
    ...mapGetters(['myVuex']),
  },
  created() {
    // 测试 axios 发请求 what can i do?
    this.init();
  },
};
</script>

<style lang="scss">
@import './index.scss';
* {
  margin: 0px;
  padding: 0px;
}
.b {
  position: relative;
}
.b button {
  font-size: 16px;
  outline: none;
  position: absolute;
  top: 15px;
  left: 10px;
  color: #ffffff;
  border: none;
  background-color: skyblue;
}
h1 {
  font-size: 20px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  background-color: skyblue;
  color: #ffffff;
  margin: 0px;
}
li {
  line-height: 50px;
  list-style: none;
  float: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  color: #ffffff;
  border-bottom: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  box-sizing: border-box;
}
li:nth-child(n) {
  background-color: pink;
}
li:nth-child(2n) {
  background-color: burlywood;
}
ol,
ul {
  width: 100%;
  overflow: hidden;
}
.msgtitle {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 18px;
}
.test {
  color: red;
}
.msg {
  font-size: 16px;
}
.msg ul li {
  text-overflow: ellipsis;
  overflow: hidden;
}
li:nth-of-type(1) {
  width: 10%;
}
li:nth-of-type(2) {
  width: 12%;
}
li:nth-of-type(3) {
  width: 22%;
}
li:nth-of-type(4) {
  width: 12%;
}
li:nth-of-type(5) {
  width: 22%;
}
li:nth-of-type(6) {
  width: 22%;
  border-right: none;
}
.test {
  color: red;
}
.list {
  font-size: 16px;
}
.list ul {
  // width:100%;
  display: flex;
  flex-wrap: wrap;
  // background-color: forestgreen;
}
.list ul > li {
  width: 44%;
  background-color: paleturquoise;
  margin-left: 9px;
  margin-top: 8px;
  padding-left: 10px;
  line-height: 8px;
  padding-bottom: 20px;
}
.list ul > li span {
  margin-left: 110px;
  border: 1px solid#aaa;
  padding: 2px;
}
li {
  list-style: none;
}
</style>
