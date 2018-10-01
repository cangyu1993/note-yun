<template>
  <div>

    <div class="header_all">
      <div class="header w1170">
        <h1>
          <router-link class="title" to="/">云笔记</router-link>
        </h1>
        <el-button class="btn" @click="handleClick">写笔记</el-button>
      </div>
    </div>

    <div class="content w1170">
      <router-view/>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index",
    methods:{
      handleClick(){
          if(this.$store.state.code&&this.$store.state.code==200){
            this.$router.push('/takeNotes')
          }else {
            this.$message.error('未登录状态不能发布笔记！')
          }
      },
    },
  }
</script>

<style scoped lang="scss">
  .header_all {
    background-color: #409eff;
    height: 50px;
    width: 100%;
    .header {
      display: flex;
      justify-content: space-between;
      .title {
        color: #fff;
        font-weight: 400;
        text-decoration: none;
        font-size: 30px;
        margin-top: 5px;
        line-height: 50px;
      }
      .btn {
        margin: 5px 0;
        padding: 12px 20px;
      }
    }
  }
  .content {
    margin-top: 50px;
  }
</style>
