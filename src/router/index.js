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
    meta: {
      title: '首頁'
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/LoginIndex.vue'),
    meta: {
      title: '登入'
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '關於'
    },
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/business/BusinessIndex.vue'),
    meta: {
      title: '營業設置'
    },
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
    meta: {
      title: '營業菜單'
    },
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
    meta: {
      title: '後廚菜單'
    },
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
    meta: {
      title: '店面管理'
    },
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
            component: () => import('../views/manage/manageFood/Managefoodlist.vue'),
          },
          {
            path: 'add',
            component: () => import('../views/manage/manageFood/ManageFoodAdd.vue'),
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
  {
    path: '/finance',
    name: 'finance',
    component: () => import('../views/finance/FinanceIndex.vue'),
    meta: {
      title: '財務管理'
    },
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
});

export default router;
