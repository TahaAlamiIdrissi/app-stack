<template>
  <div>
    <Panel title="Songs">
      <div v-for="song in songs" :key="song.title">{{song.title}}-{{song.artist}}-{{song.album}}</div>
      <v-btn @click="goToCreate" large color="primary">Add Song</v-btn>
    </Panel>
  </div>
</template>

<script>
import Panel from "./Panel";
import SongService from "../services/SongService";
export default {
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    };
  },
  methods: {
    goToCreate() {
      this.$router.push({ name: "song-create" });
    }
  },
  async mounted() {
    // do a get request to get all the songs
    try {
      const response = await SongService.index();
      this.songs = response.data;
      console.log(this.songs.data);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style  scoped>
</style>