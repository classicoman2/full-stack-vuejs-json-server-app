<template>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <span class="text-muted">Place sticky footer content here.</span>
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

$primary: red;

footer {
  position: fixed;
  height: 100px;
  bottom: 0;
  width: 100%;
}
</style>