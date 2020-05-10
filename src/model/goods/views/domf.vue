<template>
<!--  国产水果 -->
  <div>
    <Table :operate="operate" :newly="newly" :columns="columns" />
  </div>
</template>
<script>
import Table from "../../../components/tabel";
export default {
  components: {
    Table
  },
  data() {
    return {
      operate: true, //是否显示操作栏
      newly: true, //是否显示新增按钮
      columns: [
        {
          prop: "id",
          label: "编号",
          "min-width": 80
        },
        {
          prop: "stuName",
          label: "水果种类",
          minWidth: 120
        },
        {
          prop: "sex",
          label: "水果名称",
          minWidth: 120
        },
        {
          prop: "className",
          label: "价格",
          minWidth: 160
        },
        {
          prop: "classGrade",
          label: "图片",
          minWidth: 150
        }
      ]
    };
  },
  methods: {
    //修改的信息，需要传id，去table组件，添加一个参数
    toUpdate(val) {
      window.console.log(val);
    },
    ////删除的信息，也需要一个id
    toDelete(val) {
      window.console.log(val);
    },
    //新增
    toNewly() {}
  }
};
</script>