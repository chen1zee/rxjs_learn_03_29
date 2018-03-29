<template>
<mu-dialog :open="show" :title="title">
  {{msg}}
  <mu-flat-button :label="closeBtnLabel" slot="actions"
                  primary @click="close"/>
</mu-dialog>
</template>

<script>
export default {
  name: 'DirectiveAlert',
  data() {
    return {
      show: false,
      title: '',
      msg: '',
      closeBtnLabel: '确定',
      closeCB: null // 关闭 cb 用以通知 消息队列
    }
  },
  methods: {
    close() {
      if (typeof this.closeCB == 'function') this.closeCB('confirm')
    }
  }
}
</script>
