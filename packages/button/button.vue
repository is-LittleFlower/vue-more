<template>
  <div>
     <button class="ui primary button" :class="cClass">
        <i v-if="icon" class="icon" :class="icon"></i>
        <!-- slot是默认插槽
             会把默认内容替换成<my-button>点个赞再走</my-button> "点个赞再走"
             如果用户没有在组件中输入内容，就会显示插槽中的默认内容-->
        <slot>我是默认内容</slot>
     </button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'MyButton',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator (val) {
      // validator是校验规则
      // 只要用户设置按钮大小，传入size属性，就会进入到这个函数
      // 如果校验结果返回true就生效，如果校验结返回false就不允许，会报错

        // 检验思路：
        // 如果传入的size值为：mini,medium,huge,massive... 就成功；否则为false
        // Array.includes() 这个数组方法是检测这个数组中，是否包含某个元素
        return ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'].includes(val)
      }
    },
    icon: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      // 设置按钮默认不是禁用状态
      default: false
    }
  },
  computed: {
    cClass () {
      // 手机收到的用户设置的属性值，并分析，然后返回class给按钮外层的容器
      // 因为size、disabled都需要动态添加类名，disabled不是必须添加的，所以我们要使用计算属性
      if (this.disabled) {
        console.log(this.disabled)

        // 如果用户开启禁用
        // 这里返回的是class类名，加空格是使得两个类名隔开
        return this.size + ' ' + 'disabled'
      } else {
        // 如果用户没有开启禁用，只需返回size属性值
        return this.size
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="less" >
</style>
