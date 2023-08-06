<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="商品分类">
                <el-option label="荤菜" value="meat"></el-option>
                <el-option label="素材" value="vegetable"></el-option>
                <el-option label="汤类" value="vsoup"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="输入价格">
            <el-input v-model="form.price"></el-input>
        </el-form-item>


        <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="菜品性质">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="特价菜" name="type"></el-checkbox>
                <el-checkbox label="招牌菜" name="type"></el-checkbox>
                <el-checkbox label="特色菜" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>

        <el-form-item label="菜品描述">
            <el-input type="textarea" v-model="form.desc"></el-input>
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