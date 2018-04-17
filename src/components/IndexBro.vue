<template>
  <div class="indexbro">
    <el-row :gutter="0">
      <el-col :span="6" style="padding:0;">
        <div class="e-c-iconfont">1</div>
        <div class="e-c-context">
          <div class="xianjin">现金账户</div>
          <div class="monery">¥ 126,560.00</div>
        </div>
      </el-col>
      <el-col :span="6" style="padding:0;">
        <div class="e-c-iconfont">1</div>
        <div class="e-c-context">
          <div class="xianjin">现金账户</div>
          <div class="monery">¥ 126,560.00</div>
        </div>
      </el-col>
    </el-row>
    <div class="i-box">
      <div class="i-b-header">
        <div class="i-h-title">整体情况</div>
        <div class="block">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="请选择日期">
          </el-date-picker>
        </div>    
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="近7天" name="first">
            
          </el-tab-pane>
          <el-tab-pane label="近30天" name="second"></el-tab-pane>
        </el-tabs>     -->
      </div>
      <el-row :gutter="0">
        <el-col :span="6" style="padding:0;" class="el-col-four">
          <div class="el-top">曝光量（次）</div>
          <div class="el-bottom">278,456</div>
        </el-col>
        <el-col :span="6" style="padding:0;" class="el-col-four">
          <div class="el-top">曝光量（次）</div>
          <div class="el-bottom">278,456</div>
        </el-col>
        <el-col :span="6" style="padding:0;" class="el-col-four">
          <div class="el-top">曝光量（次）</div>
          <div class="el-bottom">278,456</div>
        </el-col>
        <el-col :span="6" style="padding:0;" class="el-col-four">
          <div class="el-top">曝光量（次）</div>
          <div class="el-bottom">278,456</div>
        </el-col>
      </el-row>
      <div></div>
      <div class="i-b-bottom">
        <el-row>
          <div class="graph" ref="graph"></div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Echart,{init} from 'echarts'
export default {
  name: "IndexBro",
  data() {
    return {
      activeName: 'second',
      pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value1: '',
        value2: '',
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    let graphInstance = init(this.$refs.graph)
    let option = {
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
      }]
    }
    graphInstance.setOption(option)
  }
};
</script>

<style scoped>
  .indexbro {
    width: 100%;
    height: 100%;
  }
  .el-col {
    margin-top: 32px;
    margin-left: 24px;
    width: 368px;
    height: 111px;
    background: #ffffff;
    border-radius: 2px;
  }
  .e-c-iconfont {
    float: left;
    width: 60px;
    height: 60px;
    padding-left: 24px;
    padding-top: 27px;
  }
  .e-c-context {
    float: left;
    margin-left: 32px;
    width: 252px;
    height: 111px;
  }
  .xianjin {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
  }
  .monery {
    font-family: HelveticaNeue;
    font-size: 32px;
    color: rgba(0, 0, 0, 0.85);
  }
  .i-box {
    width: 1152px;
    height: 579px;
    margin-left: 24px;
    margin-top: 24px;
    background: #ffffff;
    border-radius: 2px;
  }
  .i-b-nav {
    display: inline-block;
    width: 1152px;
    height: 1px;
    border: 1px solid #e8e8e8;
  }
  .i-b-header {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
  }
  .i-h-title{
    width: 116px;
    height: 24px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    color: rgba(0,0,0,0.85);
    letter-spacing: 0;
    float: left;
    padding-left: 24px;
    padding-top: 20px;
  }
  .el-tabs{
    float: right;
    padding-top:20px;
    margin-right: 20px;
  }
  .block{
    float: right;
    width: 258px;
    height: 32px;
    padding-top:10px;
    margin-right: 20px;
  }
  .el-col-four{
    width: 240px;
    height: 79px;
    border: 1px solid #E8E8E8;
    border-radius: 2px;
    margin-top: 22px;
  }
  .el-top{
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: rgba(0,0,0,0.45);
  }
  .el-bottom{
    font-family: MicrosoftYaHei;
    font-size: 20px;
    color: rgba(0,0,0,0.85);
  }
  .i-b-bottom{
    width: 1148px;
    height: 285px;
  }
  .graph{
    width: 100%;
    height: 300px;
  }
</style>
