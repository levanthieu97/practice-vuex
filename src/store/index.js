import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';
import dashboard from 'modules/dashboard/store';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    dashboard
  },
  
  strict: process.env.NODE_ENV !== 'production'
})
