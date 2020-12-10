<template>
  <div class="video-list" v-if="videos">
    <ul v-for="(video, idx) in videos" :key="idx">
      <li>
        <video-preview :video="video" />
      </li>
    </ul>
  </div>
  <!-- <div class="video-search">
    <p>Search Video</p>
    <input
      v-model="searchTerm"
      @keyup="querySearch"
      placeholder="Enter your address"
    /> -->
  <!-- <div class="search-vids" v-if="vids">
    <div class="search-vid-preview" v-for="(vid, idx) in vids" :key="idx">
      <img :src="vid.thumbnail.url" @click="changeLinkTo(vid.videoId)" />
    </div>
  </div> -->
  <!-- </div> -->
</template>

<script>
import videoPreview from './video-preview.cmp';
export default {
  name: 'video-list',
  components: {
    videoPreview,
  },
  data() {
    return {};
  },
  methods: {
    // changeLinkTo(url) {
    //   if (url) {
    //     this.cmp.info.content = 'https://www.youtube.com/embed/' + url;
    //   } else {
    //     var embbedVal = this.input.replace('watch?v=', 'embed/');
    //     var idx = embbedVal.indexOf('&');
    //     this.cmp.info.content =
    //       idx === -1
    //         ? embbedVal.substring(0, embbedVal.length)
    //         : embbedVal.substring(0, idx);
    //   }
    //   this.onEdit();
    // },
    // querySearch(queryString, cb) {
    //   cb([{ value: 'Search For ' + queryString }]);
    // },
    // async onSearch() {
    //   try {
    //     const vids = await youtubeService.getVids(this.searchTerm);
    //     this.vids = vids;
    //     this.searchTerm = null;
    //   } catch {
    //     console.log('error while searching for videos.');
    //   }
  },
  created() {},
  // },
};
</script>