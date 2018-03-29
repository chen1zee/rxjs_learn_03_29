<template>
  <label class="login__index--input-item">
    <span class="label">{{label}}</span>
    <mu-text-field v-bind="props" :value="value" @input="input" />
  </label>
</template>

<script>

export default {
  name: 'IndexInputItem',
  props: {
    label: { type: String },
    value: { type: null, default: '' },
    props: { type: null, default: {} }
  },
  methods: {
    input(val) { this.$emit('input', val) }
  },
  components: {

  }
}
</script>

<style lang="less">
@import "/src/style/color";

@paddingLeft: 20px;
@tagWidth: 100px;

.login__index--input-item {
  position: relative;
  display: block;
  box-sizing: border-box;
  padding-left: @paddingLeft + @tagWidth;
  .label {
    position: absolute;
    top: 0;
    left: @paddingLeft;
    height: 90px;
    line-height: 90px;
    font-size: 30px;
    color: @gray;
    text-align: right;
  }
}
</style>
