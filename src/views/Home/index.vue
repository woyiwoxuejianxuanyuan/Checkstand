<template>
    <div class="box">
        <Header></Header>
        <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '@/components/Header/index.vue'
import Navigation from '@/components/Navigation/index.vue'
export default {
  data () {
    return {}
  },
  components: {
    Header,
    Navigation
  }
}
</script>
<style scoped>
.box{
  height: 100%;
}
</style>
