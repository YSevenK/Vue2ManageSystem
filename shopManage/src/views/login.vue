<template>
    <div class="login-container">
        <el-form :model="ruleForm2" :rules="rules2" status-icon ref="ruleForm2" label-position="left" label-width="0px"
            class="demo-ruleForm login-page">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleRegister">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script>
export default {
    name: "login",
    data() {
        return {
            logining: false,
            ruleForm2: {
                username: "admin",
                password: "123456"
            },
            rules2: {
                username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
                password: [{ required: true, message: "请输入密码", trigger: "blur" }]
            },
            checked: false,
            registeredUser: {
                username: "admin",
                password: "123456"
            }
        };
    },
    methods: {
        handleSubmit(event) {
            this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                    this.logining = true;
                    if (
                        this.ruleForm2.username === this.registeredUser.username &&
                        this.ruleForm2.password === this.registeredUser.password
                    ) {
                        this.logining = false;
                        sessionStorage.setItem("user", this.ruleForm2.username);
                        this.$router.push({ path: "/index" });
                    } else {
                        this.logining = false;
                        this.$alert("用户名或密码错误！", "提示", {
                            confirmButtonText: "确定"
                        });
                    }
                } else {
                    console.log("error submit!");
                    return false;
                }
            });
        },

        handleRegister() {
            this.registeredUser = {
                username: "",
                password: ""
            };
            this.$router.push({ path: "/register" });
        }
    }
};
</script>
  
<style scoped>
.login-container {
    width: 100%;
    height: 100%;
    background-image: url(../assets/bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.login-page {
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

label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}

.title {
    text-align: center;
}
</style>
  