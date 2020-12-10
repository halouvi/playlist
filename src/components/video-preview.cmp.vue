<template>
  <div class="video-preview" v-if="video">
    <img :src="video.thumbnail" class="video-image" />
    <h2>{{ video.title }}</h2>
    <h5>{{ video.desc }}</h5>
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
  methods: {},
  created() {},
};
</script>