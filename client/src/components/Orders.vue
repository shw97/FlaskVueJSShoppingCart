<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h4>Total Amount</h4>
        <hr><br><br>
        <h5>Created date</h5>
        <table class="table table-hover tablesorter">
          <thead>
            <tr>
              <th scope="col">Order name</th>
              <th scope="col">Customer Company</th>
              <th scope="col">Customer name</th>
              <th scope="col">Order date</th>
              <th scope="col">Delivered Amount</th>
              <th scope="col">Total Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for ="(order,index) in orders" :key="index">
              <td>{{order.Order_name}}</td>
              <td>{{order.Customer_Company}}</td>
              <td>{{order.Customer_name}}</td>
              <td>{{order.Order_date}}</td>
              <td>{{order.Delivered_Amount}}</td>
              <td>{{order.Total_Amount}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
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
