// ES5

const numbers = [1, 2, 3];
let sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
};

// ES6

sum = numbers.reduce((acc, number) => {
    console.log(acc);
    return acc = number;
}, 0);

// 곱셈 멀티플라이

console.log(sum);

// 곱셈하자.
let multiply = numbers.reduce((acc, number) => {
    console.log(acc);
    return acc * number;
}, 1);

console.log(multiply)

// 문자열 가능
const stringSet = ['apple', 'is', 'good'];
console.log(stringSet.reduce((acc, str) => acc + str), '');
// console.log(stringSet.reduce((acc, str)))

const dNumbers1 = numbers.map(e => e * 2);
console.log(dNumbers1);

// dNumbers1,2 결과를 똑같이 나오도록 만들어 주세요.
const dNumbers2 = numbers.reduce(() => {}, []);
console.log(dNumbers2);

// 빈 배열을 두 번째 인자로 입력해주면 된다.

// 함수를 만든다.

// 실습
// 알고리즘 : () 검사하는 함수 만들기
// ')(', ')()'

const items = ['item1', 'item2', 'item3'];
const copy = [];

// 이전
for (let i = 0; i < items.length; i++) {
    copy.push(items[i]);
}

// 이후
items.forEach(function(item) {
    copy.push(item);
});

function log

// function




