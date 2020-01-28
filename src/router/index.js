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
    name: 'Login',
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/buet/bindex.vue'),
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
  // {
  //   path: '/business-set',
  //   name: 'cart',
  //   component: () => import('../views/BusinessSet/bset-index.vue'),
  //   children: [
  //     {
  //       path: 'status',
  //       component: () => import('../views/BusinessSet/bset-index.vue'),
  //     },
  //     {
  //       path: 'time',
  //       component: () => import('../views/BusinessSet/bset-index.vue'),
  //     },
  //   ],
  // },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
