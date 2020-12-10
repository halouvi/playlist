<template>
  <form class="video-filter" @submit="setSearchTerm">
    <input type="text" v-model="deBounce.txt" @input="deBounceSearchTerm" />
    <input type="submit" />
  </form>
</template>

<script>
export default {
  props: {
    getSearchTerm: String,
  },
  data() {
    return {
      searchTerm: null,
      deBounce: {
        txt: null,
        timeout: null,
      },
    }
  },
  methods: {
    deBounceSearchTerm() {
      clearTimeout(this.deBounce.timeout)
      this.deBounce.timeout = setTimeout(() => {
        this.setSearchTerm()
      }, 500)
    },
    setSearchTerm() {
      this.searchTerm = this.deBounce.txt
      this.$emit('setSearchTerm', this.searchTerm)
    },
  },
  created() {
    this.searchTerm = this.getSearchTerm
  },
}
</script>
