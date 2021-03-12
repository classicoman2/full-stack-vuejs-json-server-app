<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link">
              <router-link to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/about">About</router-link></a
            >
          </li>
        </ul>
        <form @submit.prevent class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="valorFiltre"
            v-on:keyup.enter="filtrarFiles"
          />

          <router-link :to="{ name: 'filtre', params: { f: valorFiltre } }"
            >Filtrar</router-link
          >
        </form>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link">
              <router-link to="/signup">Sign Up</router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<script>
import router from "../router";

export default {
  name: "Header",
  props: {},
  data: () => {
    return {
      valorFiltre: "",
    };
  },
  methods: {
    filtrarFiles: function () {
      //Filtrar files cridant a la ruta directament
      router.push({ name: "filtre", params: { f: this.valorFiltre } });
      //  { path: '/filtre/:f', component: Home, props:true, name: 'filtre' }
    },
  },
};
</script>


<style scoped>
</style>