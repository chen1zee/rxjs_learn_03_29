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
      resolve: null,
      reject: null
    }
  },
  methods: {
    close() {
      this.show = false
      this.resolve('confirm')
    }
  }
}
</script>
