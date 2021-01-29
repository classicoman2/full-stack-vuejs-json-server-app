<template>
  <div class="hello">
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
        <tr v-for="post in posts" v-bind:key="post">
          <th scope="row">{{post.id}}</th>
          <td>{{post.title}}</td>
          <td>{{post.contents}}</td>
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
</style>
