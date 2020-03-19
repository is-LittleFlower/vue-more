// 导入MyButton组件
import MyButton from './button/button.vue'
// 导入Headline组件
import MyHeadline from './headline/headline.vue'

// 向外导出一个对象，对象中有一个install方法
// 有了install方法，别人就可以通过Vue.use调用install方法了
export default {
  // Vue.use(对象). 它会执行对象的install方法，并传入Vue对象作为参数
  install (Vue) {
    Vue.component('MyButton', MyButton)
    Vue.component('MyHeadline', MyHeadline)
  }
}
