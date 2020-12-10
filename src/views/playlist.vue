<template>
  <div class="home">
    <video-filter :getSearchTerm="getSearchTerm" @setSearchTerm="setSearchTerm"/>
    <video-list />
    <video-player :currVideo="getCurrVideo" />
  </div>
</template>

<script>
// @ is an alias to /src
import videoList from '@/components/video-list.cmp'
import videoPlayer from '@/components/video-player.cmp'
import videoFilter from '@/components/video-filter.cmp'

export default {
  components: {
    videoList,
    videoPlayer,
    videoFilter,
  },
  computed: {
    getCurrVideo() {
      return this.$store.getters.currVideo
    },
    getSearchTerm() {
      return this.$store.getters.searchTerm
    },
  },
  methods: {
    setSearchTerm(searchTerm) {
      this.$store.dispatch({type: 'setSearchTerm', searchTerm})
    }
  }
}
</script>
