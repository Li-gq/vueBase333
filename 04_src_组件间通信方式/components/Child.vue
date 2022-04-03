<template>
  <div>
      <h2>今天天气不错！</h2>
      <!-- Vue中内置的组件标签 -->
      <slot>
          <!-- slot内部的东西是等待着父组件使用的时候传递过来 -->
          
      </slot>
  </div>
</template>

<script>
export default {
    name:"",
}
</script>

<style>

</style>