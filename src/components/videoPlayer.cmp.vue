<template>
  <section class="video-player">
    <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    <button @click="playVideo">play</button>
  </section>
</template>

<script>
export default {
  props: {
    videoId: String,
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('we are watching!!!', this.videoId)
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
  },
  created() {
    console.log(this.videoId);
  }
}
</script>
