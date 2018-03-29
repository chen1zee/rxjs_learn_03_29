<template>
  <mu-text-field :value="value" :hintText="hintText"
                 :fullWidth="fullWidth" :valid="valid"
                 @focus="focus" :type="type"
                 @input="input" :errorText="errorText" />
</template>

<script>
export default {
  name: 'CompTextField',
  props: {
    value: { type: null, default: '' },
    hintText: { type: null },
    fullWidth: { type: null },
    // [{ pattern: RegExp || Function, errorMsg: '' }]
    // pattern(val, vm) : val: 字段值, vm: 本组件实例
    valid: { type: Array, default: () => [] },
    type: { type: String, default: 'text' }
  },
  data() {
    return {
      errorText: '' // 错误提示语
    }
  },
  methods: {
    input(val) { this.$emit('input', val) },
    focus() { this.errorText = '' },
    validate() { // 验证
      let pass = true
      const val = this.value.trim()
      for (let i = 0, l = this.valid.length; i < l; i++) {
        const validCell = this.valid[i]
        let result = false // 验证结果
        if (validCell.pattern instanceof RegExp) result = validCell.pattern.test(val)
        else result = validCell.pattern(val, this)
        if (!result) {
          this.errorText = validCell.errorMsg || '验证失败'
          pass = false
          break
        }
      }
      return pass
    },
    reset() { // 重置
      this.errorText = ''
    }
  }
}
</script>

<style scoped>

</style>
