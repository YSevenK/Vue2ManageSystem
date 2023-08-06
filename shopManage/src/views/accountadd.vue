<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="密码">
            <el-input v-model="form.price"></el-input>
        </el-form-item>

        <el-form-item label="选择角色">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="管理员" name="type"></el-checkbox>
                <el-checkbox label="员工" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">添加</el-button>
            <el-button @click="clearForm">取消</el-button>
        </el-form-item>
    </el-form>
</template>


<script>
export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                price: ''

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