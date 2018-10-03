<template>
  <h1>文章详情页</h1>
</template>

<script>
  export default {
    name: "index",
    data() {
      return{
        bookData:{}
      }
    },
    methods: {
      getData() {
        this.$axios.get(`/article/${this.$route.params.id}`).then(res => {
          console.log(res)
          this.bookData = res.data
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
