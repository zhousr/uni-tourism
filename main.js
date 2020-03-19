import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

import "static/css/reset.css"

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
