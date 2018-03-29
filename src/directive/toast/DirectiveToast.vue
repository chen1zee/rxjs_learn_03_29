<template>
  <transition name="directive__toast--tran">
    <div v-show="show" class="directive__toast">
      <div class="directive__toast--wrap">{{msg}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DirectiveToast',
  data() {
    return {
      show: false,
      msg: ''
    }
  }
}
</script>

<style lang="less">
.directive__toast {
  position: fixed;
  bottom: 135px;
  left: 0;
  width: 100%;
  height: 0;
  text-align: center;
  .directive__toast--wrap {
    display: inline-block;
    padding: 20px 32px;
    max-width: 300px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 14px;
    line-height: 26px;
    word-break: break-all;
  }
}
// 过渡设置
.directive__toast--tran-enter-active {
  animation: directive__toast--tran-fade-in .3s;
}
@keyframes directive__toast--tran-fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.directive__toast--tran-leave-active {
  animation: directive__toast--tran-fade-out .3s;
}
@keyframes directive__toast--tran-fade-out {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
