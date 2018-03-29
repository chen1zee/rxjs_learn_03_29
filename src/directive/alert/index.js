import Vue from 'vue'
import DirectiveAlert from './DirectiveAlert'

const AlertConstructor = Vue.extend(DirectiveAlert)
/**
 * @func
 * */
function alert(opt) {
  const options = reformOpt(opt)
  return new Promise((resolve, reject) => {
    checkShowMsg(options, resolve, reject)
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
function checkShowMsg(options, resolve, reject) {
  const instance = new AlertConstructor({ el: document.createElement('div') })
  document.body.appendChild(instance.$el)
  Object.keys(options).forEach(key => {
    instance[key] = options[key]
  })
  instance.show = true
  instance.resolve = resolve
  instance.reject = reject
}

export default alert
