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
      >
      </quill-editor>

      <!--//底部发布-->
      <div class="footer">
        <div>
          标签：
          <div style="display: inline-block" v-if="category.length>0">
            <el-radio label="1" border size="mini">备选项1</el-radio>
          </div>
        </div>
        <el-button type="primary" class="btn">发布</el-button>
      </div>


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
          title: ''
        },
        category: [],
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
    .footer{
      margin-top: 10px;
    }
    .btn{
      margin-top: 10px;
    }
  }
</style>
<style>
  .ql-container {
    min-height: 300px;
  }
</style>
