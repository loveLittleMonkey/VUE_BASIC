<template>
    <div>
        <div class="nav">
            <span class="iconfont icon-fanhui" @click="back()"></span>
            <h5>提交结果</h5>
        </div>
        <div class="con">
            <img :src='url' alt="">
            <h4>提交成功</h4>
            <p>尊敬的客户，您好：<br>您的反馈意见我行已派专人跟进，将在2个工作<br>日内回复，请耐心等候。谢谢！</p>
            <div class="btn" @click="success()">
                <button>完成</button>
            </div>
            
        </div>
    </div>
</template>
<script>
    import url from '../common/images/result.png';
    export default{
        data(){
            return {
                url:url,
            }
        },
        methods:{
            back(){
                history.go(-1);
            },
            success(){
                this.$router.push({ path:'/b'})
            }
        }
    }
</script>
<style lang="scss" scoped>
    .nav{
        width: 100%;
        height: 50px;
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid #dddddd;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: #ffffff;
    }
    .nav span{
        font-size: 14px;
        position: absolute;
        left: 10px;
    }
    .nav h5{
        width: 100%;
        text-align: center;
        font-weight: 550;
    }
    .con{
        font-size: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 20px 0px;
    }
    h4{
        text-align: center;
        font-size: 18px;
        margin-top: 15px;
        margin-bottom: 0px;
    }
    img{
        background-size: 100% 100%;
        text-align: center;
        margin-top: 20px;
    }
    p{
        margin: 15px 0px;
        color: #888888;
    }
    .btn{
        width: 100%;
        text-align: center;
        margin-top: 15px;
    }
    button{
        width: 90%;
        height: 35px;
        font-size: 16px;
        border: 1px solid #ec6764;
        color: #ec6764;
        background-color: #ffffff;
        border-radius: 20px;
        outline: none;
    }
</style>