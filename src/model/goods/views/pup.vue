<template>
<!--  果肉制品管理 -->
  <div>
    <Table :operate="operate" :newly="newly" :columns="columns" :url="url" />
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
      url:'/pup',
      operate: true, //是否显示操作栏
      newly: true, //是否显示新增按钮
      columns: [
        {
          prop: "id",
          label: "编号",
          "min-width": 80
        },
         {
          prop: "sku",
          label: "库存",
          minWidth: 120
        },
        {
          prop: "text",
          label: "商品名称",
          minWidth: 120
        },
        {
          prop: "price",
          label: "价格",
          minWidth: 160
        },
        {
          prop: "src",
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