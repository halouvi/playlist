<template>
  <div class="home">
    <video-list />
    <video-player :currVideo="currVideo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import videoList from '@/components/video-list.cmp';
import videoPlayer from '@/components/video-player.cmp';
export default {
  components: {
    videoList,
    videoPlayer,
  },
  computed: {
    currVideo() {
      return this.$store.getters.currVideo
    }
  }
};
</script>
