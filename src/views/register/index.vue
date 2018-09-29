<template>
  <div class="tj w1170">
    <div class="box">
      <h2 class="title">新用户注册</h2>
      <el-input class="inputK" placeholder="用户名"  v-model="userData.username" />
      <el-input class="inputK" placeholder="邮箱" v-model="userData.email" />
      <el-input class="inputK"
                placeholder="密码"
                v-model="userData.password"
                @keyup.enter.native="hendleClick"
      />
      <el-button type="primary" class="btn" @click="hendleClick">注册</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        userData: {
          username:'cangyu',
          email:'123456@qq.cpm',
          password:'123456'
        }
      }
    },
    methods:{
      hendleClick(){
        this.$axios.post('/user',this.userData).then(res=>{
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .tj{
    display: flex;
    justify-content: center;
   .box{
     width: 715px;
     height: 410px;
     margin-top: 60px;
     background-color: #fff;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
      .title{
        text-align: center;
        color: #333;
        font-weight: 400;
      }
      .inputK{
        width: 390px;
        padding: 20px 0;
      }
     .btn{
       width: 390px;
       height: 46px;
     }
   }
  }
</style>
