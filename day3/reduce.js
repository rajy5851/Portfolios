// ES5
const numbers = [1, 2, 3];
let sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
};

// ES6

sum = numbers.reduce((acc, number) => {
    console.log(acc);
    return acc + number;
}, 0);
console.log(sum);

// 곱셈해보자
let multiply = numbers.reduce((acc, number) => {
    console.log(acc);
    return acc * number;
}, 1);
console.log(multiply)

// 문자열도 가능합니다.
const stringSet = ['apple', 'is', 'good'];
// console.log(stringSet.reduce((acc, str) => acc + str), '');

const dNumbers1 = numbers.map(e => e * 2);
// console.log(dNumbers1);

// dNumbers1와 결과를 똑같이 나오도록 만들어 주세요.
const dNumbers2 = numbers.reduce((acc, number) => {
    // console.log(acc);
    acc.push(number * 2);
    return acc;
}, []);
// console.log(dNumbers2);

// 실습
// 알고리즘 : () 검사하는 함수 만들기
// ')(', ')()'
// '()', '(())()'

function checkParens(str) {
    return str.split('').reduce((acc, char) => {
        if (acc < 0) {
            return acc;
        } else if (char === '(') {
            ++acc;
        } else {
            --acc;
        };
        return acc;
    }, 0);
};

// console.log(checkParens(')('));
// console.log(checkParens('()'));
console.log(checkParens('())'));
console.log(checkParens('(()())()'));

const users = [
    {id: 1, type: 'sitting'},
]





const samples = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];
// reduce를 중복되지 않도록 숫자를 배열로 출력하세요.

function unique(arr) {
    return arr.reduce((acc, element) => {
        // console.log(acc);
        if (acc.every(e => e != element)) {
            acc.push(element);
        };
        return acc;
    }, []);
};

console.log(unique(samples));