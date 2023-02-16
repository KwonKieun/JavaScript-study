const API_KEY=`AIzaSyAZySKlIuqijcQQNDoebXgY1Rj_jaNRi6s`;
let videoDataBox=[];
const videoListBox = document.querySelector('.video-list');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');
let topics = document.querySelectorAll('.category>li');
topics.forEach(ele=>ele.addEventListener('click', (e)=>{getTopic(e)}));

const getsearchVideo = async() => {
    let keyword = searchInput.value;
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}type=video&key=${API_KEY}`
    let response = await fetch(url) ;
    let videoData = await response.json() ;
    videoDataBox = videoData.items;
    console.log(videoDataBox)
    render()
}

const getTopic = async(e) => {
    let topic = e.target.dataset.topic;
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${topic}type=video&key=${API_KEY}`
    let response = await fetch(url) ;
    let videoData = await response.json() ;
    videoDataBox = videoData.items;
    console.log(videoDataBox)
    render()
}

const videoList = async () => {
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${API_KEY}`
    let response = await fetch(url) ;
    let videoData = await response.json() ;
    videoDataBox=videoData.items;
    console.log(videoDataBox)
    render()
}
const render = () => {
    let videoResult = '' ;
    videoResult=videoDataBox.map((item)=>{
        return `<div class="video-item">
                    <div class="thum-img">
                        <img src=${item.snippet.thumbnails.medium.url} alt="" />
                    </div>
                    <div class="video-txt">
                        <h2>${item.snippet.title}</h2>
                        <h3>${item.snippet.channelTitle}</h3>
                    </div>
                </div>`
     }).join("")
     videoListBox.innerHTML = videoResult;
}

searchInput.addEventListener('keypress', (e)=>{
    if(e.keyCode === 13){
        getsearchVideo();
    }
});


searchBtn.addEventListener('click', getsearchVideo);
videoList();
