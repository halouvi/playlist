<template>
  <div id="app" class="main-layout">
    <main-nav />
    <router-view />
  </div>
</template>

<script>
import mainNav from '@/components/main-nav.cmp';
export default {
  components: {
    mainNav,
  },
};
</script>