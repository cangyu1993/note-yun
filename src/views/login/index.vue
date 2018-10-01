<template>
  <div>
    <div class="loginAll">
      <div>
        <bigPhoto/>
      </div>
      <div class="right">
        <div class="rightOne" v-if="isShow">
          <el-input class="rightInput" placeholder="请输入登陆邮箱：" v-model="userData.email"/>
          <el-input class="rightInput"
                    placeholder="请输登陆密码："
                    type="password"
                    @keyup.enter.native="handleToSer"
                    v-model="userData.password"
          />
          <el-button type="primary" class="btn" @click="handleToSer" >登陆</el-button>
          <el-button class="btn" @click="handleClickTo">注册</el-button>
        </div>

        <div class="rightTwo" v-else>
          <div>
            <img :src="loginData.avatar" class="img">
          </div>
          <p class="username">{{this.loginData.username}}</p>
          <el-button type="warning" class="userBtn" @click="userBtn">退出登陆</el-button>
        </div>
      </div>
    </div>
    <div class="photoDown"></div>

    <div class="book">

      <div class="userData">
        <img class="imgHeader" src="">
        <div class="bookDescribe">
          <div class="userName">
            <span class="saneT1">张三</span>
            <span class="saneT2">vue项目</span>
          </div>
          <div class="bookReply">
            <span class="sameT">浏览：6666</span>
            <span class="sameT">回复：6666</span>
            <span class="sameT">分类：6666</span>
          </div>
        </div>
      </div>

      <div class="bookDetail">6666666</div>
    </div>

  </div>
</template>

<script>
  import bigPhoto from '@/components/bigPhoto'

  export default {
    name: "index",
    components: {
      bigPhoto,
    },
    data() {
      return {
        isShow: true,
        userData: {
          email: '',
          password: '',
        },
        code:0,
        loginData: {
          avatar: '',
          email: '',
          username: ''
        }
      }
    },
    methods: {
      handleClickTo() {    // 调转到祖册页
        this.$router.push('/register')
      },
      handleToSer() {
        this.$axios.post('login', this.userData).then(res => {
          console.log(res)
          if (res.code == 200) {
            this.$message.success('登陆成功')
            this.loginData = res.userData
            this.code = res.code
            setTimeout(() => {
              this.isShow = false
            }, 1000)
          }else {
            this.$message.error('请核对登陆信息是否正确')
          }
        }).catch(err=>{
          this.code = res.code
          this.$message.error('请求失败')
        })
      },
      userBtn(){
        this.$axios.post('/outlogin').then(res=>{
          console.log(res)
          if (res.code == 200) {
            this.isShow = true
            this.$message.success(res.msg)
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .loginAll {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    .right {
      background-color: #fff;
      width: 360px;
      height: 333px;
      border-radius: 4px;
      box-sizing: border-box;
      .rightOne {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
        .rightInput {
          width: 270px;
          padding: 10px 0;
        }
        .btn {
          width: 270px;
          margin: 10px 0;
        }
      }
      .rightTwo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .img {
          width: 120px;
          height: 120px;
          margin-top: 20px;
          border-radius: 50%;
        }
        .username {
          margin: 20px 0;
        }
        .userBtn {
          width: 270px;
          margin: 10px 0;
          margin-top: 50px;
        }

      }
    }
  }

  .photoDown {
    height: 0;
    width: 750px;
    margin-top: 45px;
    border-bottom: 4px solid #fff;
  }

  .book {
    width: 750px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
    padding-top: 10px;
    padding-left: 15px;
    .userData {
      display: flex;
      .imgHeader {
        width: 80px;
        height: 80px;
      }
      .bookDescribe {
        height: 80px;
        width: 100%;
        margin-left: 20px;
        position: relative;
        .userName {
          .saneT1 {
            padding-right: 20px;
            border-right: 1px solid #000;
            color: #409eff;
          }
          .saneT2 {
            padding-left: 19px;
          }
        }
        .bookReply {
          width: 95%;
          height: 25px;
          padding-left: 10px;
          background-color: #aaa;
          border-radius: 6px;
          position: absolute;
          left: 0;
          bottom: 0;
          .sameT {
            padding-right: 30px;
            line-height: 25px;
            font-size: 14px;
          }
        }
      }
    }
    .bookDetail {
      margin-top: 10px;
      font-size: 14px;
    }
  }
</style>
