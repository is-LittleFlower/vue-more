<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 图标大小和自定义内容测试用例 -->
    <my-button size="mini">点个赞再走</my-button>
    <br>
    <my-button></my-button>
    <br>
    <my-button size="huge">hehehehe</my-button>
    <br>
    <!-- 图标测试用例 -->
    <my-button icon="wifi icon">带图标的按钮</my-button>
    <br>
    <my-button icon="user icon" size="big">带图标的按钮</my-button>
    <!-- 图标禁用测试用例 -->
    <br>
    <my-button>没有设置禁用的按钮</my-button>
    <br>
    <my-button disabled icon="users icon">被禁用的按钮</my-button>
  </div>
</template>
