import Vue from 'vue';
import Router from 'vue-router';
import VueGoodTablePlugin from 'vue-good-table';
import Ping from '../components/Ping.vue';
import Orders from '../components/Orders.vue';
import OrdersVal from '../components/OrdersVal.vue';

// import the styles
import 'vue-good-table/dist/vue-good-table.css';

Vue.use(VueGoodTablePlugin);

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
    },
    {
      path: '/ordersval',
      name: 'OrdersVal',
      component: OrdersVal,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
  ],
});
