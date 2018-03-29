<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
@import "./style/reset";
@import "./style/color";
@import "./style/util";
html,body {
  height: 100%;
}
#app {
  height: 100%;
  background-color: @silver-light;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
