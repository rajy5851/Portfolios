const API_KEY = "swY0jpYlTE8iOc22SPGfRrRjzLHTIWyR";

function includeJS(jsFilePath) {
    const js = document.createElement("script");
    js.type = "text/javascript";
    js.src = jsFilePath;
    document.body.appendChild(js);
};
includeJS('./key.js');

const button = document.querySelector("#js-button");
const inputArea = document.querySelector("#js-input");
const resultArea = document.querySelector("#result-area");

// API 요청
function searchAndPush(keyword) {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load', e => {
    const rawData = e.target.response;
    const parsedData = JSON.parse(rawData);
    console.log(parsedData);
    pushToDOM(parsedData);
  });
};

// DOM 그리기
function pushToDOM(parsedData) {
  resultArea.innerHTML = null;
  const dataSet = parsedData.data;

  dataSet.forEach(imageData => {
    const imageURL = imageData.images.fixed_height.url;
    const alt = imageData.title;
    resultArea.innerHTML += `<img src="${imageURL}" alt="${alt}" />`
  });
}

button.addEventListener('click', () => {
  searchAndPush(inputArea.value);
});

inputArea.addEventListener('keypress', e => {
  if (e.which === 13) searchAndPush(inputArea.value);
});