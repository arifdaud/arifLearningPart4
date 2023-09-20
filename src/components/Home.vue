<template>
  <div>
    <div class="card text-white bg-info mb-3" >
      <div class="card-header"><h1>Trade or View your Portfolio</h1></div>
      <div class="card-body">
        <h5 class="card-title">
          <h5>You may Save & Load your Data !!</h5>
          <h5>Clock on 'End Day' to begin a new Day !</h5>
          <h5>TEST TEST</h5>
        </h5>
        <p class="card-text">Your Fund:{{ funds | currency }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>
