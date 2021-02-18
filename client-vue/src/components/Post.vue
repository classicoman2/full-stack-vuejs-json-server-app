<template>
  <div class="post">
    <form class="needs-validation" novalidate>
      <div class="row">
        <label class="col-5" for="firstName">Title</label>
        <input
          type="text"
          class="col-7 form-control"
          v-bind:value="post.title"
        />
      </div>
      <div class="row">
        <label class="col-5" for="firstName">Contents</label>
        <input
          type="text"
          class="col-7 form-control"
          v-bind:value="post.contents"
        />
      </div>
    </form>
    <!-- Print Comments -->
    <table class="table">
      <tr v-for="comment in post.comments" v-bind:key="comment.user">
        <td>{{ comment.user }}</td> <td> {{ comment.contents }} </td>
      </tr>
    </table>
    <!-- Write new Comment -->
    <form class="needs-validation" novalidate>
      <div class="row">
        <label class="col-5" for="firstName">User</label>
        <input
          type="text"
          class="col-7 form-control"
          v-model="newcomment.user"
        />
      </div>
      <div class="row">
        <label class="col-5" for="firstName">Comment</label>
        <input
          type="text"
          class="col-7 form-control"
          v-model="newcomment.contents"
        />
      </div>
      <a v-on:click="addComment" class="btn btn-secondary mt-2"
        >Publish Comment</a
      >
    </form>
  </div>
</template>


<script>
export default {
  name: "Post",
  props: {
    id: String,
  },
  data: function () {
    return {
      post: {},
      newcomment: { user: "", contents: "" },
    };
  },
  mounted() {
    //captura post i comments
    fetch("http://localhost:5000/posts/" + this.id)
      .then((r) => r.json())
      .then((data) => {
        this.post = data;
      });
  },
  methods: {
    addComment: function () {
      //console.log(this.newcomment)

      add(this.post, this.newcomment)
        .then((data) => {
          console.log(data);
        })
        .catch((error) =>
          console.error("There was an error while storing the comment", error)
        );

      async function add(post, comment) {
        //get comments
        if (post.comments === undefined) {
          post.comments = [{ user: comment.user, contents: comment.contents }];
          console.log("There are no comments yet");
        } else {
          post.comments.push({
            user: comment.user,
            contents: comment.contents,
          });
        }

        const responsePost = await fetch(
          "http://localhost:5000/posts/" + post.id,
          {
            method: "PATCH",
            body: JSON.stringify({
              comments: post.comments,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        return await responsePost.json();
      }
    },
  },
};
</script>


<style scoped>
form {
  width: 400px;
  margin-left: 20px;
}
</style>