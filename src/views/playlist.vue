<template>
  <div class="home">
    <video-list />
  </div>
</template>

<script>
// @ is an alias to /src
import videoList from '@/components/video-list.cmp';
export default {
  name: 'playlist',
  components: {
    videoList,
  },
};
</script>
