<template>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <span>Place sticky footer content here.</span>
    </div>
  </footer>
</template>


<script>
export default {
  name: "Footer",
  props: {},
};
</script>


<style lang="scss">

footer {
  position: fixed;
  height: 100px;
  bottom: 0;
  width: 100%;
  span {
    color: blue !important;
  }
}
</style>