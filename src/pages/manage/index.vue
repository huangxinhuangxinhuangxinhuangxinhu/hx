<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu
        :default-openeds="['1', '3']"
        router
        active-text-color="#409EFF" 
        background-color="#304156"
        text-color="#fff"
      >
      <!--    active-text-color="#409EFF"   高亮颜色
              background-color="#304156"    背景颜色
              text-color="#fff"             字体颜色
       -->
        <el-menu-item index="/manage/home">
          <i class="el-icon-setting"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu v-for="item in routerList" :key="item.path" :index="item.path">
          <template slot="title">
            <i :class="item.Iconfont"></i>
            {{item.name}}
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="data in item.children"
              :key="data.path"
              :index="data.path"
            >{{data.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
      <i class="el-icon-error" @click="gotoLogin"></i>
      </el-header>

      <el-main>
        <!-- 这里是manage右边切换  3级路由 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import routerList from "../../const/router";
export default {
  data() {
    return {
      routerList
    };
  },
  methods:{
    gotoLogin(){
        this.$router.push({name:'login'});
    }
  }
};
</script>
<style lang="scss">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  //这里修改导航栏的父元素背景颜色
  color: #333;
}

.el-container {
  height: 100% !important;
  .el-aside {
    height: 100%;
  }
  .el-icon-error{
    font-size: 50px;
  }
}
</style>