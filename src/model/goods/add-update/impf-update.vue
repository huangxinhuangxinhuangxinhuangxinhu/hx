<template>
  <div>
    <BoxUpdate :url1="url1" :url2="url2" :url3="url3" />
  </div>
</template>
<script>
import BoxUpdate from "../../../components/list";
export default {
  components: {
    BoxUpdate
  },
  data() {
    return {
      //根据id查询数据
      url1: '/impf',
      //添加
      url2:'/impf',
      //修改
      url3:'/impf'
    };
  }
};
</script>