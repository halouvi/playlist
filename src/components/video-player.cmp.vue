<template>
  <section class="video-player">
    <youtube :video-id="currVideo.id" ref="youtube" @playing="playing" :fitParent="true"/>
    <!-- <button @click="playVideo">play</button> -->
  </section>
</template>

<script>
export default {
  props: {
    currVideo: Object,
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
  },
}
</script>
