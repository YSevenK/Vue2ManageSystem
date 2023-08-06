<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="num" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="account" label="账号" width="180">
        </el-table-column>
        <el-table-column prop="password" label="密码">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                num: '1',
                account: '135678',
                password: '******'
            },{
                num: '2',
                account: '194140',
                password: '******'
            }, {
                num: '3',
                account: '149802',
                password: '******'
            }, {
                num: '4',
                account: '019801',
                password: '******'
            },]
        }
    }
}
</script>