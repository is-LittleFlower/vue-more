<template>
  <div>
    <button class="ui primary button">MyButton全局组件按钮</button>
    <hr>
    <div class="ui animated button">
      <div class="visible content">Next</div>
      <div class="hidden content">
        <i class="right arrow icon"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'MyButton',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less" >
</style>
