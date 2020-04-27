import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Songs from "../views/Songs.vue";
import CreateSong from '../views/CreateSong.vue'
import Song from "../views/Song.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/songs",
    name: "Songs",
    component: Songs,
  },
  {
    path: "/songs/:songId",
    name: "Song",
    component: Song,
  },
  {
    path: "/songs/create",
    name: "song-create",
    component: CreateSong,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
