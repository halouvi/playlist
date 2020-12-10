<template>
  <div class="video-preview" @click="setVideo">
    <span class="flex-1">
      <img :src="video.thumbnail" class="video-image" />
    </span>
    <span class="flex-2">
      <h2>{{ video.title }}</h2>
      <h5>{{ video.desc }}</h5>
    </span>
    <span class="flex-3">
      <button class="play-btn">►</button>
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
    setVideo() {
      // this.$emit('setVideo', this.video);
      console.log('setting');
    },
  },
  created() {},
};
</script>