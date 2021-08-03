<template>
    <div class="box" v-if="nmsl">
    </div>
</template>
<script>
export default {
  props: {
    nmsl: Boolean
  },
  data () {
    return {}
  },
  mounted () {
    console.log(this.nmsl)
  }
}
</script>
<style scoped>
.box{
    position: fixed;
    top: 45px;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    z-index: 9;
}
</style>
