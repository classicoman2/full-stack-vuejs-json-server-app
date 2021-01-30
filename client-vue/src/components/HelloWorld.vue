<template>
  <div class="hello">
    <!-- Cheat Sheet: Template String -->
    <h1>{{ msg }}</h1>
    <button v-on:click="addPost" class="btn btn-primary">
      Add Post (with random contents)
    </button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Contents</th>
        </tr>
      </thead>
      <tbody>
        <!-- Cheat Sheet: maintaining state -->
        <tr v-for="post in postsUpdated" v-bind:key="post.id">
          <th scope="row">{{ post.id }}</th>
          <td>{{ post.title }}</td>
          <td>{{ post.contents }}</td>
          <td v-on:click="deletePost(post.id)">
            <i class="bi bi-trash-fill"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => {
    return {
      posts: [],
    };
  },
  computed: {
    postsUpdated: function () {
      return this.posts;
    },
  },
  mounted() {
    // Carrega posts
    this.getPosts();
  },
  methods: {
    getPosts: function () {
      fetch("http://localhost:3000/posts", { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          this.posts = data;
        });
    },
    deletePost: function (id) {
      //Delete from API
      fetch(`http://localhost:3000/posts/${id}`, { method: "DELETE" })
        .then((response) => response.json())
        .then(() => {
          //Delete from posts
          this.posts.forEach((element, key) => {
            if (element.id == id) {
              // Elimina dels posts també
              this.posts.splice(key, 1);
              return;
            }
          });
        });
    },

    addPost: function () {
      let url =
        "https://my-json-server.typicode.com/classicoman2/fakeRESTserver/posts";
      // Genera post aleatoriament
      let id = Math.floor(Math.random() * 3) + 1;

      // Resolem la promesa amb then
      creaPostiActualitza()
        .then((response) => response.json())
        .then((json) => {
          console.info("Posts actualitzats:", json);
        })
        .catch((error) => console.error("Ha passat aquest error:", error));

      async function creaPostiActualitza() {
        // Captura post remot
        const responseGet = await fetch(url + "/" + id);
        const json = await responseGet.json();
        console.warn(json);
        // Envia POST
        const responsePost = await fetch("http://localhost:3000/posts", {
          method: "POST",
          body: JSON.stringify({ title: json.title, contents: json.contents }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const jsonResposta = await responsePost.json();
        console.info("Post Creat:", jsonResposta);
        //Actualitza

        // Update llistat
        return fetch('http://localhost:3000/posts');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

td.deletePost {
  cursor: pointer;
}
</style>
