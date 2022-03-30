// 关闭eslint，不然下面这种代码会报错
// var a;
/* 
在package.json找到eslintConfig项，全局配置禁用某些错误提示
"rules":{
  "no-unused-vars":"off"
}

 */

import Vue from 'vue'; // 默认引入的是runtime-only版本的，不带解析器
// import Vue from 'vue/dist/vue.esm'; // 是我们自己找到的带解析器的版本
import App from '@/App';

// 这种方式不行
// 默认导入的Vue是一个runtime-only版本的Vue,这个版本的Vue不带解析器
// new Vue({
//   el: "#app",
//   components:{
//     App,
//   },
//   template: "<App/>"
// });


// 以后开发使用的是下面这种方式——项目打包出来的体积小
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  // 这个函数和上面我们自己写的功能差不多 
  // 1.定义并注册了App
  // 2.使用了App组件
  // 比上面的写法多干了一件事：寻找解析器的loader
  render: h=>h(App) // 这只能用箭头函数
});


