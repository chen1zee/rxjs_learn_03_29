<template>
<div v-show="show" class="directive__loading">
  <mu-linear-progress />
</div>
</template>

<script>
export default {
  name: 'DirectiveLoading',
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="less">
@height: 6px;

.directive__loading {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: @height;
  .mu-linear-progress {
    height: 100%;
    background-color: transparent;
    .mu-linear-progress-indeterminate {
      height: 100%;
    }
  }
}
</style>
