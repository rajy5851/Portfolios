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

// ========
// 연습
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentValue, currentIndex, array) {
    return accumulator + currentValue;
}, 10);

// =====



// dNumbers1,2 결과를 똑같이 나오도록 만들어 주세요.
const dNumbers2 = numbers.reduce(() => {}, []);
console.log(dNumbers2);

// 빈 배열을 두 번째 인자로 입력해주면 된다.

const dNumbers4 = numbers.reduce((acc, number) => {
    // console.log(acc);
    // console.log(dNumber4);
    acc.push(number * 2);
    return acc;
    // 재귀적인 동작으로 옮겨간다.
    // [2] / 밑에 acc => 위에 acc 
    // 2 * 2 = 4가 push가 된다. [2, 4];
    // 2, 4, 6
    // 다음 연산으로 넘겨준다고 이해해주면 된다.
}, []);
console.log(dNumbers4);

const dNumbers5 = numbers.reduce((acc, number) => {
    acc.push(number * 3);
    return acc;
}, []);
console.log(dNumbers5);

const dNumbers3 = numbers.reduce((e) => {}, [2]);
console.log(dNumbers3);

const words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
    console.log(word);
    if (word === 'two') {
        words.shift();
    }
});
// one
// two
// four

// 함수를 만든다.

// 실습
// 알고리즘 : () 검사하는 함수 만들기
// ')(', ')()'
// '()', '(())()'
function checkParens(str) {
    // 괄호 검사 로직 => T, F (True, False)
    // reduce 사용
    return str.split('').reduce((arr, char) => {
        if (acc < 0) {
            return acc; // true
        } else if (char === '{') {
            ++acc;
        } else {
            --acc;
        }; // false
        return acc; 
    }, 0);
};

// console.log(checkParents(')('));
// console.log(checkParents('()'));
// console.log(checkParents('())'));
// console.log(checkParents('(())()())'));

const users = [
    {id: 1, type: 'sitting'},
    {id: 2, type: 'sitting'},
    {id: 3, type: 'standing'},
    {id: 4, type: 'sitting'},
    {id: 5, type: 'standing'},
];
// reduce를 사용해서 안장있는 사람의 수를 세어주세요.
// 재귀적인 동작을 한다고 이해하면 된다. reduce 

// const number = [1, 2, 3];

// const dNumbers5 = number.reduce((acc, number) => {
//     acc.push(number * 5);
//     return acc;
// }, []);
// console.log(dNumbers5);

const samples3 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];

function unique(arr) {
    return arr.reduce((acc, element) => {
        console.log(dNumbers3);
        console.log(dNumbers4);
        if (acc.every(e => e != element)) {
            acc.push(element)
        };
        return acc;
    }, []);
}

const samples = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];
// 중복되는 수를 제외하고 중복되지 않은 숫자를 배열로 출력하세요. 뽑으세요.
// reduce를 중복되지 않도록 숫자를 배열로 뽑아주세요.



const dReduce = samples.reduce((acc, dReduce) => {
    acc.push(samples);
    return acc;
}, []);
console.log(dReduce); 

const samples2 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];

const result = samples2.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(result); // [1,2,3,4,5]



function mySome(arr, callback) {
    let result = false;
    arr.forEach(el => {
        if (callback(el)) result + true;
    });
    return result;

    // 실습 2
    // arr.forEach
    //    if (callback()) result
    //
    // 프로젝트 배포 URL
    // 아마존 웹 서비스 AWS 서비스 사용하고 있는 것

    // every를 사용하는 방법 
    // forEach를 사용하지 않아도 사용이 가능하다.
};

console.log(mySome);
// console.log(result);
// console.log(callback);

// const sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);
// sum is 6

// ========

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



// function log

// function




