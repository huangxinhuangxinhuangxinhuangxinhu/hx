<template>
  <div class="center">
    <h1>管理员登录</h1>
    <el-form
      label-position="right"
      label-width="100px"
      ref="loginForm"
      :rules="rules"
      :model="loginForm"
    >
      <el-form-item label="用户名" prop="username" :error="errorMsg">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :error="errorMsg">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('numberValidateForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data() {
    return {
        errorMsg:'',
      loginForm: {
        username: "",
        password: "",
        mdl:true
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods:{
      submitForm(){
          this.$refs.loginForm.validate(async (valid) => {
            if (valid) {
                // 校验成功发起ajax请求
                console.log('success');

                let {username,password} = this.loginForm;
                let {data} = await this.$axios.post('http://localhost:1910/superUser',qs.stringify(
                    {
                        username,
                        password
                        }
                ));
              
                if(data.code == 0){
                    // 获取token并保存到本地
                    localStorage.setItem('token',data.token);
                    this.$router.push('../pages/manage');
        
                }else{
                    // console.log('不行')
                    this.errorMsg = '用户名或密码错误'
                }
            } else {
                console.log('error submit!!');
                return false;
            }
        });
      }
  }
};
</script>

<style lang="scss">
body{
  background-color: rgba(53, 24, 24, 0.836);
}
.center{
  width:500px;
  margin-left:30% ;
  margin-top: 10%;
  h1{
    text-align: center;
    padding-bottom: 30px;
  }
.el-button{
  width: 100px;
  margin-left: 30%
}
}
</style>