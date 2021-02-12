<template>
  <div class="home">
    <div class="images mb-4">
      <img class="img-fluid img-thumbnail mx-4" alt="Vue logo" src="../assets/logo-vue.png" />
      <img
        class="img-fluid img-thumbnail mx-4"
        alt="Bootstrap logo"
        src="../assets/bootstrap-social-logo.png"
      />
    </div>
    <MainPage msg="Welcome to Your Vue.js + Bootstrap 4 App" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";

export default {
  name: "Home",
  components: {
    MainPage,
  },
};
</script>


<style scoped>
.images {
  height: 200px;
  display: flex;
  justify-content: center;
}
</style>