<template>
    <div class="Uncategorized_box">
        <ul class="shopul">
            <li v-for="(item,index) in datas" :key="index" @click="AddToTheCart(item,index)">
                <img :src="item.imgsrc" alt="">
                <p>{{ item.title }}</p>
                <u>￥{{ item.price }}</u>
            </li>
        </ul>
    </div>
</template>
<script>
// import datas from '../../../static/json/Uncategorized.json'
export default {
  props: ['datas'],
  data () {
    return {
    //   shoplist: datas
    }
  },
  methods: {
    AddToTheCart (item, index) {
      this.$store.dispatch('Buycarts/increment', {
        name: item
      })
    }
  }}
</script>
<style scoped>
.Uncategorized_box{
    width: 100%;
    height: 100%;
}
img{
    width: 125px;
    height: 95px;
    padding: 6px;
}
.shopul{
    display: flex;
    flex-wrap: wrap;
}
.shopul>li{
    margin: 4px 10px;
    width: 145px;
    height: auto;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
    border-radius: 10px;
    cursor: pointer;
}
.shopul>>>p{
    font-size: 12px;
    white-space:nowrap;
    text-align: start;
    padding: 10px 0;
    font-weight: 600;
    font-size: 14px;
}
.shopul>>>u{
    color: salmon;
}
</style>
