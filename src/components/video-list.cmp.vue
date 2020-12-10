<template>
  <div class="video-list">
    <ul v-for="(video, idx) in videos" :key="idx">
      <li>
        <video-preview :video="video" />
      </li>
    </ul>
  </div>
  <!-- <div class="video-search">
    <p>Search Video</p>
    <input
      v-model="searchTerm"
      @keyup="querySearch"
      placeholder="Enter your address"
    /> -->
</template>

<script>
import videoPreview from './video-preview.cmp';
export default {
  name: 'video-list',
  components: {
    videoPreview,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    videos() {
      return this.$store.getters.videos;
    },
    // changeLinkTo(url) {
    //   if (url) {
    //     this.cmp.info.content = 'https://www.youtube.com/embed/' + url;
    //   } else {
    //     var embbedVal = this.input.replace('watch?v=', 'embed/');
    //     var idx = embbedVal.indexOf('&');
    //     this.cmp.info.content =
    //       idx === -1
    //         ? embbedVal.substring(0, embbedVal.length)
    //         : embbedVal.substring(0, idx);
    //   }
  },
  created() {},
  // },
};
</script>