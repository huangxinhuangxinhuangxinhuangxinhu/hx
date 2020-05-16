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
      url1: '/home',
      //添加
      url2:'/home',
      //修改
      url3:'/home'
    };
  }
};
</script>