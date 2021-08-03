const state = {
  Commit: true
}

//  mutations
const mutations = {
  increment (state, payload) {
    state.Commit = payload.name
    // state.count += 1
  }
}
const actions = {
  increment (context, payload) {
    context.commit('increment', payload)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
