import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Emergency from '@/pages/emergency/Emergency.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Emergency',
      component: Emergency
    }
  ]
})
