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
          <th scope="col">
            Title
            <i
              v-on:click="orderPosts('desc')"
              class="bi bi-arrow-down-square"
            ></i>
            <i v-on:click="orderPosts('asc')" class="bi bi-arrow-up-square"></i>
          </th>
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
      creaPost(this.posts)
     
      async function creaPost(posts) {
        // Captura post remot
        const responseGet = await fetch(url + "/" + id);
        const json = await responseGet.json();
        // Envia POST
        const post = { title: json.title, contents: json.contents };
        const responsePost = await fetch("http://localhost:3000/posts", {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const jsonResposta = await responsePost.json();
        console.info("Post Creat:", jsonResposta);
        //Actualitza
        posts.push(post);
        // Update llistat  xtoni --> DONA ERROR DE FETCH  -- ESTUDIAR PERQUE NO VA BÉ
        // return fetch("http://localhost:3000/posts");
      }
    },

    orderPosts: function (order) {
      let returned = 0;
      if (order == "desc") returned = -1;
      else if (order == "asc") returned = 1;
      else throw new Error("method OrderPosts, invalid parameter");

      this.posts.sort(function (a, b) {
        if (a.title < b.title) {
          return returned;
        }
        if (a.title > b.title) {
          return -returned;
        }
        return 0;
      });

      //  console.log(this.posts);
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

td.deletePost,
.bi {
  cursor: pointer;
}
</style>
