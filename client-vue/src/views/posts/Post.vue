<template>
  <div class="fila">
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
    <span @click="mostraPost(post.id)">
      <i class="bi bi-eye"></i>
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
      this.$router.push({ name: "viewPost", params: { id: id } });
    },
  },
};
</script>

<style scoped lang="scss">
.fila {
  display: flex;
  line-height: 35px;
}

.fila span:nth-child(1) {
  width: 100px;
}
.fila span:nth-child(2) {
  width: 200px;
  text-align: left;
}
.fila span:nth-child(3) {
  width: 50%;
  text-align: left;
}


.bi {
  padding: 10px 20px;
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
}
</style>