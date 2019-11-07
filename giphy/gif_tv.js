// modulr.exports = {
//     API_KEY  : "swY0jpYlTE8iOc22SPGfRrRjzLHTIWyR",
// }

// 키워드를 설정한다. 먼저 설정한다.
const contents = ["cat", "wow", "hi", "thx"];
const keyword = contents[Math.floor(Math.random() + contents.length)]

console.log(keyword);

// 키워드를 잘 사용할 수 있어야 한다.
// setInterval

function searchTV() {
    // API 요청
    const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}$api_key=${API_KEY}`;

    const GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', URL);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', e => {
        const rawData = e.target.response;
        const parsedData = JSON.parse(rawData);
        pushToTvDom(parsedData);
    });
}

// function tvArea() { };
    // 여기서는 3초 딜레이를 사용한다.
    // setintervar에서는 함수가 하나 들어간다.
  
const tvArea = document.querySelector("#js-tv-area");
//  저장된 값에서 하나식 꺼내서 동작을 한다.

function pushToTvDom(parsedData) {
    tvArea.innerHTML = null;
    const dataSet = parsedData.data;
    let i = 0;

    setInterval(function() {
        const imageURL = dataSet[i].images.fixed_height.url;
        tvArea.innerHTML = `<img src="${imageURL}" class="img-center"/>`;
        i++;
        if (i >= dataSet.length) i = 0;
    }, 3000)
}

document.addEventListener("DOMContentLoaded", searchTV)

