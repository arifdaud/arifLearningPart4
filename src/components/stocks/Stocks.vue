<template>
  <div>
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"></stock>
    asdasd
  </div>
</template>
<script>
import Stock from "./StockPlaceStock.vue";
export default {
  components: {
    Stock,
  },
  computed:{
    stocks(){
      return this.$store.getters.stocks;
    }
  }
};
</script>