<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center links-style" >
        <router-link class="links" to="/">Home</router-link>
        <router-link class="links" to="/register">Register</router-link>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>

<style  scoped>
.links{
  color: black;
  text-decoration: none;
  padding-left: 15px;
  
}

</style>