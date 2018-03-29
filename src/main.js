// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 使用 muse-UI 文档 http://www.muse-ui.org/#/install
import MuseUI from 'muse-ui'
import '../museStyle/muse-ui.css'
import '../museStyle/theme-light.css'
import { defaultAjax } from './api/index'
import App from './App'
import router from './router'
import loadingDirective from './directive/loading/index'
import alertDirective from './directive/alert/index'
import toastDirective from './directive/toast/index'
import alertDirectiveRx from './directive/alertRx/index'

Vue.use(MuseUI)
Vue.config.productionTip = false

// UI型 指令
Vue.prototype.$showLoading = loadingDirective.showLoading
Vue.prototype.$hideLoading = loadingDirective.hideLoading
Vue.prototype.$alert = alertDirective
Vue.prototype.$alertRx = alertDirectiveRx
Vue.prototype.$toast = toastDirective
// api型 指令
Vue.prototype.$defaultAjax = defaultAjax // ajax init

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
