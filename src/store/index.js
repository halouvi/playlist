import Vue from 'vue'
import Vuex from 'vuex'
import { youtubeService } from '@/services/youtube.service.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchTerm: null,
    currVideo: '2CXD8PK6Djc',
    videos: null,
  },
  getters: {
    currVideo(state) {
      return state.currVideo
    },
    videos(state) {
      return state.videos
    },
    searchTerm(state) {
      return state.searchTerm
    },
  },
  mutations: {
    setCurrVideo(state, { video }) {
      state.currVideo = video
    },
    setVideos(state, { videos }) {
      state.videos = videos
    },
    setSearchTerm(state, { searchTerm }) {
      state.searchTerm = searchTerm
    },
  },
  actions: {
    setSearchTerm(context, payload) {
      context.commit(payload)
      context.dispatch({ type: 'getVideos', searchTerm: payload.searchTerm })
    },
    async getVideos({ commit }, { searchTerm }) {
      try {
        const videos = await youtubeService.getVideos(searchTerm)
        commit({ type: 'setVideos', videos })
        return videos
      } catch {
        console.log('cannot get videos')
      }
    },
  },
})
