const config = require('./config.json')
let commands = require('./commands')

const channelId = 'UCV0FN2UnOJl-CfCfYoFVC9g'

const subsUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${config.googleToken}`;
const videosUrl = `https://www.googleapis.com/youtube/v3/search?key=${config.googleToken}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`

const request = require('request');

let videoStats = []

let data = {
    lastSubs: 287,
    subs: 0,
    subGain: 0,
    viewCount: 12938,
    videoCount: 26,
}
let newestVideo = {
    thumbnail: '',
    id: '',
    description: '',
    title: ''
};
let mostPopular = {
    thumbnail: '',
    id: '',
    description: '',
    title: ''
};

async function subCount() {
    await request({
        url: subsUrl,
        method: 'GET'
    }, (error, response, text) => {
        let JSONResponse = JSON.parse(text);
        console.log(JSONResponse);
        data.subs = JSONResponse.items[0].statistics.subscriberCount;
        data.viewCount = JSONResponse.items[0].statistics.viewCount;
        data.videoCount = JSONResponse.items[0].statistics.videoCount;
        data.subGain = data.subs - data.lastSubs;
        data.lastSubs = data.subs;
    })
}

async function videos() {
    await request({
        url: videosUrl,
        method: 'GET'
    }, (error, response, text) => {
        let JSONResponse = JSON.parse(text);
        console.log(commands.newestVideo)
        newestVideo.id = JSONResponse.items[0].id.videoId
        newestVideo.description = JSONResponse.items[0].snippet.description
        newestVideo.thumbnail = JSONResponse.items[0].snippet.thumbnails.high.url
        newestVideo.title = JSONResponse.items[0].snippet.title
    })
}

module.exports = {
    videos,
    subCount,
    newestVideo,
    data
}