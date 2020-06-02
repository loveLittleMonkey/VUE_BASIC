<template>
  <div>
  <!--  <span class="test">测试文字</span> -->
	<div class="list">
		<ul>
			<li v-for='(item,index) in list' :key='index' >
			<p>ID{{item.ROid}}</p>
			  <p>姓名:{{item.ROname}}</p>
			  <p>电话:{{item.ROtel}}</p>
			  <p>组:{{item.ROgroup}}</p>
			  <p>身份证:{{item.ROIDCard}}</p>
			  <p>地址:{{item.ROaddr}}</p>
			  <span v-on:click='getId(item.ROid)'>删除</span>
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
	data(){
		return{
			list:[],
		}
	},
  computed: {
    ...mapGetters(['myVuex']),
  },
  methods:{
	  add(){
		  console.log(12)
		  this.$router.push('/b')
	  },
	 async getId(id){
		  console.log(id)
		  try {
		    console.log('删除');
		    // const res = await this.$request('/carhailingService/login.do');
		    const res = await this.$request('/innermanage/delMember.do?rf=JSON',{
				ROid:id
				});
		    console.log('请求返回', res.data);
		    this.list=res.data.cd.result
		    console.log(this.list)
		  } catch (err) {
		    console.log('出错', err);
		  } finally {
		    console.log('我需要被执行', this.myVuex);
			this.init();
		    console.log(this.$tools.getData());
		  }
	  },
	  async init(){
	   try {
	  	  console.log('请求前');
	  	  // const res = await this.$request('/carhailingService/login.do');
	  	  const res = await this.$request('/innermanage/findMember.do');
	  	  console.log('请求返回', res.data.cd.result);
	  	  this.list=res.data.cd.result
	  	  console.log(this.list)
	  	} catch (err) {
	  	  console.log('出错', err);
	  	} finally {
	  	  console.log('我需要被执行', this.myVuex);
	  	  console.log(this.$tools.getData());
	  	}
	  },
	  
  },
   created() {
    // 测试 axios 发请求 what can i do?
	this.init()
  },
};
</script>

<style lang="scss" scoped>
// @import './index.scss';
.test {
  color: red;
}
.list{
	font-size: 16px;
	
}
.list ul{
	// width:100%;
	display: flex;
	flex-wrap: wrap;
	 // background-color: forestgreen;
}
.list ul>li{
	 width:44%;
	 background-color:paleturquoise;
	 margin-left: 9px;
	 margin-top: 8px;
	 padding-left:10px;
	 line-height: 8px;
	 padding-bottom: 20px;
}
.list ul>li span{
	 margin-left: 110px;
	 border:1px solid#aaa;
	 padding:2px;
}
li{
 list-style: none;	
}
</style>
