<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="num" label="订单号" width="150">
            </el-table-column>
            <el-table-column fixed prop="ordertime" label="下单时间" width="150">
            </el-table-column>
            <el-table-column fixed prop="phone" label="手机号" width="150">
            </el-table-column>
            <el-table-column fixed prop="name" label="收货人" width="100">
            </el-table-column>
            <el-table-column prop="address" label="配送地址" width="120">
            </el-table-column>
            <el-table-column prop="deliverytime" label="送达时间" width="120">
            </el-table-column>
            <el-table-column prop="note" label="用户备注" width="120">
            </el-table-column>
            <el-table-column prop="money" label="订单金额" width="120">
            </el-table-column>
            <el-table-column prop="state" label="订单状态" width="120">
            </el-table-column>

            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="editOrder(scope.row)">编辑</el-button>
                    <el-button type="text" size="small" @click="confirmDeleteOrder(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <!-- 编辑对话框 -->
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="订单号" :label-width="formLabelWidth">
                    <el-input v-model="form.num" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="下单时间" :label-width="formLabelWidth">
                    <el-input v-model="form.ordertime" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                    <el-input v-model="form.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="收货人" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="配送地址" :label-width="formLabelWidth">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="送达时间" :label-width="formLabelWidth">
                    <el-input v-model="form.deliverytime" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户备注" :label-width="formLabelWidth">
                    <el-input v-model="form.note" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="订单金额" :label-width="formLabelWidth">
                    <el-input v-model="form.money" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="订单状态" :label-width="formLabelWidth">
                    <el-input v-model="form.state" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="saveOrder">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>
  
<script>
import { MessageBox } from 'element-ui';

export default {
    methods: {
        editOrder(row) {
            this.title = '编辑';
            this.dialogFormVisible = true;
            this.form = JSON.parse(JSON.stringify(row));
        },
        deleteOrder(row) {
            const index = this.tableData.findIndex((item) => item.num === row.num);
            if (index !== -1) {
                this.tableData.splice(index, 1);
            }
            this.dialogFormVisible = false;
        },
        saveOrder() {
            const index = this.tableData.findIndex((item) => item.num === this.form.num);
            if (index !== -1) {
                // 更新对应的数据项
                this.tableData.splice(index, 1, this.form);
            }
            this.dialogFormVisible = false;
        },
        confirmDeleteOrder(row) {
            MessageBox.confirm('确定删除此条数据吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(() => {
                    this.deleteOrder(row);
                })
                .catch(() => {
                    // 取消删除操作
                });
        },
    },

    data() {
        return {
            formLabelWidth: '130px',
            title: '',
            dialogFormVisible: false,
            form: {},
            tableData: [{
                num: 189261,
                ordertime: '18:00:00',
                phone: '19730184821',
                name: '小王',
                address: '成都',
                deliverytime: '19:20:00',
                note: '加饭',
                money: '35￥',
                state: '已受理'
            },
            {
                num: 181261,
                ordertime: '9:00:00',
                phone: '14730184821',
                name: '张三',
                address: '北京',
                deliverytime: '9:20:00',
                note: '微辣',
                money: '85￥',
                state: '已受理'
            },
            {
                num: 114261,
                ordertime: '10:00:00',
                phone: '19730184821',
                name: '小六',
                address: '成都',
                deliverytime: '11:20:00',
                note: '加饭',
                money: '61￥',
                state: '已受理'
            },
            {
                num: 8989261,
                ordertime: '18:00:00',
                phone: '15730184821',
                name: '小张',
                address: '上海',
                deliverytime: '19:30:00',
                note: '加饭',
                money: '95￥',
                state: '已受理'
            },
            {
                num: 889261,
                ordertime: '14:00:00',
                phone: '18730184821',
                name: '小赵',
                address: '成都',
                deliverytime: '15:20:00',
                note: '加饭',
                money: '25￥',
                state: '已受理'
            },
            {
                num: 289261,
                ordertime: '17:00:00',
                phone: '13630184821',
                name: '小王',
                address: '厦门',
                deliverytime: '16:40:00',
                note: '麻辣',
                money: '45￥',
                state: '已受理'
            },
            ]
        }
    }
}
</script>