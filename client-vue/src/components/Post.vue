<template>
  <div class="post">
    Aqui mostraria la fitxa del Post amb id:{{ id }}
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  props: {
    id: Number,
  }
};
</script>


<style scoped>

</style>