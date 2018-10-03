<template>
  <div>
    <div class="writeNode">
      <div>
        <h2>标题</h2>
        <el-input class="inputTitle" v-model="formData.title"/>
      </div>
      <h2 class="content">
        内容
      </h2>
      <quill-editor
        v-model="formData.content"
        ref="myQuillEditor"
        :options="editorOption"
        @change="handleChange"
      >
      </quill-editor>

      <!--//底部发布-->
      <div class="footer">
        <div>
          标签：
          <div style="display: inline-block"
               v-if="category.length>0">
            <el-radio-group v-model="formData.category" @change="onRadioChange" size="medium">
              <el-radio-button
                v-for="(item,index) in category"
                :label="item.name"
                :key="item.name"
              >
                {{item.name}}
              </el-radio-button>
            </el-radio-group>
            <el-button @click="addCategory" class="addBtn" type="info" icon="el-icon-plus" circle></el-button>
          </div>
        </div>
        <el-button type="primary" class="btn" @click="handleTo">发布</el-button>
      </div>


    </div>
    <div>
      <el-dialog
        title="输入需要新增的分类名："
        :visible.sync="isShow"
        width="30%"
      >
        <el-input placeholder="请输入需要添加的分类名" v-model="categoryName.name"></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="isShow = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import 'quill/dist/quill.snow.css'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

  Quill.register('modules/ImageExtend', ImageExtend)
  export default {
    name: "index",
    components: {
      quillEditor
    },
    data() {
      return {
        formData: {
          content: '',
          title: '',
          contentText: '',
          category: ''
        },
        category: [],
        isShow: false,
        categoryName:{
          name:''
        },
        // 富文本框参数设置
        editorOption: {
          modules: {
            ImageExtend: {
              loading: true,
              name: 'img',
              action: 'https://qiniu.com',
              response: (res) => {
                return res.info
              }
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        }
      }
    },
    methods: {
      handleTo() {
        this.$axios.post('/article', this.formData).then(res => {
          if (res.code==200){
            this.$message.success('发布笔记成功')
            setTimeout(()=>{
              this.$router.push('/login')
            })
          } else {
            this.$message.error('发布笔记失败')
          }
        }).catch(err=>{
          console.log(this.formData)
          this.$message.error('请求服务器出错！')
        })
      },
      handleChange({quill, html, text}) {
        // console.log(text)
        this.formData.contentText = text
        this.formData.contentText = this.formData.contentText.substring(0, 200) + '...'
      },
      getCategories() {
        this.$axios.get('/category').then(res => {
          console.log(res)
          this.category = res.data
        })
      },
      onRadioChange(item) {
        // console.log("item", item);
        // console.log("formData.name", this.formData.category);
      },
      addCategory() {
          this.isShow = true
      },
      dialogVisible(){
        console.log(this.categoryName.name);
        this.$axios.post('/category',this.categoryName).then(res=>{
          console.log(res)
          this.getCategories()
          this.isShow = false
        })
      }
    },
    created() {
      this.getCategories()
    }
  }
</script>

<style scoped lang="scss">
  .writeNode {
    width: 1170px;
    margin-top: 20px;
    padding: 30px 20px;
    border-radius: 4px;
    background-color: #fff;
    .inputTitle {
      padding: 10px 0;
    }
    .content {
      padding-bottom: 10px;
    }
    .footer {
      margin-top: 10px;
      .addBtn {
        position: relative;
        left: 0;
        top: 2px;
        width: 40px;
        height: 36px;
      }
    }
    .btn {
      margin-top: 10px;
    }
  }
</style>
<style>
  .ql-container {
    min-height: 300px;
  }
</style>
