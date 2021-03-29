<template>
  <div class="hello">
    <button v-on:click="addPost" class="btn btn-primary mt-3 mb-2">
      Add Post (with random contents)
    </button>
    <div class="fila headers">
      <span>#</span>
      <span
        >Title
        <i v-on:click="orderPosts('desc')" class="bi bi-arrow-down-square"></i>
        <i v-on:click="orderPosts('asc')" class="bi bi-arrow-up-square"></i>
      </span>
      <span>Contents</span>
    </div>
    <!-- Cheat Sheet: maintaining state -->
    <div v-for="post in postsToShow" :key="post.id">
      <Post :post="post" @deletepost="deletePost" />
    </div>
    <nav aria-label="Page navigation" class="mt-4 ml-4">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" @click="changePage(-1)">Previous</a>
        </li>
        <li v-for="link in numPagesLinks" :key="link" class="page-item">
          <a class="page-link" href="#" @click="changePage(link)">{{ link }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click="changePage(-2)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
import Post from "@/views/posts/Post.vue";

export default {
  name: "Posts",
  components: { Post },
  props: {
    f: String,
  },
  data: () => {
    return {
      posts: [],
      //Pagination
      start: 0,
      inc: 0,
      numPages: 0,
      numPagesLinks: [],
    };
  },
  watch: {
    $route(to, from) {
      console.info("to = ", to);
      console.info("from = ", from);
      // get filtre
      let filtre = to.params.f;
      this.getPosts(filtre);
    },
  },

  // Propietats Computades
  computed: {
    postsToShow() {
      // Show only the posts that fit between start and inc
      return this.posts.slice(this.start, this.start + this.inc);
    },
    updateNavigationButtons() {
      return 1;
    },
  },
  mounted() {
    //vuex store
    const url = this.$store.getters.getAPIurl;

    //Pagination initialize
    this.start = this.$store.state.pagination.start;
    this.inc = this.$store.state.pagination.inc;

    // Carrega posts
    fetch(url + "posts", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.posts = data;

        //Get number of pages & Links
        this.numPages = Math.floor(this.posts.length / this.inc);
        //Si hi ha residu --> -1 pagina
        if (this.numPages * this.inc < this.posts.length) this.numPages++;

        console.log("numpages = ", this.numPages);

        // Array de descr de botons de navegacio --> v-for
        for (let i = 1; i <= this.numPages; i++) this.numPagesLinks.push(i);

        console.log(this.numPagesLinks);
      });

    //captura event  xtoni ????? que fa aixo??
    this.$on("filterEvent", () => {
      console.log("aaa");
      //this.filterPosts(valorFiltre);
    });
  },

  methods: {
    getPosts(filtre) {
      //vuex store
      const url = this.$store.getters.getAPIurl;
      fetch(url + "posts", { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          //Hi ha filtre
          console.log(filtre);
          if (filtre == " ") this.posts = data;
          else
            this.posts = data.filter(
              (post) => post.title.indexOf(filtre) != -1
            );
        });
    },

    deletePost(id) {
      //vuex store
      const url = this.$store.getters.getAPIurl;

      //Delete from API
      fetch(`${url}posts/${id}`, { method: "DELETE" })
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

    addPost() {
      let urlRemot =
        "https://my-json-server.typicode.com/classicoman2/fakeRESTserver/posts";
      // Genera post aleatoriament
      let id = Math.floor(Math.random() * 3) + 1;

      // Resolem la promesa amb then
      creaPost(this.posts);

      //vuex store
      const url = this.$store.getters.getAPIurl;

      async function creaPost(posts) {
        // Captura post remot
        const responseGet = await fetch(urlRemot + "/" + id);
        const json = await responseGet.json();

        const post = { title: json.title, contents: json.contents };

        const responsePost = await fetch(url + "posts", {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const jsonResposta = await responsePost.json();
        console.info("Post Creat:", jsonResposta);
        //Actualitza
        posts.push(jsonResposta);
      }
    },

    orderPosts(order) {
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

    filterPosts(filtre) {
      this.posts.filter((post) => post.title.indexOf(filtre) != -1);
    },

    changePage(page) {
      //Back
      if (page == -1) {
        if (this.start) {
          this.start -= this.inc;
        }
        return;
      }
      //Forward
      if (page == -2) {
        if (this.start + this.inc < this.posts.length) {
          this.start += this.inc;
        }
        return;
      }

      //change start
      this.start = this.inc * page - this.inc;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  text-align: center;
}

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

.posts {
  display: flex;
  flex-direction: column;
}

.bi {
  cursor: pointer;
}

.headers {
  font-weight: 600;
  display: flex;
  line-height: 35px;
}

.headers span:nth-child(1) {
  width: 100px;
}
.headers span:nth-child(2) {
  width: 200px;
  text-align: left;
}
.headers span:nth-child(3) {
  width: 50%;
  text-align: left;
}
</style>
