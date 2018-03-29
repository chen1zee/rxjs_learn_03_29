import Vue from 'vue'
import DirectiveLoadingVue from './DirectiveLoading'

// loading 组件构造器
const LoadingConstructor = Vue.extend(DirectiveLoadingVue)
let instance // 组件实例

function showLoading() {
  if (!instance) { // 初始化实例 并插入document
    instance = new LoadingConstructor({ el: document.createElement('div') })
    document.body.appendChild(instance.$el)
  }
  if (instance.show) return // 在显示
  Vue.nextTick(() => {
    instance.show = true
  })
}

function hideLoading() {
  if (!instance) return
  instance.show = false
}

export default {
  showLoading,
  hideLoading
}
