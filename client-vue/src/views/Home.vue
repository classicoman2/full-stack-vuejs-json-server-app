<template>
  <div class="home">
    <div class="images mb-4">
      <img
        class="img-fluid img-thumbnail mx-4"
        alt="Vue logo"
        src="../assets/logo-vue.png"
      />
      <img
        class="img-fluid img-thumbnail mx-4"
        alt="Bootstrap logo"
        src="../assets/bootstrap-social-logo.png"
      />
    </div>
    <h1 class="mb-4">{{ msg }}</h1>

    <Posts />

  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "@/views/posts/Posts";

export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js + Bootstrap 4 App",
    };
  },
  components: {
    Posts,
  },
};
</script>


<style scoped>
.images {
  height: 200px;
  display: flex;
  justify-content: center;
}

h1 {
  text-align: center;
}
</style>