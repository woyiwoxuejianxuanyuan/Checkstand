<template>
  <div class="box">
    <div class="box_main">
      <div class="mian_left">
        <div class="mian_left_header">
          <!-- 用户身份以及实时获取本地时间 -->
          <div class="main_left_header">
            <div class="user">收银员：1001(管理员)</div>
            <div class="timer">时间：{{ nowDate }} {{ nowTime }}</div>
          </div>
          <!--  -->
          <!-- 上一单以及找零 -->
          <div class="main_left_uporder">
            <div><el-button size="mini" type="primary">上一单</el-button></div>
            <div>找零：{{ Zeros }}</div>
          </div>
          <!--  -->
          <!-- 选择营业员 会员 -->
          <div class="ChooseArea">
            <div class="SellingSalesperson">
              <i class="iconfont icon-clerk"></i> 选择营业员
            </div>
            <div class="SelectionMember">
              <i class="iconfont icon-xinbaniconshangchuan-"></i> 选择会员
            </div>
          </div>
          <!--  -->
          <!-- 搜索框 -->
          <div class="search bar1">
            <form>
              <input type="text" placeholder="请输入货号/自编码/大写拼音码" />
              <i class="iconfont icon-linedesign-12"></i>
            </form>
          </div>
          <!--  -->
        </div>
        <!-- 下半部分 也就是订单内容部分 妈的zz -->
        <div class="main_left_order">
          <div class="noorder">
            <!-- 订单内容 -->
            <div class="OrderDetails">
              <img v-if="!this.dataShow" src="../../../static/images/buycart.png" alt="" />
              <Orderlist v-if="this.dataShow" :datas=dataShow :pageSize = pageSize :currentPage = currentPage></Orderlist>
            </div>
            <!-- 订单内容结束 -->
            <div class="OrderOperation flex">
              <div class="OrderOperation_left flex">
                <div class="OrderOperation_left_Cancel">
                  <i class="iconfont icon-shanchu"></i> 整单取消
                </div>
                <div class="OrderOperation_left_Order">
                  <i class="iconfont icon-qudan"></i> 取单
                </div>
              </div>

              <div class="OrderOperation_right flex">
                <div class="OrderOperation_left_up" @click="up">
                  <i class="iconfont icon-shangsanjiaoxing"></i>
                </div>
                <div class="OrderOperation_left_down" @click="down">
                  <i class="iconfont icon-xiasanjiaoxing"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
      <!-- 底部订单操作 -->
      <div class="Pay">
        <div class="sixun">思讯</div>
        <div class="zidingyi">
          <span>自定义付款</span>
        </div>
        <div class="jiezhang">结账</div>
      </div>
      <!-- 太逆天了 -->
    </div>
    <!-- 右边商品详情等 -->
    <div class="box_main2">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="未分类" name="first">
            <div class="Uncategorized">
              <Uncategorized :datas=shoplist></Uncategorized>
            </div>
          </el-tab-pane>
          <el-tab-pane label="休闲零食" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="饮料" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="饼干" name="fourth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="进口零食" name="fifth">进口零食</el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>
<script>
import Uncategorized from '@/components/Uncategorized/index.vue'
import datas from '../../../static/json/Uncategorized.json'
import Orderlist from '@/components/Orderlist/index.vue'
export default {
  data () {
    return {
      nowDate: null, // 存放年月日变量
      nowTime: null, // 存放时分秒变量
      timer: '', // 定义一个定时器的变量
      currentTime: new Date(), // 获取当前时间
      Zero: 0.0,
      activeName: 'first', // tab切换变量
      shoplist: datas,
      //  分也去所用变量
      totalPage: [],
      // 每页显示数量
      pageSize: 5,
      // 共几页
      pageNum: 1,
      // 当前显示的数据
      dataShow: '',
      // 默认当前显示第一页
      currentPage: 1
    }
  },
  created () {
    this.timer = setInterval(this.getTime, 1000)
  },
  methods: {
    getTime () {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minute = date.getMinutes()
      const second = date.getSeconds()
      // const str = ''
      if (this.hour > 12) {
        this.hour -= 12
        this.str = ' AM'
      } else {
        this.str = ' PM'
      }
      this.month = check(month)
      this.day = check(day)
      this.hour = check(hour)
      this.minute = check(minute)
      this.second = check(second)
      function check (i) {
        const num = i < 10 ? '0' + i : i
        return num
      }
      this.nowDate = year + '年' + this.month + '月' + this.day + '日'
      this.nowTime =
        this.hour + ':' + this.minute + ':' + this.second + this.str
    },
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    up () {
      if (this.currentPage === 1) return
      this.dataShow = this.totalPage[--this.currentPage - 1]
    },
    down () {
      if (this.currentPage === this.pageNum) return
      this.dataShow = this.totalPage[++this.currentPage - 1]
    }
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除定时器
    }
  },
  computed: {
    Buycarts () {
      return this.$store.state.Buycarts.Commit
    },
    Zeros: function () {
      return this.Zero.toFixed(2)
    }
  },
  watch: {
    Buycarts: {
      deep: true,
      handler (newQuestion, oldQuestion) {
        // console.log(newQuestion)
        let datas = []
        for (let i = 0; i < newQuestion.length; i++) {
          datas.push(newQuestion[i])
        }
        // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
        this.pageNum = Math.ceil(datas.length / this.pageSize) || 1
        //  获取分页内容
        for (let j = 0; j < this.pageNum; j++) {
          this.totalPage[j] = datas.slice(
            this.pageSize * j,
            this.pageSize * (j + 1)
          )
        }
        this.dataShow = this.totalPage[this.currentPage - 1]
        // console.log(this.dataShow)
      }
    }
  },
  components: {
    Uncategorized,
    Orderlist
  },
  mounted () {
    // console.log(this.Buycarts)
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.box_main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.mian_left {
  width: 500px;
  height: 95%;
  background: #fff;
  border-radius: 10px;
}
.main_left_header {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}
.main_left_uporder {
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
  background: #0d47a1;
  height: 40px;
  line-height: 40px;
}
.main_left_uporder > div {
  color: white;
}
.ChooseArea {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}
.SellingSalesperson {
  border: 2px solid #42a5f5;
  padding: 4px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background: #42a5f5;
  font-weight: 400;
  box-shadow: 5px 5px 5px #ccc;
}
.SelectionMember {
  border: 2px solid #42a5f5;
  padding: 4px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background: #42a5f5;
  font-weight: 400;
  box-shadow: 5px 5px 5px #ccc;
}
.SellingSalesperson:hover {
  background: #64b5f6;
}
.SelectionMember:hover {
  background: #64b5f6;
}
/* 搜索框style */
.bar1 {
  height: 50px;
  line-height: 50px;
}
.bar1 > form {
  width: 100%;
  height: 80%;
  position: relative;
  border: none;
}
.bar1 input {
  border: 2px solid #1e88e5;
  border-radius: 15px;
  background: #e1f5fe;
  color: #000;
  height: 100%;
  width: 90%;
  margin: 0 5%;
  box-sizing: border-box;
  outline: none;
  padding-left: 4px;
  box-shadow: 5px 5px 5px #ccc;
}
.bar1 >>> i {
  position: absolute;
  right: 35px;
  font-size: 20px;
  color: #1e88e5;
  cursor: pointer;
}
.mian_left_header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 30px;
  height: 20%;
}
.main_left_order {
  width: 100%;
  height: 75%;
}
.noorder {
  width: 100%;
  height: 100%;
  position: relative;
}
.OrderDetails{
  width: 100%;
  height: 100%;
  padding-top: 10px;
}
.OrderDetails > img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  vertical-align: middle;
  padding-top: 50%;
}
.flex {
  display: flex;
}
.OrderOperation {
  width: 100%;
  position: absolute;
  bottom: 0px;
  justify-content: space-around;
}
.OrderOperation_left > div {
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
}
.OrderOperation_right > div {
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
}
.OrderOperation_left_Cancel {
  background: #e8efff;
  border-radius: 8px;
  color: #75b9f6;
}
.OrderOperation_left_Order {
  border-radius: 8px;
  color: white;
  background: #6c8bd3;
}
.OrderOperation_left_up {
  border: 1px solid #ccc;
  border-radius: 8px;
}
.OrderOperation_left_down {
  border: 1px solid #ccc;
  border-radius: 8px;
}
.OrderOperation_left_up > i {
  padding: 0 10px;
  font-size: 18px;
}
.OrderOperation_left_down > i {
  padding: 0 10px;
  font-size: 18px;
}
.Pay {
  width: 100%;
  height: 40px;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
}
.Pay > div {
  flex: 1;
  color: white;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.sixun {
  background: #3b7bf6;
  border-radius: 10px 0 0 10px;
}
.zidingyi {
  background: #535a6c;
  margin-left: 4px;
  margin-right: 4px;
  box-sizing: border-box;
}
.jiezhang {
  background: #05cd72;
  border-radius: 0px 10px 10px 0px;
}
.box_main2 {
  width: 100%;
  height: 97%;
  margin-left: 10px;
  border-radius: 10px;
  padding: 14px;
}
.Uncategorized{
  height: 100%;
}
</style>
