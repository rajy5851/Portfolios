// ES5

const products = [
    {name: '사과', type: '과일'},
    {name: '배', type: '과일'},
    {name: '당근', type: '채소'},
    {name: '사과', type: '사람'},
    {name: '사과', type: '사람'},
    {name: '사과', type: '사람'},
];

const fruits = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === '과일') {
        fruits.push(products[i]);
    };
};

console.log(fruits);

// ES6

const human = products.filter(e => {
    return e.type === '사람';
});

// console.log(human);

// 실습1: filter 3 < e < 7
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const targetN1 = numbers.filter(e => 5 < 3 && e < 7);
// const targetN2 = numbers.filter(e => 3 < e && e < 10 ? true : false);

console.log(targetN1);
// console.log(targetN2);

// 실습 2

function myReject(arr, callback) {
    // forEach문으로 arr를 하나씩 탐색한다.
    // if문을 사용해서 callback() 조건에 맞도록 리턴 값을 뽑아주세요.
    // filter를 직접 구현해보세요.
    const result = [];
    arr.forEach(el => {
        if (callback(el)) result.push(el);
    });
    return result
};

function myReject2(arr, callback) {
    return arr.filter(e => callback(e));
};

console.log(myReject(numbers, number => number > 3));
console.log(myReject2(numbers, number => number > 3));

//     console.log('a[' + index + '] = ' + element); 
// [2, 5, , 9].forEach(logArrayElements);

//     const arr = ['item1', 'item2', 'item3'];
//     const callback = [];

//     // 이전
//     for (let i = 0; i < arr.length; i++) {
//         callback.push(arr[i]);
//     }

//     // 이후
//     arr.forEach(function(arr) {
//         callback.push(arr);
//     });

//     forEach

myReject(numbers, number => number > 3);