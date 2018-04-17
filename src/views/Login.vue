<template>
  <div class="login">
    <el-form :model="formData" ref="loginBox">
        <el-form-item label="账号" prop="username" :rules="userRules">
            <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="passRules">
            <el-input  v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button  @click.native="login">提交</el-button>
            <el-button >重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from '../utils/request'
export default {
  name: 'Login',
  data() {
      return {
          formData:{
              username: '836505655@qq.com',
              password: ''
          },
          userRules:[
              {
                  required:true,
                  message: '账号不能为空'
              },
              {
                  type:'email',
                  message: '请输入正确的邮箱格式'
              }
          ],
          passRules:[
              {
                  required:true,
                  message: '密码不能为空'
              }
          ]
      }
      
  },
  methods: {
    login() { 
        this.$refs.loginBox.validate((isValid,options) => {
            if (isValid) {
                this.$store.dispatch('getToken', {
                    data: this.formData,
                    notify:this.$notify,
                    router:this.$router
                })
                // login(this.username, this.password, "111").then(res => {
                //     console.log(res)
                // })
            } else {
                this.$notify({
                    title: '错误',
                    message: '请填写正确的用户信息',
                    type: 'warning'
                })
            }
         })
     }
  }
}
</script>
