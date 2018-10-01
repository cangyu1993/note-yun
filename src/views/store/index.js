import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    code: 0,
    userData:{
      avatar:'',
      email:'',
      username:''
    }
  },
  mutations: {
    'CHANGE_CODE'(state, payload) {
      state.code = payload
      // console.log(state.code)
    },
    'CHANGE_USERDATA' (state,payload){
      state.userData = payload
    }
  },
})

export default store;
