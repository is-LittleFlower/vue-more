<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 设置按钮动画测试用例 -->
    <my-button animated="vertical">
      <div slot="hidden">$10000</div>
      <div slot="visible">
       <i class="shop icon"></i> 不要错过o
      </div>
    </my-button>
    <br>
    <my-button animated="fade">
      <div slot="hidden">$10000</div>
      <div slot="visible">不要错过哈
      </div>
    </my-button>
    <br>
    <!-- 设置按钮大小和自定义内容测试用例 -->
    <my-button size="mini">点个赞再走</my-button>
    <br>
    <my-button></my-button>
    <br>
    <my-button size="huge">hehehehe</my-button>
    <br>
    <!-- 设置图标测试用例 -->
    <my-button icon="wifi icon">带图标的按钮</my-button>
    <br>
    <my-button icon="user icon" size="big">带图标的按钮</my-button>
    <!-- 设置按钮禁用测试用例 -->
    <br>
    <my-button>没有设置禁用的按钮</my-button>
    <br>
    <my-button disabled icon="users icon">被禁用的按钮</my-button>
    <!-- 设置按钮加载效果测试用例 -->
    <br>
    <my-button loading>设置loading的按钮</my-button>
    <!-- 设置按钮的点击事件 -->
    <br>
    <!-- 在做点击事件设置之前，如果直接在按钮组件上添加点击事件时实现不了的，在原生的<button></button>上设置可以
         或者给按钮组件设置@click.native="hclick"来达到目标
        但是不可能让用户去这样设置，所以我们会给自己的按钮先配置好-->
    <my-button @click="hclick" size="mini">点个赞再走</my-button>
  </div>
</template>
<script>
export default {
  name: 'page-button',
  methods: {
    hclick () {
      alert('不要点我')
    }
  }
}
</script>
