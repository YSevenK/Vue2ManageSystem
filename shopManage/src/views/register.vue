<template>
    <div class="register-container">
        <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm" label-position="left" label-width="0px"
            class="demo-ruleForm register-page">
            <h3 class="title">用户注册</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="registering">注册</el-button>
            </el-form-item>
            <el-form-item style="width:100%;">
                <router-link to="/login">返回登录</router-link>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script>
export default {
    name: "register",
    data() {
        return {
            registering: false,
            ruleForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    methods: {
        handleSubmit(event) {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.registering = true;
                    // 将注册的用户信息传递给登录页面
                    this.$router.push({ path: '/login', query: { registeredUser: this.ruleForm } });
                } else {
                    console.log('error submit!');
                    return false;
                }
            });
        }
    }
};
</script>
  
<style scoped>
.register-container {
    width: 100%;
    height: 100%;
    background-image: url(../assets/bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.register-page {
    border-radius: 5px;
    width: 350px;
    padding: 35px 35px 15px;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    margin: 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.title {
    text-align: center;
    margin-bottom: 20px;
}
</style>
  