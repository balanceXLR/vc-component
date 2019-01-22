// import Hello from './components/hello/index.vue'

// const install = function (Vue) {
//     if (install.installed) {
//         return
//     }
//     Vue.component(Hello.name, Hello)
// }

// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue)
// }

// export default {
//     install,
//     Hello
// }

import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})