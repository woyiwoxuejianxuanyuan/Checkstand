<template>
  <div class="header">
    <div class="header__left">
      <ul class="left_ul">
        <li @click="CloseNav">
          <i class="el-icon-s-grid"></i>
        </li>
        <li style="font-size:24px">思讯天店</li>
        <li>休闲食品专版</li>
        <li class="Headquarters" @click="userinfo">
          <span>总 店</span>
          <i class="el-icon-arrow-down"></i>
        </li>
        <li class="lastli">
          <span>V1.1.66.103</span><br />
          <span>(20210805)</span>
        </li>
      </ul>
      <!-- //弹窗布局// -->
      <div class="userinfo" v-if="userinfoshow">
        <!-- <button @click="close">关闭弹窗</button> -->
        <i class="el-icon-circle-close close" @click="close" title="关闭窗口"></i>
        <p>总店</p>
        <ul class="userinfoul">
          <li>
            <span class="examined_label"> 商 户 号:<span></span></span>
            <span class="examined_text">68051658</span>
          </li>
          <li>
            <span class="examined_label">账&emsp;&emsp;号:<span></span> </span>
            <span class="examined_text">管理员</span>
          </li>
          <li>
            <span class="examined_label">有效期至: <span></span></span
            ><span class="examined_text">2021-09-05</span>
          </li>
        </ul>
        <div class="TimeLeft">剩余时间：31天</div>
        <ul class="AccountInformationModification">
          <li>
            <i class="el-icon-s-finance"></i><br />
            <span>续费</span>
          </li>
          <li>
            <i class="el-icon-bank-card"></i><br />
            <span>修改密码</span>
          </li>
          <li>
            <i class="el-icon-bank-card"></i><br />
            <span>绑定账号</span>
          </li>
        </ul>
            <div class="exit">退出</div>
      </div>
      <!-- //弹窗布局// -->
      <UserInformationPopUpWindow :nmsl = userinfoshow></UserInformationPopUpWindow>
    </div>
    <!-- 右边 -->
    <div class="header_right">
        <i style="color:white" class=" iconfont icon-chufangchujukitchen-chengzhongqi"></i>
        <i style="color:white" class=" iconfont icon-xianghujiaohuan-zuoyou1"></i>
        <i style="color:white" class=" iconfont icon-keyboard_icon"></i>
        <i style="color:white" class=" iconfont icon-hongbao"></i>
        <i style="color:white" class=" iconfont icon-unlock"></i>
        <i style="color:white" class=" iconfont icon-print"></i>
        <i style="color:white" class=" iconfont icon-download"></i>
        <i style="color:white" class=" iconfont icon-upload"></i>
        <i style="color:white" class=" iconfont icon-yiwen1"></i>
        <i style="color:green" class=" iconfont icon-xinhao"></i>
    </div>
  </div>
</template>
<script>
import UserInformationPopUpWindow from '@/components/UserInformationPopUpWindow/index.vue'
export default {
  data () {
    return {
      userinfoshow: false,
      NavShow: true
    }
  },
  methods: {
    userinfo () {
      this.userinfoshow = true
      console.log(this.userinfoshow)
    },
    close () {
      this.userinfoshow = false
      console.log(this.userinfoshow)
    },
    CloseNav () {
      this.$store.dispatch('Comment/increment', {
        name: this.NavShow = !this.NavShow
      })
    }
  },
  mounted () {},
  components: {
    UserInformationPopUpWindow
  }

}
</script>
<style scoped>
.header {
  height: 5%;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 88;
}
.header__left {
  padding-left: 12px;
  font-size: 30px;
}
.header__left >>> i {
  color: white;
}
.left_ul {
  display: flex;
  height: 45px;
  line-height: 45px;
}
.left_ul > li {
  color: white;
  padding: 0 10px;
}
.left_ul > :nth-child(2) {
  padding: 0;
}
.left_ul > li:nth-child(3) {
  font-size: 12px;
  padding-top: 7px;
}
.Headquarters {
  margin-left: 20px;
  margin-right: 20px;
  width: 100px;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  /* line-height: 45px; */
}
.Headquarters > span {
  color: #ccc;
}
.Headquarters > i {
  /* padding-top: 10px; */
  display: inline-block;
  color: #ccc;

  line-height: 45px;
}
.lastli {
  font-size: 12px;
  line-height: normal;
  margin-top: 6px;
}
.lastli > span {
  color: white;
}
.userinfo {
  text-align: center;
  position: absolute;
  top: 60px;
  left: 200px;
  width: 300px;
  height: 400px;
  background: white;
  border-radius: 20px;
  z-index: 10;
}
.userinfo > p {
  font-size: 18px;
  line-height: 80px;
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px dashed #ccc;
  font-weight: 600;
}
.userinfo:after,
.userinfo:before {
  border: solid transparent;
  content: " ";
  height: 0;
  top: 100%;
  position: absolute;
  width: 0;
}
.userinfo:after {
  border-width: 10px;
  border-bottom-color: #fff;
  top: -20px;
  right: 40px;
}
.userinfo > ul {
  font-size: 14px;
}
.userinfo >>> i {
  color: black;
}
.userinfoul {
  padding: 10px 0;
}
.userinfoul > li {
  padding: 2px 0;
}
.examined_label {
  text-align: justify;
  display: inline-block;
  width: 80px;
  height: 30px;
  vertical-align: top;
}
.examined_label > span {
  display: inline-block;
  padding-left: 100%;
}
.examined_text {
  display: inline-block;
  width: 80px;
  text-align: start;
}
.TimeLeft {
  font-size: 14px;
  background: black;
  color: white;
  width: 150px;
  margin: 0 auto;
  height: 24px;
  line-height: 24px;
  border-radius: 15px;
}
.AccountInformationModification {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  padding: 0 10px;
}
.AccountInformationModification > li {
  flex: 1;
  cursor: pointer;
}
.AccountInformationModification > li > i {
    padding: 6px;
    border-radius: 50%;
  font-size: 22px;
  background: #E8EFFF;
  color: #6C8BD3;
}
.AccountInformationModification>li>span{
    line-height: 32px;
}
.exit{
    width: 80%;
    margin: 0 10%;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    margin-top: 14px;
    font-size: 16px;
    border: 1px solid #6C8BD3;
    cursor: pointer;
}
.close{
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 6px;
}
.close:hover{
    background: #6C8BD3;
    border-radius: 50%;
}
.header_right>i{
    font-size: 20px;
    padding: 0 10px;
    cursor: pointer;
}
</style>
