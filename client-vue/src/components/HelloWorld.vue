<template>
  <div class="hello">
    <!-- Cheat Sheet: Template String -->
    <h1>{{ msg }}</h1>
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
          <th scope="row">{{post.id}}</th>
          <td>{{post.title}}</td>
          <td>{{post.contents}}</td>
          <td v-on:click="deletePost(post.id)"><i class="bi bi-trash-fill"></i></td>
        </tr>
       </tbody>
     </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg:String,
    posts:Array
  }, 
  computed: {
    postsUpdated: function() {
      return this.posts
    }
  },
  methods: {
    deletePost: function(id) {
        //Delete from API
        fetch(`http://localhost:3000/posts/${id}` , { method: 'DELETE'})
        .then(response => response.json())
        .then(() => {
          //Delete from posts
          this.posts.forEach((element, key) => {
            if (element.id == id) {
              // Elimina dels posts també
              this.posts.splice(key,1);
              return;
          }
        }); 
      }) 
    }
  }

}
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
  cursor:pointer;
}
</style>
