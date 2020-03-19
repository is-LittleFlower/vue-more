import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入UI
import UI from '../packages/index.js'
// UI是一个变量，可以自定义，是一个对象，内部有install方法，可以直接Vue.use(UI)，它会调用install方法，传vue，Vue.component就会全局注册一个组件
// console.log(UI)
Vue.use(UI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
