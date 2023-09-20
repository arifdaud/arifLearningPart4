<template>
  <div>
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"></stock>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Stock from "./portStock.vue";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
  components: {
    Stock,
  },
};
</script>