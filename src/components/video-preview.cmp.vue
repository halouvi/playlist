<template>
  <div class="video-preview" @click.stop="setVideo(video)">
    <span class="flex-1">
      <img :src="video.thumbnail.url" class="video-image" />
    </span>
    <span class="flex-2">
      <h2>{{ video.title }}</h2>
      <h5>{{ video.description }}</h5>
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
    setVideo(video) {
      this.$store.commit({ type: 'setCurrVideo', video });
    },
  },
  created() {},
};
</script>