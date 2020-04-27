<template>
  <div>
    <Panel title="Song"></Panel>
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
      song: null
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;

    try {
      const response = await SongService.show(songId);
      this.song = response.data;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style  scoped>
</style>