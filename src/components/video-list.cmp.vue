<template>
  <div class="video-list">
    <ul v-for="(video, idx) in videos" :key="idx">
      <li>
        <video-preview :video="video" />
      </li>
    </ul>
  </div>
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