<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <Panel title="Song Metadata">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-genre">{{song.genre}}</div>
              <div class="song-artist">{{song.artist}}</div>
            </v-flex>
            <v-flex>
              <img class="song-image" :src="song.albumImageUrl" alt="song" />
            </v-flex>
          </v-layout>
        </Panel>
      </v-flex>
      <v-flex xs4>
        <Panel title="lyrics">
          <div>
            {{song.lyrics}}
          </div>
        </Panel>
      </v-flex>
    </v-layout>
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
      song: {}
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;

    try {
      const response = await SongService.show(songId);
      this.song = response.data;
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
  font-size: 26px;
}
.song-artist {
  font-size: 20px;
}
</style>