<template>
  <div class="tj w1170">
    <div class="box">
      <h2 class="title">新用户注册</h2>
      <el-input class="inputK" placeholder="用户名" />
      <el-input class="inputK" placeholder="邮箱" />
      <el-input class="inputK" placeholder="密码" />
      <el-button type="primary" class="btn">注册</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
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
