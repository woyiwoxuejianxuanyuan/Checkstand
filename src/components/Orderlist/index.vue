<template>
  <div class="shoplist_box">

      <ul class="uls">
          <!-- <li v-for="(item,index) in shoperlist" :key="index">
              {{ item.title }}
              {{ item.price }}
          </li> -->
          <li v-for="(item,index) in datas" :key="index" @click="YouAreTheOne(index)" :class="{activedshow:actived===index+ pageSize * (currentPage - 1)}">
                <p class="title">{{index + pageSize *( currentPage -1  ) +1}}. {{ item.title }}{{ item.Specify ? '' : '(未指定)'}}</p>
                <em class="coding">{{ item.coding }}</em>
                <div class="price">
                    <ul>
                    <li class="UnitPrice">单价：￥{{ item.price }}</li>
                    <li class="Subtotal">小计：￥{{ item.Subtotal }}</li>
                </ul>
                    <div class="Decrease">
                        <i class="el-icon-remove-outline Reduce"  @click="reduce(item,index)"></i>
                        <div class="count">{{ item.count }}</div>
                        <i class="el-icon-circle-plus-outline Add" @click="add(item,index)"></i>
                    </div>
                </div>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  props: ['datas', 'pageSize', 'currentPage'],
  data () {
    return {
      actived: -1
    }
  },
  methods: {
    YouAreTheOne (index) {
      this.actived = index + this.pageSize * (this.currentPage - 1)
    },
    reduce (item, index) {
      this.$store.dispatch('Buycarts/reduce', {
        id: index + this.pageSize * (this.currentPage - 1),
        UnitPrice: item.price
      })
    },
    add (item, index) {
      //   console.log(index + this.pageSize * (this.currentPage - 1))
      this.$store.dispatch('Buycarts/add', {
        id: index + this.pageSize * (this.currentPage - 1),
        UnitPrice: item.price
      })
    }
  },
  computed: {
    Buycarts () {
      return this.$store.state.Buycarts.Commit
    }
  },
  watch: {
    Buycarts: {
      deep: true,
      handler (newQuestion, oldQuestion) {
        console.log(newQuestion)
      }
    }
  }
}
</script>
<style scoped>
.shoplist_box {
  width: 90%;
  height: 90%;
  /* box-sizing: border-box; */
  /* overflow: hidden; */
  margin: 0 auto;
  border: 1px solid #ccc;
}
.uls{
    height: 100%;
}
.uls>li{
    height: 20%;
    border-bottom: 1px dashed #ccc;
    border-left: 5px solid #fff
}
.title{
    font-weight: 500;
    font-size: 16px;
}
.coding{
    font-style: normal;
    font-size: 14px;
    color: #ccc;
}
.price>ul>li{
    font-size: 12px;
}
.coding,.price{
    padding: 0 10px;
}
.price{
    display: flex;
    justify-content: space-between;
    padding-top: 6%;
    align-items: center;
}
.UnitPrice{
    color: #ccc;
}
.Subtotal{
    color: #0D47A1;
}
.activedshow{
    border-left: 5px solid #42A5F5!important;
}
.Decrease{
    display: flex;
    justify-content: center;
    align-items: center;
}
.Reduce,.Add{
    /* padding: 10px; */
    font-size: 28px;
}
.Add{
    color: #0277BD;
    background: #E1F5FE;
    border-radius: 50%;
}
.Reduce{
    color: #0277BD;
    background: white;
}
.count{
    padding: 0 10px;
}
.uls>li:nth-child(5){
    border-bottom: none;
}
</style>
