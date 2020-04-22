import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import Search from './Search.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Search)
}).$mount('#app')
