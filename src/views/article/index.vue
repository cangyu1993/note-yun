<template>
   <div class="article">


     <div class="author-msg">

       <div class="img-wrap">
         <img :src="avatar" class="img">
       </div>


       <div class="author-name">
         <div class="name">{{bookData.title}}</div>
         <div class="author-time">
           <span style="margin-right: 20px">{{dataTime}}</span>
           <span>阅读数：{{bookData.redNumber}}</span>
         </div>
       </div>

     </div>

     <div class="article-details" v-html="bookData.content"></div>

   </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return{
        bookData:{},
        dataTime:'',
        avatar:''
      }
    },
    methods: {
      getData() {
        this.$axios.get(`/article/${this.$route.params.id}`).then(res => {
          console.log(res)
          this.bookData = res.data
          this.avatar = res.data.author.avatar
          this.dataTime = res.data.updateTime.substring(0,10)
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
   .article{
     background-color: #fff;
     padding:  20px;
     min-height: 400px;
     border-radius: 4px;
     .author-msg{
       display: flex;
       justify-content: flex-start;
       .img-wrap{
         .img{
           width: 70px;
           height: 70px;
           border-radius: 50%;
         }
         margin-right: 20px;
       }
       .author-name{
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         .name{
           font-size: 1.3rem;
           font-weight: 700;
           color: #333;
         }
         .author-time{
           font-size: 1.1rem;
           color: #909090;
         }
       }
     }
     .article-details{
       margin-top: 30px;
       padding: 0 10px;
     }
   }
</style>
