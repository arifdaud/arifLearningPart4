<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="navbar-brand"
              ><h4>Stock Trader</h4></router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/portfolio" class="navbar-brand"
              >Portfolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/stocks" class="navbar-brand">Stocks</router-link>
          </li>
          <li class="nav-item">
            <a class="navbar-brand">Funds: {{ funds | currency }}</a>
          </li>
          <li class="nav-item">
            <a href="#" @click="endDay" class="navbar-brand">End Day</a>
          </li>
          <li class="navbar-brand">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save & Load
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
              <a class="dropdown-item" href="#" @click="retrieveData"
                >Load Data</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "retrieveData",
    }),
    //used to simulate a change in stock prices at the end of a trading day
    endDay() {
      this.randomizeStocks();
    },
    //save the data to firebase
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      //to send this data to the server or save it locally. 
      this.$http.put("data.json", data);
    },
    //retreive the data from firebase
    retrieveData() {
      this.fetchData();
    },
  },
};
</script>