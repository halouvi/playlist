<template>
  <div class="video-preview">
    <span class="flex-1">
      <img :src="video.thumbnail.url" class="video-image" />
    </span>
    <span class="flex-2">
      <h2>{{ video.title }}</h2>
      <h5>{{ video.description }}</h5>
    </span>
    <span class="flex-3">
      <button class="play-btn" @click.stop="setVideo(video.id)">►</button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'video-preview',
  components: {},
  props: {
    video: [Object, Array],
  },
  data() {
    return {};
  },
  methods: {
    setVideo(videoId) {
      this.$store.commit({ type: 'setCurrVideo', videoId });
    },
  },
  created() {},
};
</script>