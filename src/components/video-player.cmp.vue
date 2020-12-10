<template>
  <section class="video-player">
    <youtube :video-id="currVideo.id" ref="youtube" @playing="playing" :fitParent="true"/>
    <h3>{{currVideo.title}}</h3>
    <h5>{{currVideo.description}}</h5>
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
    playing() {
      console.log('we are watching!!!', this.currVideo)
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
  },
}
</script>
