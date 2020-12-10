<template>
  <div class="main-nav full main-layout">
    <div class="part flex space">
      <span class="logo">
        <h1>YouD<span class="red">oo</span>b</h1>
        <img src="@/assets/youtube-logo.png" alt="" />
      </span>
      <video-filter
        class="flex center"
        :getSearchTerm="getSearchTerm"
        @setSearchTerm="setSearchTerm"
      />
    </div>
  </div>
</template>

<script>
import videoFilter from '@/components/video-filter.cmp';
export default {
  name: 'main-nav',
  components: {
    videoFilter,
  },
  data() {
    return {};
  },
  computed: {
    getSearchTerm() {
      return this.$store.getters.searchTerm;
    },
  },
  methods: {
    setSearchTerm(searchTerm) {
      this.$store.dispatch({ type: 'setSearchTerm', searchTerm });
    },
  },
  created() {
    this.setSearchTerm('radiohead');
  },
};
</script>