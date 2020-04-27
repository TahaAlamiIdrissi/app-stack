<template>
  <v-layout>
    <v-flex xs6>
      <Panel title="Create Song">
        <v-text-field :rules="[required]"  v-model="song.title" label="title" required></v-text-field>
        <v-text-field :rules="[required]" v-model="song.artist" label="artist" required></v-text-field>
        <v-text-field :rules="[required]" v-model="song.genre" label="genre" required></v-text-field>
        <v-text-field v-model="song.album" label="album" required></v-text-field>
        <v-text-field v-model="song.albumImageUrl" label="albumImageUrl" required></v-text-field>
        <v-text-field v-model="song.youtubeId" label="youtube ID" required></v-text-field>
      </Panel>
    </v-flex>
    <v-flex xs4>
      <Panel title="Lyrics and tab">
        <v-textarea v-model="song.lyrics" multi-line label="lyrics" required></v-textarea>
        <v-textarea v-model="song.tab" label="tab" multi-line required></v-textarea>
      </Panel>
      <v-btn @click="create" large color="primary">Create</v-btn>
    </v-flex>
  </v-layout>
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
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value)=> !!value || 'Required.'
    };
  },
  methods: {
    async create() {
      try {
        const response = await SongService.create(this.song);
        this.$router.push({name:"Songs"})
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
</style>