<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch("setStocks");
  },
};
</script>
<style>
</style>
