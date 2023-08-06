<template>
    <div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed prop="name" label="商品名称" width="150">
            </el-table-column>
            <el-table-column fixed prop="classify" label="所属分类" width="150">
            </el-table-column>
            <el-table-column fixed prop="price" label="价格" width="150">
            </el-table-column>
            <el-table-column fixed prop="description" label="商品描述" width="150">
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
                <el-form-item label="商品分类" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="分类" :label-width="formLabelWidth">
                    <el-input v-model="form.classify" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="价格" :label-width="formLabelWidth">
                    <el-input v-model="form.price" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="描述" :label-width="formLabelWidth">
                    <el-input v-model="form.description" autocomplete="off"></el-input>
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
            tableData: [{
                name: '粉身碎骨小青龙',
                classify: '荤菜',
                price: '38￥',
                description: '是夏天的一道首选凉拌菜，味道可口。就是把洗净后的小青皮黄瓜直接用刀拍碎放入盘中，然后用酱醋麻油等佐料拌匀，端上餐桌供客人食用！'
            }, {
                name: '粉身碎骨小青龙',
                classify: '荤菜',
                price: '38￥',
                description: '是夏天的一道首选凉拌菜，味道可口。就是把洗净后的小青皮黄瓜直接用刀拍碎放入盘中，然后用酱醋麻油等佐料拌匀，端上餐桌供客人食用！'
            }, {
                name: '粉身碎骨小青龙',
                classify: '荤菜',
                price: '38￥',
                description: '是夏天的一道首选凉拌菜，味道可口。就是把洗净后的小青皮黄瓜直接用刀拍碎放入盘中，然后用酱醋麻油等佐料拌匀，端上餐桌供客人食用！'
            }, {
                name: '粉身碎骨小青龙',
                classify: '荤菜',
                price: '38￥',
                description: '是夏天的一道首选凉拌菜，味道可口。就是把洗净后的小青皮黄瓜直接用刀拍碎放入盘中，然后用酱醋麻油等佐料拌匀，端上餐桌供客人食用！'
            },]
        }
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
}
</script>