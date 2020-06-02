<template>
<div class="succ">
    <div class="title">
       <ul>
		<li><span class="iconfont icon-b-"></span></li>
		<li>提交结果</li>   
	   </ul>
    </div>
    <div class="content">
        <ul>
            <li>
                <img :src="imgs" alt=""/>
                <h4>提交成功</h4>
            </li>
            <li>
                <p>尊敬的客户，您好：<br>
                您的反馈意见我行已派人跟进，将在2个工作<br>
                日内回复，请耐心等候。谢谢！
                </p>
            </li>
        </ul>
        <div class="but">
            <button v-on:click="completion()">完成</button>
        </div>
    </div>
    
    


</div>
</template>

<script>

import imgs from "@/img/11.png"
export default {
    data(){
        return{
			imgs:imgs,
            sendCode:true,
            time:0,
            select:false,
          
        }
    },
    computed:{

    },
    methods:{
        completion(){
            this.$router.push('/hsy')
        }

    },
    created(){
      

    },

  

   


};
	
</script> 

<style lang="scss" scoped>
.succ{
    position: absolute;
    height:100%;
    width:100%;
    top:0;
    left:0;
    overflow-y: auto;
    background-color:#fff;
  }
.title{
	width:100%;
    background-color: #fff;
    border-bottom:1px solid#ddd;
    margin-bottom:15px;
}
.title ul{
    display: flex;
    flex-wrap: wrap;
    font-size: 17px;
}
.title ul li{
    text-align: center;
    padding:14px 0;
}
.title ul li span{
   font-size: 20px;
}
.title ul li:nth-child(1){
    width:15%;
}
.title ul li:nth-child(2){
    width:70%;
}
.content{
    width:70%;
    background-color:#fff;
    margin: auto;
    border-radius:10px;
    margin-bottom:20px ;
}
.content ul li:nth-child(1){
    text-align:center;
}
.content ul li p{
    padding:20px 0;
    font-size: 14px;
    line-height: 20px;
    color:#aaa;
}
.but{
   width: 87%;
   margin: auto;
}
.but button{
    width:100%;
    margin: auto;
    background-color: #fff;
    color:red;
    border:1px solid red;
    border-radius: 30px;
    padding:10px 0;
    font-size: 17px;
}

</style>
