<template>
<<<<<<< HEAD
    <div>
        <div class="b">
            <h3>增加人员</h3>
      <button @click="back()">返回</button>
    </div>
         <div class="box">
			   <input type="text" v-model="ROname" placeholder="请输入姓名"><br>
			   <input type="number" v-model="ROtel" placeholder="请输入电话"><br>
			   <input type="text" v-model="ROgroup" placeholder="请输入组别"><br>
			   <input type="text" v-model="ROIDCard" placeholder="请输入身份证"><br>
			   <input type="text" v-model="ROaddr" placeholder="请输入地址"><br>
			   <p on:click="add()">提交</p>
		</div>
           
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data(){
    return{
            ROname:'',
            ROtel:'',
            ROgroup:'',
            ROIDCard:'',
            ROaddr:'' 
    }
  },
  methods:{
    back(){
      history.go(-1);
    },
    async add(){
      // console.log(this.ROname)
      try {
      console.log('请求前11');
      // const res = await this.$request('/carhailingService/login.do');
      const res =await this.$request('/innermanage/addMember.do?rf=JSON',{
            ROname:this.ROname,
            ROtel:this.ROtel,
            ROgroup:this.ROgroup,
            ROIDCard:this.ROIDCard,
            ROaddr:this.ROaddr
          });
      console.log('请求返回', res);
    } catch (err) {
      console.log('出错', err);
    } finally {
      console.log('我需要被执行', this.myVuex);
      console.log(this.$tools.getData());
     }
    }
  },
  computed: {
    ...mapGetters(['myVuex']),
  },
  async mounted(){
    // 测试 axios 发请求 what can i do?
   
  },
  
  // async created() {
  // },
};
</script>
<style lang="scss" scoped>
.b{
    width: 100%;
    height: 50px;
    position: relative;
    background-color: slategray;
}
.b button{
    font-size: 16px;
    background-color: rgba($color: #000000, $alpha: 0);
    outline: none;
    position: absolute;
    top:15px;
    left: 10px;
    color: #ffffff;
    border:none;
}
form{
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
h3{
    font-size: 20px;
    width: 100%;
    padding: 0px;
    margin:0px 0px 20px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color:#ffffff;
}
form input{
    height: 30px;
    line-height: 30px;
    width: 80%;
    font-size: 20px;
    padding-left: 8px;
    outline: none;
    background-color: #ffffff;
    border:none;
}
form input:nth-last-child(1){
    width: 40%;
    height: 35px;
    line-height: 35px;
    background-color: tomato;
    border-radius: 20px;
    color: #ffffff;
}
</style>
=======
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
>>>>>>> 871517ca6ca8913064d2a0fcdf3b9b938aae74c2
