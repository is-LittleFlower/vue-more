<template>
  <div>
    <button class="ui primary button" @click="hEmitclick" :class="cClass">
      <!-- 设置按钮动画组要进行判断 -->
      <!-- template的用法。它不需要创建新的dom容器，还可以用来包裹其它元素。 -->
      <template v-if="animated">
        <!--$slots可以收集所有插槽 用$slots.插槽名, 来获取指定插槽的内容。
             hidden content 是在semantic-ui中约定的类
             visible conten 是在semantic-ui中约定的类-->
        <div v-if="$slots.hidden" class="hidden content">
          <!-- 具名插槽 -->
          <slot name="hidden"></slot>
        </div>
        <div v-if="$slots.visible" class="visible content">
          <slot name="visible"></slot>
        </div>
      </template>
      <template v-else>
        <!-- 不带动画效果的按钮 -->
        <!-- 如果用户设置了icon属性，则显示图标 -->
        <i v-if="icon" class="icon" :class="icon"></i>
        <!-- slot是默认插槽
             会把默认内容替换成<my-button>点个赞再走</my-button> "点个赞再走"
        如果用户没有在组件中输入内容，就会显示插槽中的默认内容-->
        <slot>我是默认内容</slot>
      </template>
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
        return [
          'mini',
          'tiny',
          'small',
          'medium',
          'large',
          'big',
          'huge',
          'massive'
        ].includes(val)
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
    },
    loading: {
      type: Boolean,
      default: false
    },
    animated: {
      type: String,
      default: ''
    }
  },
  computed: {
    cClass () {
      // 声明一个数组接收用户设置的属性值
      const classArr = [this.size]
      // 判断用户是否有设置animated类,如果有设置需要将动画类名push到classArr数组
      // 并且要将动画的类型，也就是动画名称同时push进去
      this.animated && classArr.push(`animated ${this.animated}`)
      // 判断用户是否设置loading加载状态，如果有设置向数组内追加一个类名
      this.loading && classArr.push('loading')
      // 判断用户是否设置禁用状态，如果有设置向数组内追加一个类名
      this.disabled && classArr.push('disabled')

      // 以下代码过于繁琐，不简洁，进行代码优化
      // if (this.loading) {
      //   classArr.push('loading')
      // }
      // // 手机收到的用户设置的属性值，并分析，然后返回class给按钮外层的容器
      // // 因为size、disabled都需要动态添加类名，disabled不是必须添加的，所以我们要使用计算属性
      // if (this.disabled) {
      //   // console.log(this.disabled)

      //   // 如果用户开启禁用
      //   // 这里返回的是class类名，加空格是使得两个类名隔开
      //   // return this.size + ' ' + 'disabled'
      //   classArr.push('disabled')
      // }
      // else {
      //   // 如果用户没有开启禁用，只需返回size属性值
      //   return this.size
      // }
      // .join() 是数组方法，将数组转换成一个字符串，并返回一个字符串，用什么隔开，括号内就写什么
      return classArr.join(' ')
    }
  },
  methods: {
    hEmitclick () {
      // 在组件内部抛出click事件
      this.$emit('click')
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="less" >
</style>
