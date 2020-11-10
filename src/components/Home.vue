<template>


  <el-container class="home-container">
    <!--头部区域-->
    <el-header>
      <div>
        <img src="../assets/dianpu.png" style="width: 50px;height:50px;">
        <span>数据库管理平台</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>

    </el-header>
    <!--页面主体区域-->
    <el-container>
      <!--左边侧边栏-->
      <el-aside width="200px">
        <el-menu background-color="#5f9ea1">
          <!--一级菜单-->
          <el-submenu index="1">
            <!--一级菜单模板区域-->
            <template slot="title">
              <!--图标-->
              <i class="el-icon-location"></i>
              <!--文本-->
              <span>导航一</span>
            </template>
            <!--二级菜单-->
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--图标-->
                <i class="el-icon-location"></i>
                <!--文本-->
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>

      </el-aside>
      <!--右侧主体-->
      <el-main>Main</el-main>
    </el-container>
  </el-container>


</template>

<script>
export default {
  name: "Home",
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/push");
    }
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }

  .el-header {
    background-color: #5f9ea1;
    display: flex; /*选择弹性布局*/
    justify-content: space-between; /*两端布局，让div和按钮属于两个模块然后可以两端布局*/
    padding-left: 0; /*左边图片贴边，不要有空格*/
    align-items: center; /*项目都居中 ，为的是登出按钮都居中了*/
    color: whitesmoke; /*文本变白色*/
    font-size: 20px; /*字体大小*/

    > div { /*只针对div部分*/
      display: flex; /*选择弹性布局*/
      align-items: center; /*div中的类目居中*/

      span { /*div中 边界变为15px*/
        margin: 15px;
      }
    }
  }

  .el-aside {
    background-color: #5f9ea1;
  }

  .el-main {
    background-color: whitesmoke;
  }
</style>
