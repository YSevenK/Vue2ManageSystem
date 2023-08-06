<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="店铺名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类">
            <el-select v-model="form.region" placeholder="点击选择">
                <el-option label="多功能餐厅" value="muti"></el-option>
                <el-option label="风味小吃" value="flavor"></el-option>
                <el-option label="西餐厅" value="Western"></el-option>
                <el-option label="自助餐厅" value="self"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="配送价格">
            <el-input v-model="form.price"></el-input>
        </el-form-item>

        <el-form-item label="配送时间">
            <el-input v-model="form.price"></el-input>
        </el-form-item>

        <el-form-item label="配送描述">
            <el-input v-model="form.price"></el-input>
        </el-form-item>

        <el-form-item label="店铺评分">
            <el-input v-model="form.price"></el-input>
        </el-form-item>

        <el-form-item label="配送销量">
            <el-input v-model="form.price"></el-input>
        </el-form-item>

        <el-form-item label="活动">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="在线支付满15.9减5" name="type"></el-checkbox>
                <el-checkbox label="可口可乐全场8折" name="type"></el-checkbox>
                <el-checkbox label="双人特色套餐" name="type"></el-checkbox>
                <el-checkbox label="儿童套餐" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>

        <el-form-item label="营业时间">
            <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }">
            </el-time-select>
            <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '23:30',
                minTime: startTime
            }">
            </el-time-select>
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
            },
            startTime: '',
            endTime: ''
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