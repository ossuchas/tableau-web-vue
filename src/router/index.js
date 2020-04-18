import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../components/Test.vue'
import WalkSummary from '../components/WalkSummary.vue';
import ChatbotLog from '../components/ChatbotLog.vue';
import ExecutiveReportView from '../components/ExecutiveReportView.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/walksummary',
    name: 'WalkSummary',
    component: WalkSummary
  },
  {
    path: '/logchatbot',
    name: 'ChatbotLog',
    component: ChatbotLog
  },
  {
    path: '/exrptview',
    name: 'ExecutiveReportView',
    component: ExecutiveReportView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
