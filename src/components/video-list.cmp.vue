<template>
  <div class="video-list">
    <h1>lalala</h1>
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
  },
  created() {},
};
</script>