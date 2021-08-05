<template>
    <div class="box" v-if="newValue">
        <div class="leftNavigation">
            <ul class="Navigation_ul">
                <li :class="{active:actived===index}" v-for="(item,index) in NavList" :key="index" @click="activedshowfun(item,index)">
                    <i :class="['iconfont',item.class,{ color:actived===index }]"></i><br>
                    <span :class="{color:actived===index}">{{ item.title }}</span>
                </li>
            </ul>
            <p class="into">
                <i class="iconfont icon-houtai2"></i><br>
                <span>进入后台</span>
            </p>
        </div>
        <div class="main">
            <CheckoutCounter></CheckoutCounter>
        </div>
    </div>
</template>
<script>
import CheckoutCounter from '@/components/CheckoutCounter/index.vue'
export default {
  data () {
    return {
      actived: 0,
      NavList: [
        {
          title: '收银台',
          class: 'icon-shouyintai'
        },
        {
          title: '微订单',
          class: 'icon-dingdan'
        }, {
          title: '查交易',
          class: 'icon-jiaoyijilu'
        }, {
          title: '查库存',
          class: 'icon-kucun'
        },
        {
          title: '交接班',
          class: 'icon-iconku-'
        }, {
          title: '设置',
          class: 'icon-shezhi'
        }, {
          title: '客服',
          class: 'icon-kefu'
        }
      ]
    }
  },
  methods: {
    activedshowfun (item, index) {
      this.actived = index
    }
  },
  computed: {
    newValue () {
      return this.$store.state.Comment.Commit
    }
  },
  components: {
    CheckoutCounter
  }
}
</script>
<style scoped>
.box{
    height: 95%;
    display: flex;
}
.leftNavigation{
    position: relative;
    width: 70px;
    background: black;
    height: 100%;
    color: white;
    text-align: center;
    padding-top: 0px;
box-sizing: border-box;
}
.Navigation_ul>li{
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
}
.Navigation_ul>>>span,i{
    color: white;
}
.Navigation_ul>>>i{
    font-size: 20px;
    display: inline-block;
    margin-bottom: 14px;
}
.Navigation_ul>>>span{
    font-size: 12px;
}
.active{
    background: white;
    width: 60px;
    margin-left: 10px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px 0px 0px 10px;
}
.color{
    color: black!important;
    display: inline-block;
}
.main{
    width: 100%;
    height: 100%;
    background: #E6EDF5;
    padding: 10px;
    box-sizing: border-box;
}
.into{
    font-size: 12px;
    margin-left: 10px;
    position: absolute;
    bottom: 14px;
    border-top: 1px solid #ccc;
    padding-top: 10px;
}
.into>span{
    color: white;
}
</style>
