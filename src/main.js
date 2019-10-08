import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'
import {Locale} from 'cube-ui';
import enUsLanguage from './lang/en_US';
import zhCnLanguage from './lang/zh_CN';

Vue.use(Locale);

//使用语言包
Locale.use('en_US', enUsLanguage);
Locale.use('zh_CN', zhCnLanguage);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
