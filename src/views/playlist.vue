<template>
  <div class="home main-layout">
    <main-nav />
  </div>
</template>

<script>
// @ is an alias to /src
import mainNav from '@/components/main-nav.cmp';
export default {
  name: 'playlist',
  components: {
    mainNav,
  },
};
</script>
