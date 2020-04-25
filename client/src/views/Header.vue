<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title class="home" @click="navigateTo({name:'Home'})">MEVN Stack</v-toolbar-title>

    <v-spacer></v-spacer>
    <div class="d-flex align-center links-style">
      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          depressed
          large
          color="primary"
          @click="navigateTo({name:'Register'})"
        >Sign up</v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          depressed
          large
          color="primary"
          @click="navigateTo({name:'Login'})"
        >log in</v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn"
          depressed
          large
          color="primary"
          @click="logout"
        >log out</v-btn>
      </v-toolbar-items>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      // redirect to home page
      this.$router.push({
        name: "Home"
      });
    }
  }
};
</script>

<style  scoped>
.links {
  color: black;
  text-decoration: none;
  padding-left: 15px;
}
.home {
  cursor: pointer;
}
</style>