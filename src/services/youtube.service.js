import axios from 'axios';


export const youtubeService = {
    getVideos
}

async function getVideos(searchTerm) {
    var res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyDUV8Bo2XWjps_p1U8b9lsVXK9wJ0MRlcg&q=${searchTerm}`)
    try {
        res = res.data.items.map(video => {
            return {
                videoId: video.id.videoId,
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