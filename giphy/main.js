// modulr.exports = {
//     API_KEY  : "swY0jpYlTE8iOc22SPGfRrRjzLHTIWyR",
// }

    // const keys = require('./key');
    // const API_KEY 불러온다.

    const API_KEY = "swY0jpYlTE8iOc22SPGfRrRjzLHTIWyR";

    function includeJS(jsFilePath) {
        const js = document.createElement("script");
        js.type = "text/javascript";
        js.src = "jsFilePath";
        document.body.appendChild(js);
    };
    includeJS('./key.js');

    const button = document.querySelector("#js-button");
    const inputArea = document.querySelector("#js-input");
    const resultArea = document.querySelector("#result-area");
    
    // 불변성 
    // const b = 0
    // let a = 0
    // 출력되는 값이 변할 수 있다.
    // const를 사용해주어야 한다.
    // 데이터의 불변성/ 변하지 않는 데이터는 const를 사용한다.
    // 데이터의 동작 원리


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
            resultArea.innerHTML += `<img src=${imageURL}" alt="${alt}" />`
        });

        // const forfath() = parsedData.data;
        // resultArea.innerHTML() => {
        //     <img src="s[https://giphy.com/gifs/computer-cat-wearing-glasses-VbnUQpnihPSIgIXuZv]"></img>
        // }

        // AuthenticatorAssertionResponse.forEach((imageDta, () => {
        //     inner
        // }))

        // dataSet
        // forfath()
        // resultArea.innerHTML => <img src="s[]"
        // API 창으로 소스를 열어보는 역할을 하게 된다.
    };

    button.addEventListener("click", () => {
        searchAndPush(inputArea.value);
    });

    button.addEventListener("keypress", e => {
        if (e.which === 13) searchAndPush(inputArea.value);
    });

