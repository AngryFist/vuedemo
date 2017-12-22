//import Vuex from 'vuex'
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import autoGeo from '@/components/order/autogeo'

//Vue.use(Vuex)
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'orderMain',
      component: autoGeo
    }
  ]
})
