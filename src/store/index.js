import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';


Vue.use(Vuex);

const state = {
    userInfo: null, //用户信息,
    login: true,
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})