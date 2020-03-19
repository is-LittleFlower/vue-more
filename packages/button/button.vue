<template>
  <div>
     <button class="ui primary button" :class="size">
        <!-- slot是默认插槽
             会把默认内容替换成<my-button>点个赞再走</my-button> "点个赞再走"
             如果用户没有在组件中输入内容，就会显示插槽中的默认内容-->
        <slot>我是默认内容</slot>
     </button>

    <!-- <div class="ui animated button">
      <div class="visible content">Next</div>
      <div class="hidden content">
        <i class="right arrow icon"></i>
      </div>
    </div>-->
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
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="less" >
</style>
