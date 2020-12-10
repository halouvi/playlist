<template>
  <div class="playlist flex space">
    <video-list />
    <video-player :currVideo="getCurrVideo" />
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
    getCurrVideo() {
      return this.$store.getters.currVideo;
    },
    getSearchTerm() {
      return this.$store.getters.searchTerm;
    },
  },
  methods: {
    setSearchTerm(searchTerm) {
      this.$store.dispatch({ type: 'setSearchTerm', searchTerm });
    },
  },
};
</script>
