<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h4>Total Amount</h4>
        <hr><br><br>
        <vue-good-table :columns="columns" :rows="orders"
          :pagination-options="{
          enabled: true,
          mode: 'records',
          perPage: 5,
          position: 'bottom',
          perPageDropdown: [3, 7, 9],
          dropdownAllowAll: false,
          setCurrentPage: 2,
          nextLabel: 'next',
          prevLabel: 'prev',
          rowsPerPageLabel: 'Rows per page',
          ofLabel: 'of',
          pageLabel: 'page', // for 'pages' mode
          allLabel: 'All',
        }"
          :search-options="{
          enabled: true,
          trigger: 'enter',
          skipDiacritics: true,
          searchFn: mySearchFn,
          placeholder: 'Search this table',
          externalQuery: searchQuery
        }">
        </vue-good-table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      columns: [
        {
          label: 'Order Name',
          field: 'Order_name',
        },
        {
          label: 'Customer Company',
          field: 'Customer_Company',
        },
        {
          label: 'Customer Name',
          field: 'Customer_name',
        },
        {
          label: 'Order Date',
          field: 'Order_date',
          filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: 'Filter This Thing', // placeholder for filter input
            filterValue: 'Thu, 02 Jan 2020 15:34:12 GMT', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterMultiselectDropdownItems: ['Thu, 02 Jan 2020 15:34:12 GMT',
              'Wed, 15 Jan 2020 17:34:12 GMT',
              'Sun, 05 Jan 2020 05:34:12 GMT',
              'Sun, 02 Feb 2020 15:34:12 GMT',
              'Fri, 03 Jan 2020 10:34:12 GMT'],
            filterFn: this.columnFilterFn, // custom filter function that
          },
          // type: 'date',
          // dateInputFormat: 'yyyy-MM-dd',
          // dateOutputFormat: 'MMM Do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      orders: [],
    };
  },
  methods: {
    getOrders() {
      const path = 'http://localhost:5000/orders';
      axios.get(path)
        .then((res) => {
          this.orders = res.data.orders;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getOrders();
  },

};
</script>
