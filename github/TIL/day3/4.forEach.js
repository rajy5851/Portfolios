// ES5

const colors = ['red', 'blue', 'green'];

// for (var i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// };

// ES6
// colors.forEach(color => console.log(color));


// 1. 실습
function forEach2(el, callback) {
  if (!Array.isArray(el)) throw new Error('배열이 아닙니다. 다시 입력해주세요.');
  // 여기를 구현해주세요!
  // ES5 for문
  for (let i = 0; i < el.length; i++) {
    callback(el[i]);
  };
};

// forEach2(colors, e => console.log(e));

const images = [
  {
    h:5,
    w:5,
  },

  {
    h:15,
    w:15,
  },

  {
    h:25,
    w:25,
  }
];

const area = [];

images.forEach(el => {
  area.push(el.h * el.w);
});
// forEach문을 사용해서 w * h 를 변수 area에 저장해주세요!
// push()

console.log(area);