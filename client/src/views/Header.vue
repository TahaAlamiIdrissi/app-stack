<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title class="home" @click="navigateTo({name:'Home'})">MEVN Stack</v-toolbar-title>

    <v-spacer></v-spacer>
    <div class="d-flex align-center links-style">
      <v-toolbar-items>
        <v-btn depressed large color="primary" @click="navigateTo({name:'Register'})">Sign up</v-btn>
        <v-btn depressed large color="primary" @click="navigateTo({name:'Login'})">log in</v-btn>

      </v-toolbar-items>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
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