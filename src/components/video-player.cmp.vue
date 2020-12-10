<template>
  <section class="video-player">
    <youtube :video-id="currVideo" ref="youtube" @playing="playing" :fitParent="true"/>
    <!-- <button @click="playVideo">play</button> -->
  </section>
</template>

<script>
export default {
  props: {
    currVideo: String,
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('we are watching!!!', this.currVideo)
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
  },
  created() {
    // console.log(this.currVideo);
  }
}
</script>
