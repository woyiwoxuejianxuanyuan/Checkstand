<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
@import "./../static/icon/iconfont.css";
@import "./../static/css/global.scss"; /*引入公共样式*/
@import "./../static/css/font.scss"; /*引入公共字体样式*/
html,body,#app{
height: 100%;
}
</style>
