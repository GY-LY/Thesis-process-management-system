import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router"
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({

  render: h => h(App),
  router
}).$mount('#app')
