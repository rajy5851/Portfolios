// ES5

const users = [
    {name: 'tony', age: 32},
    {name: 'thor', age: 1254},
    {name: 'gandi', age: 45},
    {name: 'hulk', age: 45},
];

let user = null;

for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'gandi') {
        user = users[i];
        break;
    };
};

console.log(user);

// ES6

user2 = users.find((user) => {
    console.log(user.name === 'hulk');
    return user.name === 'hulk';
});

console.log(user2);

const dataSet = [
    {id: 1, name: 'JiYong1'},
    {id: 2, name: 'JiYong2'},
    {id: 3, name: 'JiYong3'},
    {id: 4, name: 'JiYong4'},
];

const www = dataSet.find(e => e.id === 3);
console.log(www)

// 실습

const products = [
    {name: '사과', type: '과일'},
    {name: '양파', type: '과일'},
    {name: '당근', type: '채소'},
    {name: '김씨', type: '사람'},
];

const result = products.find(e => e.name === '김씨');
console.log(result);

// 실습    filter를 사용해서 3보다 크고 7보다 작은 숫자를 출력하세요.

const numbers = [1, 2, 3, 4, 5, 6 ,7, 8, 9];

const targetN1 = numbers.filter(e => 3 < e && e < 7);

console.log(targetN1);
// console.log(targetN2);

// 실습 2

function myReject(arr, callback) {
    // forEach문으로 arr를 하나씩 탐색한다.
    // if문을 사용해서 callback() 조건에 맞도록 리턴 값을 뽑아주세요.
    // filter를 직접 구현해보세요.

    arr.forEach(el => {
        if (callback(el)) result.push(el)
    })
};

console.log(myReject(numbers, number => number > 3));

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