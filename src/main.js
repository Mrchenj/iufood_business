import Vue from 'vue';
import {
  Button, Field, DropdownMenu, DropdownItem, NavBar, Grid, GridItem, Sidebar, SidebarItem,
  Icon, Toast, Col, Row, Search, TreeSelect, Image, IndexAnchor, IndexBar,
  Cell, List, Tab, Tabs, Panel, Pagination, Dialog, Card,
} from 'vant';
// import { Button, Table, Dropdown, DropdownItem, DropdownMenu, Icon } from 'view-design';
import App from './App.vue';
import router from './router';
import store from './store';

// import 'view-design/dist/styles/iview.css';
// import './theme/index.less';
import 'vant/lib/index.css';
import './assets/css/resetview.scss';

Vue.use(Button).use(Field).use(DropdownMenu).use(DropdownItem)
  .use(NavBar)
  .use(Grid)
  .use(GridItem)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Icon)
  .use(Toast)
  .use(Col)
  .use(Row)
  .use(Search)
  .use(TreeSelect)
  .use(Image)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Cell)
  .use(List)
  .use(Tab)
  .use(Tabs)
  .use(Panel)
  .use(Pagination)
  .use(Dialog)
  .use(Card);
// Vue.component('Button', Button);
// Vue.component('Icon', Icon);
// Vue.component('Table', Table);
// Vue.component('Dropdown', Dropdown);
// Vue.component('DropdownItem', DropdownItem);
// Vue.component('DropdownMenu', DropdownMenu);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
