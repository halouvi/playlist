import axios from 'axios';


export const youtubeService = {
    getVideos
}

async function getVideos(searchTerm) {
    var res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyC1IyV2W9PZTl0fv2-1SUzT6Kz6X9LC1do&q=${searchTerm}`)
    try {
        res = res.data.items.map(video => {
            return {
                id: video.id.videoId,
                thumbnail: video.snippet.thumbnails.medium,
                title: video.snippet.title,
                description: video.snippet.description
            }
        })
        return res;
    } catch {
        console.log('error while getting from youtube videos');
    }
}