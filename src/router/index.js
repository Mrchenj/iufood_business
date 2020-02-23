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
    component: () => import('../views/home/HomeIndex.vue'),
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
    component: () => import('../views/business/BusinessIndex.vue'),
    // 給二級頁面設置默認顯示地址
    redirect: '/business/status',
    children: [
      {
        path: 'status',
        component: () => import('../views/business/BusinessStatus.vue'),
      },
      {
        path: 'time',
        component: () => import('../views/business/BusinessTime.vue'),
      },
    ],
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/OrderIndex.vue'),
    redirect: '/order/place',
    children: [
      {
        path: 'place',
        component: () => import('../views/order/OrderPlace.vue'),
      },
      {
        path: 'issue',
        component: () => import('../views/order/OrderIssue.vue'),
      },
      {
        path: 'change',
        component: () => import('../views/order/OrderChange.vue'),
      },
      {
        path: 'pay',
        component: () => import('../views/order/OrderPay.vue'),
      },
    ],
  },
  {
    path: '/kitchen',
    name: 'kitchen',
    component: () => import('../views/kitchen/KitchenIndex.vue'),
    redirect: '/kitchen/call',
    children: [
      {
        path: 'call',
        component: () => import('../views/kitchen/KitchenCall.vue'),
      },
    ],
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/manage/ManageIndex.vue'),
    redirect: '/manage/number',
    children: [
      {
        path: 'number',
        component: () => import('../views/manage/ManageNumber.vue'),
      },
      {
        path: 'food',
        component: () => import('../views/manage/ManageFood.vue'),
        //三級子類
        redirect: '/manage/food/list',
        children: [
          {
            path: 'list',
            component: () => import('../views/manage/manageSort/Managefoodlist.vue'),
          },
          {
            path: 'add',
            component: () => import('../views/manage/manageSort/ManageFoodAdd.vue'),
          },
        ],
      },
      {
        path: 'sort',
        component: () => import('../views/manage/ManageSort.vue'),
      },
      {
        path: 'stock',
        component: () => import('../views/manage/ManageStock.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
