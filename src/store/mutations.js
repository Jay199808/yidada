let mutations = {
  saveToken (state, payload) {
    state.token = payload
  },
  saveUser (state, payload) {
    console.log(state)
    console.log(payload)
    state.username = payload
  }
}
export default mutations
