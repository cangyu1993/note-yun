<template>
  <div class="photo">
    <h1 class="title"> 十三亿人都会用的云笔记</h1>
  </div>
</template>

<script>
  export default {
    name: "bigPhoto"
  }
</script>

<style scoped lang="scss">
  .photo{
    position: relative;
    background:url("../static/img/banner.jpg") no-repeat;
    background-size:100% 100%;
    width: 750px;
    height: 340px;
    overflow: hidden;
    border-radius: 4px;
    .title{
      position: absolute;
      bottom: 0;
      padding-left: 30px;
      background: rgba(0,0,0,.3);
      width: 100%;
      font-weight: 400;
      font-size: 20px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 50px;
    }
  }
</style>
