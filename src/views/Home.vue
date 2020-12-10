<template>
  <main class="home">
    <videoPlayer :videoId="videoId" />
  </main>
</template>

<script>
// @ is an alias to /src
import videoPlayer from '@/components/videoPlayer.cmp'

export default {
  computed: {
    videoId() {
      return this.$store.getters.videoId
    },
  },
  components: {
    videoPlayer,
  },
  created() {
    console.log(this.videoId);
  }
}
</script>
