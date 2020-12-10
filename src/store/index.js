import Vue from 'vue'
import Vuex from 'vuex'
import { youtubeService } from '@/services/youtube.service.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchTerm: '',
    currVideo: null,
    videos: null,
  },
  getters: {
    currVideo(state) {
      return state.currVideo
    },
    videos(state) {
      return state.videos
    },
  },
  mutations: {
    setCurrVideo(state, { video }) {
      state.currVideo = video
    },
    setVideos(state, { videos }) {
      state.videos = videos
    },
  },
  actions: {
    async getVideos({ commit }, { searchTerm }) {
      try {
        const videos = await youtubeService.getVideos(searchTerm)
        commit({ type: 'setVideos', site: videos })
        return videos
      } catch {
        console.log('cannot get videos');
      }
    },
  },
  modules: {
  }
})
