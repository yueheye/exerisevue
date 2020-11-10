<template>
  <!--这个div和浏览器同宽-->
  <div class="login_container">
    <!--login box 这个居中显示-->
    <div class="login_box">
      <!--增加一个头像div-->
      <div class="avator_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!--登陆表单区域-->
      <el-form  ref="resetFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!--用户名-->
        <el-form-item   prop="username">
          <el-input  v-model="loginForm.username"  prefix-icon="el-icon-user" ></el-input>
        </el-form-item >
        <!--密码-->
        <el-form-item  prop="password">
          <el-input   v-model="loginForm.password" prefix-icon="el-icon-star-on" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btns" >
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>


</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      loginForm :{
        username:'admin',
        password:'123456'
      },
      //表单的验证规则
      loginFormRules:{
        //验证用户名是否合法
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        //验证密码是否合法
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '密码在6-15之间', trigger: 'blur' }
        ]
      }

  }

  },
  methods:{
    resetLoginForm(){
      this.$refs.resetFormRef.resetFields();
    },
    login(){
      this.$refs.resetFormRef.validate(async valid =>{
        //console.log(valid)
        if (!valid)
          return;
        const {data:res} = await this.$http.post("login",this.loginForm);
        if (res.meta.status!==200)
          return this.$message.error("登陆失败");
       this.$message.success("登陆成功")
        //将token存储在 window.sessionStorage
        window.sessionStorage.setItem("token",res.data.token);
       this.$router.push("/home")
      });
    }
  }
}
</script>

<style lang="less" scoped>

  .login_container {
    height: 100%;
    // background-color: blueviolet;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

  }
  .avator_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%; //圆角的
    padding: 10px; //图片和外面div的间距
    box-shadow: 0 0 10px; //阴影部分
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50% );

    img {
      width: 100%; //图片和外面的avator_boxdiv一样大小
      height: 100%;
      border-radius: 50%; //圆角的
      background-color: #eee;
    }
  }
  .login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px; //间距 上下是0 左右是20px
    box-sizing: border-box;
  }
  .btns{
    display: flex;

    justify-content: flex-end;//表示尾部对其
  }
</style>
