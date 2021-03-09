import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import screen from 'vue-screen';

Vue.use(screen, {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904,
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}, App).$mount('#app')
