<template>
  <div class="fila" @click="mostraPost(post.id)">
    <span>{{ post.id }}</span>
    <span>{{ post.title }}</span>
    <span>{{ post.contents }}</span>
<!--
    <router-link
      :to="{ name: 'post', params: { id: String(post.id) }, props: true }"
      >Post</router-link
    >
-->
    <span v-on:click="deletePost(post.id)">
      <i class="bi bi-trash-fill"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
  methods: {
      mostraPost(id) {
          this.$router.push({ name: 'viewPost', params: { id: id } })
      }
  },
};
</script>

<style>
</style>