<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="输入原始密码">
            <el-input v-model="form.pass"></el-input>
        </el-form-item>

        <el-form-item label="输入修改密码">
            <el-input v-model="form.new"></el-input>
        </el-form-item>

        <el-form-item label="再次确认">
            <el-input v-model="form.enter"></el-input>
        </el-form-item>


        <el-form-item>
            <el-button type="primary" @click="onSubmit">确认</el-button>
            <el-button @click="clearForm">取消</el-button>
        </el-form-item>
    </el-form>
</template>


<script>
export default {
    data() {
        return {
            form: {
                pass: '',
                new: '',
                enter: ''
            }
        }
    },
    // 使用对象展开操作符 (...)
    created() {
        this.initialForm = { ...this.form };
    },

    methods: {
        onSubmit() {
            console.log('submit!');
        },
        clearForm() {
            this.form = { ...this.initialForm };
        }
    }
}
</script>