import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const CreateUser = () => import(/* webpackChunkName: "user" */ './components/CreateUser.vue')
const ListUsers = () => import(/* webpackChunkName: "user" */ './components/ListUsers.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: CreateUser },
  { path: '/user/list', component: ListUsers }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
