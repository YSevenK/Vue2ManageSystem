<template>
    <el-container>
        <!-- width的宽度跟collapse一样动态控制 -->
        <el-aside width="collapse">
            <div class="logo" v-show="open">
                <h3><i class="el-icon-eleme"></i> 商家管理系统</h3>
            </div>
            <div class="logo" v-show="close">
                <h3><i class="el-icon-eleme"></i></h3>
            </div>
            <!-- :collapse="isCollapse"  class="el-menu-vertical" 动态控制导航菜单的收起与展开  router：让index作为 path 进行路由跳转 -->
            <el-menu default-active="$route.path" router :default-openeds="openeds" :collapse="isCollapse"
                class="el-menu-vertical">

                <el-menu-item index="/console">
                    <i class="el-icon-s-home"></i>
                    <span>后台首页</span>
                </el-menu-item>

                <el-menu-item index="/order">
                    <i class="el-icon-thumb"></i>
                    <span>订单管理</span>
                </el-menu-item>

                <el-submenu index="1">
                    <!-- 一级标题 -->
                    <template slot="title">
                        <i class="el-icon-shopping-cart-2"></i>
                        <span slot="title">商品管理</span>
                    </template>
                    <!--  二级标题 -->
                    <el-menu-item index="/goodslist">
                        <span slot="title">商品列表</span>
                    </el-menu-item>
                    <el-menu-item index="/goodsadd">
                        <span slot="title">商品添加</span>
                    </el-menu-item>
                    <el-menu-item index="/goodsclassify">
                        <span slot="title">商品分类</span>
                    </el-menu-item>
                </el-submenu>

                <el-menu-item index="/shopmanage">
                    <i class="el-icon-office-building"></i>
                    <span>店铺管理</span>
                </el-menu-item>

                <el-submenu index="2">
                    <!-- 一级标题 -->
                    <template slot="title">
                        <i class="el-icon-s-custom"></i>
                        <span slot="title">账号管理</span>
                    </template>
                    <!--  二级标题 -->
                    <el-menu-item index="/accountlist">
                        <span slot="title">账号列表</span>
                    </el-menu-item>
                    <el-menu-item index="/accountadd">
                        <span slot="title">添加账号</span>
                    </el-menu-item>
                    <el-menu-item index="/passmodify">
                        <span slot="title">修改密码</span>
                    </el-menu-item>
                </el-submenu>

                <el-submenu index="3">
                    <!-- 一级标题 -->
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span slot="title">销售统计</span>
                    </template>
                    <!--  二级标题 -->
                    <el-menu-item index="/goodscount">
                        <span slot="title">商品统计</span>
                    </el-menu-item>
                    <el-menu-item index="/ordercount">
                        <span slot="title">订单统计</span>
                    </el-menu-item>
                </el-submenu>
            </el-menu>

        </el-aside>
        <el-container>
            <el-header>
                <div class="trigger" @click="isShow">
                    <!-- 点击展开收起导航和切换对应图标 -->
                    <i class="el-icon-s-fold" v-show="open"></i>
                    <i class="el-icon-s-unfold" v-show="close"></i>

                </div>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </el-container>
</template>
  
<script>
export default {
    name: "index",
    data() {
        return {
            isCollapse: false, //导航栏默认为展开
            close: false, //第二个图标默认隐藏
            open: true, //默认显示第一个图标
        }
    },
    methods: {
        isShow() {
            this.isCollapse = !this.isCollapse;
            this.open = !this.open;
            this.close = !this.close;
        },
    }
}
</script>
  
<style scoped>
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    height: 100%;
    padding: 0 !important;
}

.el-aside {
    background-color: rgb(48, 65, 86);
    color: #333;
    height: 100vh;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
}

body>.el-container {
    margin-bottom: 40px;
}

.logo {
    height: 60px;
    line-height: 60px;
    background-color: rgb(48, 65, 86);
    color: #FFA500;
    text-align: center;
}

.logo h3 {
    margin: 0;
    height: 60px;
}

.el-menu {
    border-right-width: 0;
    background-color: #B3C0D1;
}

.el-menu-vertical:not(.el-menu--collapse) {
    width: 240px;
    background-color: #B3C0D1;

}

.trigger {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 54px;
}

.trigger i {
    font-size: 20px;
}

.trigger:hover {
    background-color: rgb(197, 213, 233);
}
</style>
  
  