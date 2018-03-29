import Vue from 'vue'
import DirectiveAlert from './DirectiveAlert'

// 弹窗构造器
const AlertConstructor = Vue.extend(DirectiveAlert)
// 实例 消息队列
let instance
const msgQueue = []

/**
 * @func
 * */
function alert(opt) {
  const options = reformOpt(opt)
  return new Promise((resolve, reject) => {
    msgQueue.push({ resolve, reject, options })
    checkShowMsg()
  })
}

/**
 * @function 改造opt
 * */
function reformOpt(opt) {
  if (typeof opt == 'string') {
    return { title: '提示', msg: opt, closeBtnLabel: '确定' }
  }
  return {
    title: opt.title || '提示',
    msg: opt.msg,
    closeBtnLabel: opt.closeBtnLabel || '确定'
  }
}


/**
 * 检查&&运行 信息
 * */
function checkShowMsg() {
  if (!instance) { // 初始化实例 并插入document
    instance = new AlertConstructor({ el: document.createElement('div') })
    document.body.appendChild(instance.$el)
  }
  if (!msgQueue.length || instance.show) return
  // 推出 消息队列
  const currentMsg = msgQueue.shift()
  Object.keys(currentMsg.options).forEach(key => {
    instance[key] = currentMsg.options[key]
  })
  // 实例关闭回调
  // @param action: confirm:确定， cancel:取消
  instance.closeCB = action => {
    instance.show = false
    afterClose(currentMsg, action)
  }
  instance.show = true
}

/**
 * @func 用户关闭后
 * @param currentMsg 封装对象
 * @param action confirm cancel
 * */
function afterClose(currentMsg, action) {
  currentMsg.resolve(action)
  setTimeout(() => {
    checkShowMsg()
  }, 200)
}

export default alert
