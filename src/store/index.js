import Vue from 'vue'
import Vuex from 'vuex'
import Comment from './modules/Comment'
// 挂载Vuex
Vue.use(Vuex)
// 创建VueX对象
const store = new Vuex.Store({
  modules: {
    Comment
  }
})

export default store
