const state = {
  launched: 0
};

const mutations = {
  increment(state) {
    state.launched++;
    console.log("working")
  }
};
const actions = {};
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
