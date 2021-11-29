<template>
  <footer class="footer mt-4 py-3 bg-dark">
    <div class="container">
      <span class="mx-1">{{ name }}</span
      >-<span class="mx-1">{{ year }}</span>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'Footer',
  props: {},
  data: function () {
    return {
      name: '',
      year: 0,
    }
  },

  //Using vuex
  mounted: function () {
    this.name = this.$store.getters.getName
    this.year = this.$store.getters.getYear
    /*
    this.$store.commit("increment");
    */
  },
}
</script>


<style lang="scss">
footer {
  .container {
    margin: 0px 20px;
    /*position: fixed;*/
    bottom: 0;
    width: 100%;
    span {
      color: crimson;
    }
  }
}
</style>