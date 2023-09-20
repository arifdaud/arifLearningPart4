<template>
  <div>
    <!-- Card -->
    <div class="card" style="margin-top: 1%">
      <!-- Card image -->
      <div class="view overlay">
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <!-- Card content -->
      <div class="card-body">
        <!-- Title -->
        <h4 class="card-title">
          Name: {{ stock.name }} <small> {{ stock.price }}</small>
        </h4>
        <!-- Text -->
        <p class="card-text">
          <input
            type="number"
            class="form-control"
            placeholder="Enter Qty"
            v-model="quantity"
          />
        </p>
        <!-- Button -->
        <a
          href="#"
          class="btn btn-primary"
          @click="submitBuyStock"
          :disabled="insufficientFunds || quantity <= 0"
        >
          {{ insufficientFunds ? "Insufficient Funds" : "Buy" }}
        </a>
      </div>
    </div>
    <!-- Card -->
  </div>
</template>
<script>
export default {
  //pass the data from parent to child
  props: ["stock"],

  data() {
    return {
      //initialize the qty to the default value
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    //action for buy btn
    submitBuyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
        desc: this.stock.description,
      };

      this.$store.dispatch("submitBuyStock", order);
      this.quantity = 0;
    },
  },
};
</script>