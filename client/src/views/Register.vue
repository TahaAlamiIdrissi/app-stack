<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="register">
        <h3>Register</h3>
        <input v-model="email" type="email" name="email" placeholder="enter your email ..." />
        <br />
        <input
          v-model="password"
          type="password"
          name="password"
          placeholder="enter your password ..."
        />
        <br />
        <button @click="register">Register</button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style  scoped>
.register input[type="email"] {
  padding: 5px;
  margin: 15px;
}
.register input[type="password"] {
  padding: 5px;
  margin: 15px;
}
</style>