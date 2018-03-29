import axios from 'axios'
import Vue from 'vue'

const VuePro = Vue.prototype
const env = process.env.NODE_ENV

const host = env == 'development' ? '//127.0.0.1:3000/' : '/'

/**
 * @func 默认ajax封装
 * @param {Object} option
 * @param {String} option.url 请求路径
 * @param {String} option.method 请求方式
 * */
function _defaultAjax(option) {
  const url = host + option.url
  const method = option.method || 'get'
  const params = method == 'get' ? option.data : {}
  const data = method == 'get' ? {} : option.data
  return new Promise((resolve, reject) => {
    axios({ url, method, params, data })
      .then(res => {
        if (!res && !res.data) {
          VuePro.$hideLoading()
          return VuePro.$alert('响应无相关数据')
            .then(() => reject({ msg: '响应无相关数据' }))
        }
        if (res.data.code != 200) {
          VuePro.$hideLoading()
          return VuePro.$alert(res.data.msg || '请求失败')
            .then(() => {
              reject({
                code: res.data.code || 10000, // 后台无返回 code
                msg: res.data.msg || '请求失败'
              })
            })
        }
        resolve(res.data)
      })
      .catch(err => {
        VuePro.$alert('请求失败，请稍后再试')
        VuePro.$hideLoading()
        reject(err)
      })
  })
}
function maker(ajaxFunc) {
  const methodMaker = (func, method) => { func[method] = opt => func({ method, ...opt }) }
  methodMaker(ajaxFunc, 'get')
  methodMaker(ajaxFunc, 'post')
  methodMaker(ajaxFunc, 'put')
  methodMaker(ajaxFunc, 'delete')
}

maker(_defaultAjax)
export const defaultAjax = _defaultAjax
