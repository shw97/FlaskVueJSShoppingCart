import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import vPage from 'v-page';
import Datepicker from 'vuejs-datepicker';
import Pagination from './components/Pagination.vue';
import Search from './components/Search.vue';
import App from './App.vue';
import router from './router';

Vue.component('DatePicker', Datepicker);
Vue.config.productionTip = false;
Vue.use(vPage);
Vue.component('Pagination', Pagination);
Vue.component('Search', Search);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
