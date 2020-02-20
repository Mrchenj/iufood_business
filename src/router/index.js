import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/home',
    name: 'main',
    component: () => import('../views/Home/home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/LoginIndex.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/buet/bindex.vue'),
    // 給二級頁面設置默認顯示地址
    redirect: '/business/status',
    children: [
      {
        path: 'status',
        component: () => import('../views/buet/bstatus.vue'),
      },
      {
        path: 'time',
        component: () => import('../views/buet/btime.vue'),
      },
    ],
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/Order/order-index.vue'),
    // 給二級頁面設置默認顯示地址
    redirect: '/order/place',
    children: [
      {
        path: 'place',
        component: () => import('../views/Order/order-place.vue'),
      },
      {
        path: 'issue',
        component: () => import('../views/Order/order-issue.vue'),
      },
      {
        path: 'change',
        component: () => import('../views/Order/order-change.vue'),
      },
      {
        path: 'pay',
        component: () => import('../views/Order/order-pay.vue'),
      },
    ],
  },
  {
    path: '/kitchen',
    name: 'kitchen',
    component: () => import('../views/Kitchen/kitchen-index.vue'),
    // 給二級頁面設置默認顯示地址
    redirect: '/kitchen/call',
    children: [
      {
        path: 'call',
        component: () => import('../views/Kitchen/kitchen-call.vue'),
      },
    ],
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/Manage/manage-index.vue'),
    // 給二級頁面設置默認顯示地址
    redirect: '/manage/number',
    children: [
      {
        path: 'number',
        component: () => import('../views/Manage/manage-number.vue'),
      },
      {
        path: 'food',
        component: () => import('../views/Manage/manage-food.vue'),
      },
      {
        path: 'sort',
        component: () => import('../views/Manage/manage-sort.vue'),
      },
      {
        path: 'stock',
        component: () => import('../views/Manage/manage-stock.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
