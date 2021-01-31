import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import TreeTable from 'vue-table-with-tree-grid'
// 导入字体图标
import './assets/fonts/iconfont.css'

// 导入全局样式
import './assets/css/global.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
    // 'http://192.168.88.122:8888/api/private/v1/'

//请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
axios.interceptors.request.use((config) => {
        //为请求头对象，添加token验证的Authorization字段
        config.headers.Authorization = window.sessionStorage.getItem('token')
        return config
    })
    // 无效 token 的处理
axios.interceptors.response.use((res) => {
    if (res.data.meta.msg === '无效token' && res.data.meta.status === 400) {
        location.href = '/#/login'
    }
    return res
})

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')