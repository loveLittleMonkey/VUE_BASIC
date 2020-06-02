<template>
  <div class="home">
    <h2>选择以下服务请点击按钮</h2>
    <div class="btn">
      <router-link to="/page1">查看人员</router-link>
    </div>
    <div class="btn">
      <router-link to="/add">增加人员</router-link>
    </div>
    <div class="btn">
      <router-link to="/serve">服务咨询</router-link>
    </div>
    
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
h2 {
  width: 100%;
  height: 200px;
  line-height:200px;
  font-size: 25px;
  text-align: center;
  color: red;
  margin:0px;
  background-color:skyblue;
}
.btn {
  display:flex;
  flex-direction: column;
  text-align: left;
  padding: 3px;
}
.btn a {
  display: block;
  font-size: 20px;
  text-decoration: none;
  height: 40px;
  line-height: 40px;
  color: #ffffff;
  padding-left: 20px;
  overflow: hidden;
  background-color:#cccccc;
}
</style>