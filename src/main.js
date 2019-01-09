// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import Butter from 'buttercms'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import aws_exports from './aws-exports'

const butter = Butter('83e765492a08e5619a7c6b5a616381d1ec2e2bcb')

Vue.use(VueRouter);

Amplify.configure(aws_exports)

const router = new VueRouter({
  routes: routes
})

Vue.use(AmplifyPlugin, AmplifyModules)
// Important to instantiate the Vue instance after calling Vue.use
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
