<template>
  <!-- <div > -->
    <ul class="video-list">
      <li v-for="(video, idx) in videos" :key="idx">
        <video-preview :video="video" />
      </li>
    </ul>
  <!-- </div> -->
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