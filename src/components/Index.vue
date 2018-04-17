<template>
  <div class="index">
    <!-- <div class="i-header">
      <div class="i-h-left">智能投放系统</div>
      <div class="i-h-right"></div>
    </div>
    <div class="i-section">
      <div class="i-s-left">
        <div class="i-s-new">新建广告</div>
        <ul class="i-s-uls">
          <router-link v-for='(item,idx) in this.leftList' :key='idx' :to='item.to' tag='li'><span>{{item.name}}</span></router-link>      
        </ul>
      </div>
      <div class="i-s-right">
        <router-view></router-view>
      </div>
    </div> -->
      
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="240px" style=" background: #022050; box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);">
        <div class="i-title">智能投放系统</div>
        <router-link class="i-new" to="/newadv" tag="div">新建广告</router-link>
        <el-menu :default-openeds="['1', '3']" router>
          <el-menu-item index="/indexbro"><i class="el-icon-message"></i>首页概括</el-menu-item>
          <el-submenu index>
            <template slot="title"><i class="el-icon-menu"></i><span class="i-t-guang">广告管理</span></template>
            <el-menu-item-group>
              <el-menu-item index="/advman/advpro">广告计划</el-menu-item>
              <el-menu-item index="/advman/advcre">广告单元</el-menu-item>
              <el-menu-item index="/advman/advuni">广告创意</el-menu-item>
            </el-menu-item-group>  
          </el-submenu>
          <el-menu-item index="/datacen"><i class="el-icon-setting"></i>数据中心</el-menu-item>
          <el-menu-item index="/workbox"><i class="el-icon-setting"></i>工具箱</el-menu-item>
        </el-menu>
      </el-aside>
    <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span>{{this.$store.state.username}}</span>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Index',
  data () {

      return {
        ...mapState(['username'])
      }
  },
  mounted() {
    console.log(localStorage.getItem('token'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    width: 1440px;
    height: 100%;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
  .el-menu{
    box-sizing: border-box;
    margin-top: 32px;
    background: #022050;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: rgba(255,255,255,0.65);
  }
  .i-t-guang{
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #FFFFFF;
  }
  .el-menu-item-group{
    background: #1C2941;
  }
  .el-menu-item{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
  }
  .i-title{
    width: 240px;
    height: 65px;
    text-align: center;
    line-height: 65px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 2px;
    background: #1C2941 100%;
  }
  .i-new{
    width: 100%;
    height: 54px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
    line-height: 54px;
    margin-top: 32px;
    background-image: linear-gradient(-90deg, #095DE1 0%, #081A6C 94%);
  }
  .el-header{
    margin:0;
    padding: 0;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08); 
  }
  .el-header span{
    float: left;
  }
  .el-main{
    margin:0;
    padding: 0;
    background: #f5f5f5
  }

</style>
