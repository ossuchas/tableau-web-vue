import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../components/Test.vue'
import WalkSummary from '../components/WalkSummary.vue';
import WalkSummaryByBG from '../components/WalkSummaryByBG.vue';
import WalkSummaryBySubBG from '../components/WalkSummaryBySubBG.vue';
import ChatbotLog from '../components/ChatbotLog.vue';
import ExecutiveReportView from '../components/ExecutiveReportView.vue';
import Dashboard4Indi from '../components/Dashboard4Indi.vue';

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
  },
  {
    path: '/walkbg',
    name: 'WalkSummaryByBG',
    component: WalkSummaryByBG
  },
  {
    path: '/walksubbg',
    name: 'WalkSummaryBySubBG',
    component: WalkSummaryBySubBG
  },
  {
    path: '/ds4indi',
    name: 'Dashboard4Indi',
    component: Dashboard4Indi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
