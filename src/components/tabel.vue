<template>
  <div class="table">
    <el-button type="primary" size="small" v-if="newly" @click="onNewly">新增</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(item,index) in columns "
        :prop="item.prop"
        :label="item.label"
        :min-width="item.minWidth"
        :key="index"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="100" v-if="operate">
        <template>
          <el-button type="text" size="small" @click="onUpdate">修改</el-button>
          <el-button type="text" size="small" @click="onDelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    operate: {
      type: Boolean,
      default() {
        return false;
      }
    },
    newly:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  data() {
    return {
      currentPage: 1,
      total: 10,
      value: true,
      tableData: [
        {
          id: "1",
          studentName: "王小虎",
          studentId: "20160252",
          specialty: "计算机",
          grade: "161",
          studentPhone: "188888888",
          studentEmail: "2747@163.com",
          paperTopic: "划水",
          teacherId: "10086",
          teacherName: "呼哈大",
          teacherAcademic: "全职",
          teacherPhone: "18888888",
          teacherEmail: "545@163.com",
          disposeResult: "审核通过",
          备注: ""
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("pagination", val);
    },
    handleCurrentChange(val) {
      this.$emit("pages", val);
    },
    onUpdate(val) {
      this.$emit("update", val);
    },
    onDelete(val) {
      this.$emit("Delete", val);
    },
    onNewly(){
      this.$emit('Newly')
    }
  }
};
</script>
<style lang="scss" scoped>
.table {
  .pagination {
    .el-pagination {
      padding-top: 10px;
      float: right;
    }
  }
}
</style>