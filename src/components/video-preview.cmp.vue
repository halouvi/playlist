<template>
  <div class="video-preview">
    <h1>lalalalala preview</h1>
    <span class="flex-1">
      <img :src="video.thumbnail" class="video-image" />
    </span>
    <span class="flex-2">
      <h2>{{ video.title }}</h2>
      <h5>{{ video.desc }}</h5>
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
      console.log('setting', videoId);
    },
  },
  created() {},
};

//     debounce: null,
//   };
// },
// methods: {
//   emitFilter() {
//     if (this.debounce) clearTimeout(this.debounce);
//     this.debounce = setTimeout(() => {
//       this.$emit("doFilter", JSON.parse(JSON.stringify(this.filterBy)));
//       this.$emit("doSort", JSON.parse(JSON.stringify(this.sortBy)));
//     }, 1000);
//   },
</script>