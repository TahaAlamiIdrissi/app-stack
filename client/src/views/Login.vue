<template>
  <v-container class="register">
    <v-row class="text-center">
      <v-col cols="12">
        <h3>Login</h3>
        <v-alert v-if="isError" dense outlined type="error">
          <div v-html="error"></div>
        </v-alert>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>
        <v-text-field v-model="password" type="password" label="password" required></v-text-field>
        <v-btn color="success" class="mr-4" @click="login">Validate</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      isError: false
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        console.log(response);
        this.error = response.data.message;
        this.isError = response.data.isError;
        this.$router.push({name:"Songs"})
      } catch (error) {
        console.log(error);
      }
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
.register {
  width: 30%;
}
.error {
  color: red;
}
</style>