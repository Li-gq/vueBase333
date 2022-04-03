import  Vue from 'vue';
import App from '@/App.vue';

Vue.config.productionTip = false;
new Vue({
    beforeCreate(){
        // 配置总线，就是把vm挂到Vue原型上，让所有组件对象都能找到它，进而调用$on和$emit
        Vue.prototype.$bus = this;
    },
    el: "#app",
    render: h=>h(App)
})

