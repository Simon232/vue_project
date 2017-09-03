import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import About from './components/About'
import Products from './components/Products'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/about', component: About},
  { path: '/products', component: Products}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  el: '#app',
  template: `<App/>`,
  components: {App},
  router
}).$mount('#app')
