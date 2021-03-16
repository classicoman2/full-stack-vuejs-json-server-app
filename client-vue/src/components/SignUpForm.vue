<template>
  <div class="col-sm-8">
    <form @submit.prevent class="needs-validation" novalidate>
      <h2 class="mb-5 text-center">Sign Up Form</h2>

      <div class="row">
        <div class="col-md-10 mb-3">
          <label for="firstName">First name</label>
          <input
            type="text"
            class="form-control"
            v-bind:class="{
              'is-valid': validFirstName(),
              'is-invalid': !validFirstName(),
            }"
            id="firstName"
            v-model="data.firstName"
            placeholder=""
            value=""
            required
          />
          <div class="invalid-feedback">Valid first name is required.</div>
          <div class="valid-feedback">First name is correct.</div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 mb-3">
          <label for="lastName">Last name</label>
          <input
            type="text"
            class="form-control"
            v-bind:class="{
              'is-valid': validLastName(),
              'is-invalid': !validLastName(),
            }"
            id="lastName"
            v-model="data.lastName"
            placeholder=""
            value=""
            required
          />
          <div class="invalid-feedback">Valid last name is required.</div>
          <div class="valid-feedback">Last name is correct.</div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 mb-3">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            v-bind:class="{
              'is-valid': validUsername(),
              'is-invalid': !validUsername(),
            }"
            id="username"
            v-model="data.username"
            placeholder="Username"
            required
          />
          <div class="invalid-feedback">Username is incorrect.</div>
          <div class="valid-feedback">Username is correct</div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 mb-3">
          <label for="email">Email </label>
          <input
            type="email"
            class="form-control"
            v-bind:class="{
              'is-valid': validEmail(),
              'is-invalid': !validEmail(),
            }"
            id="email"
            v-model="data.email"
            placeholder="you@example.com"
          />
          <div class="invalid-feedback">Please enter a valid email.</div>
          <div class="valid-feedback">Email is correct</div>
        </div>
      </div>

      <hr class="mb-4" />
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="same-address" />
        <label class="custom-control-label" for="same-address"
          >By creating an account, you agree our Conditions of Use and Privacy
          Notice.</label
        >
      </div>
      <button
        class="btn btn-primary btn-lg mt-4"
        type="submit"
        v-on:click="registerUser"
      >
        Register
      </button>
    </form>
  </div>
</template>


<script>
export default {
  name: "SignUpForm",
  props: {},
  data: () => {
    return {
      data: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
      },
    };
  },
  methods: {
    registerUser: function () {
      //Check name
      let isFormValidated = true;

      if (!this.validFirstName()) {
        document.getElementById("firstName").classList.add("is-invalid");
        isFormValidated = false;
      }
      if (!this.validLastName()) {
        document.getElementById("lastName").classList.add("is-invalid");
        isFormValidated = false;
      }

      if (!this.validEmail()) {
        document.getElementById("email").classList.add("is-invalid");
        isFormValidated = false;
      }

      if (isFormValidated) {
        //xtoni
        console.log(JSON.stringify(this.data));
      } else {
        console.log("Some fields are missing/incorrect");
      }
    },

    validFirstName: function () {
      return this.validText(this.data.firstName);
    },

    validLastName: function () {
      return this.validText(this.data.lastName);
    },

    validUsername: function () {
      //xtoni
      return true;
    },

    validEmail: function () {
      //https://stackoverflow.com/questions/5601647/html5-email-input-pattern-attribute
      let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

      console.warn(pattern.test(this.data.email));

      return pattern.test(this.data.email);
    },

    // Text is a name or a surname
    validText: function (text) {
      let pattern = /[a-zA-Z]{5,}/g;
      // Mirar si és un first name valid
      return pattern.test(text);
    },
  },
  mounted: function () {
    //By default, no error is shown in the form fields
    document.getElementById("firstName").classList.remove("is-invalid");
    document.getElementById("lastName").classList.remove("is-invalid");
    document.getElementById("username").classList.remove("is-invalid");
    document.getElementById("email").classList.remove("is-invalid");
  },
};
</script>

<style scoped>
/* xtoni - form inputs max width */
input.form-control {
  max-width: 92vw !important;
}
</style>