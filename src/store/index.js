/**
 * 尹咸彪
 * 2018-10-18
 * modules参考：https://vuex.vuejs.org/zh/guide/modules.html
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules
})

export default store

