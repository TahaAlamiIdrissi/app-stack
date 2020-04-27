<template>
  <div>
    <Panel title="Songs">
      <div v-for="song in songs" :key="song.title">
        <v-layout>
          <v-flex xs6>
            <div class="song-title">{{song.title}}</div>
            <div class="song-genre">{{song.genre}}</div>
            <div class="song-artist">{{song.artist}}</div>
            <v-btn
              @click="navigateTo({  name:'Song',
                                    params:{
                                      songId:song._id
                                      }
                                })"
              color="primary"
            >View</v-btn>
          </v-flex>
          <v-flex xs6>
            <img class="song-image" :src="song.albumImageUrl" alt="song" />
          </v-flex>
        </v-layout>
      </div>
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
    },
    navigateTo(route) {
      this.$router.push(route).catch(() => {
        console.log("already clicked");
      });
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
.song-title {
  font-size: 20px;
}
.song-genre {
  font-size: 28px;
}
.song-artist {
  font-size: 20px;
}
.song-image {
  width: 50%;
}
</style>