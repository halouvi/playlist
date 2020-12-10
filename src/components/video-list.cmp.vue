<template>
  <ul class="video-list">
    <li v-for="(video, idx) in videos" :key="idx">
      <video-preview :video="video" />
    </li>
  </ul>
</template>

<script>
import videoPreview from './video-preview.cmp'
export default {
  name: 'video-list',
  props: {
    videos: Array,
  },
  components: {
    videoPreview,
  },
}
</script>
