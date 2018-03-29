/**
 * 设置cookie
 *
 * @param name 名称 value 内容 options 其它参数
 * @returns cookie的值 或者是设置cookie
 */

/* eslint-disable */

export const cookie = (name, value, options) => {
  if (typeof value != 'undefined') {
    options = options || {}
    if (value === null) {
      value = ''
      options.expires = -1
    }
    let expires = ''
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      let date
      if (typeof options.expires == 'number') {
        date = new Date()
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000))
      } else {
        date = options.expires
      }
      expires = '; expires=' + date.toUTCString()
    }
    const path = options.path ? '; path=' + options.path : ''
    const domain = options.domain ? '; domain=' + options.domain : ''
    const secure = options.secure ? '; secure' : ''
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('')
  } else {
    let cookieValue = null
    if (document.cookie && document.cookie != '') {
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].replace(/^\s+|\s+$/g,'')
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
          break
        }
      }
    }
    return cookieValue
  }
}


export const clearAllCookie = () => {
  let myDate = new Date()
  myDate.setTime(-1000)//设置时间
  const data = document.cookie
  let dataArray = data.split("; ")
  for(let i = 0; i < dataArray.length; i++){
    const varName = dataArray[i].split("=")
    document.cookie = varName[0] + "=''; expires=" + myDate.toGMTString()
  }
}
