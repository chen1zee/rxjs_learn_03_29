import Vue from 'vue'
import DirectiveToast from './DirectiveToast'

const Toast = Vue.extend(DirectiveToast)
// 实例
let instance
const msgQueue = []

function showNextMsg() {
  if (!instance) {
    instance = new Toast({ el: document.createElement('div') })
    document.body.appendChild(instance.$el)
  }
  if (!msgQueue.length || instance.show) return
  instance.show = true
  instance.msg = msgQueue.shift()
  setTimeout(() => {
    if (msgQueue.length) {
      instance.show = false
      setTimeout(showNextMsg, 200) // 仍有数据
    } else {
      setTimeout(() => {
        instance.show = false
      }, 1200) // 无数据 则 1.2s 后隐藏
    }
  }, 800)
}

function toast(str) {
  msgQueue.push(str)
  showNextMsg()
}

export default toast
