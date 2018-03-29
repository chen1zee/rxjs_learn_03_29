import Vue from 'vue'
import Rx from 'rxjs/Rx'
import DirectiveAlert from './DirectiveAlert'

// 弹窗构造器
const AlertConstructor = Vue.extend(DirectiveAlert)
// 实例 消息队列
let instance
// 触发器
let alertObserver

const alert$ = Rx.Observable.create(observer => { alertObserver = observer })
const promiseAndSleep$Maker = option => Rx.Observable.fromPromise(new Promise(resolve => {
  checkShowMsg({ option, resolve })
})).concat(Rx.Observable.interval(200).take(1))

let timestamp
alert$
  .map(opt => reformOpt(opt))
  .concatMap(option => promiseAndSleep$Maker(option))
  .subscribe(x => {
    console.log(`result is: ${x}`)
    const nowTimestamp = new Date().getTime()
    const ms = timestamp ? nowTimestamp - timestamp : 0
    timestamp = nowTimestamp
    console.log(`隔  ${ms}`)
    console.log('==============')
  })

/**
 * 重构opt
 * */
function reformOpt(opt) {
  if (typeof opt == 'string') {
    return { title: '提示', msg: opt, closeBtnLabel: '确定' }
  }
  return { // opt == 对象
    title: opt.title || '提示',
    msg: opt.msg,
    closeBtnLabel: opt.closeBtnLabel || '确定'
  }
}
/**
 * 运行信息
 * */
function checkShowMsg({ option, resolve }) {
  if (!instance) { // 初始化实例 并插入document
    instance = new AlertConstructor({ el: document.createElement('div') })
    document.body.appendChild(instance.$el)
  }
  // 推出 消息队列
  Object.keys(option).forEach(key => {
    instance[key] = option[key]
  })
  // 实例关闭回调
  // @param action: confirm:确定， cancel:取消
  instance.closeCB = action => {
    resolve(action)
    instance.show = false
  }
  instance.show = true
}

function alert(opt) {
  alertObserver.next(opt)
}
export default alert
