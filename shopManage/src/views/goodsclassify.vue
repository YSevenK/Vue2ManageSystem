<template>
    <div>
        <el-table :data="tableData" style="width: 100%">
            <!-- 表格列定义 -->
            <el-table-column fixed prop="num" label="序号" width="150"></el-table-column>
            <el-table-column fixed prop="classify" label="分类" width="150"></el-table-column>
            <el-table-column fixed prop="state" label="状态" width="150">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                </template>
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="confirmDeleteOrder(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 编辑对话框 -->
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="序号" :label-width="formLabelWidth">
                    <el-input v-model="form.num" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="分类" :label-width="formLabelWidth">
                    <el-input v-model="form.classify" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="状态" :label-width="formLabelWidth">
                    <el-switch v-model="form.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
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
    data() {
        return {
            formLabelWidth: '130px',
            title: '',
            dialogFormVisible: false,
            form: {},
            tableData: [
                {
                    num: '1',
                    classify: '荤菜',
                    state: true,
                },
                {
                    num: '2',
                    classify: '素菜',
                    state: true,
                },
                {
                    num: '3',
                    classify: '汤类',
                    state: true,
                },
            ],
        };
    },
    methods: {
        handleEdit(row) {
            this.title = '编辑';
            this.dialogFormVisible = true;
            this.form = JSON.parse(JSON.stringify(row));
        },
        handleDelete(row) {
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
};
</script>