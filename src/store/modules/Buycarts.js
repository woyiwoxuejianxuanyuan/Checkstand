const state = {
  Commit: [ ]
}

//  mutations
const mutations = {
  increment (state, payload) {
    state.Commit.push(payload.name)
  },
  add (state, payload) {
    console.log(payload.id)
    state.Commit[payload.id].count += 1
    state.Commit[payload.id].Subtotal = payload.UnitPrice * state.Commit[payload.id].count
  },
  reduce (state, payload) {
    state.Commit[payload.id].count--
    state.Commit[payload.id].Subtotal = payload.UnitPrice * state.Commit[payload.id].count
    // if (state.Commit[payload.id].count === 0) {
    //   state.Commit.splice(payload.id)
    // }
  }
}
const actions = {
  increment (context, payload) {
    context.commit('increment', payload)
  },
  add (context, payload) {
    context.commit('add', payload)
  },
  reduce (context, payload) {
    context.commit('reduce', payload)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
