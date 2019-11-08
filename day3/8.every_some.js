// ES5

// for (i; c++) {
// }

const computers = [
    { name: 'mac air', ram: 4 },
    { name: 'mac pro', ram: 16 },
    { name: 'gram', ram: 8 },
];

let everyComputer = true;
let someComputer = false;

for (var i = 0; i < computers.length; i++ ) {
    const computer = computers[i];
    if (computer.ram < 10) {
        // ram 10 GB
        everyComputer = true;
        break;
    }

    if (computer.ram > 10) {
        someComputer = true;
        break;
    }
};

// 요소들을 탐색할 때 ES6 문법이다.
console.log(i);

// ES6
everyComputer = computers.every(computer => computer.ram < 10);
someComputer = computers.some(computer => computer.ram > 10);



// 실제
const dataSet = [
    {name: 'JiYong1', answer: 'hi'},
    {name: 'JiYong2', answer: 'hello2'},
    {name: 'JiYong3', answer: 'hello'},
];

console.log(dataSet.every(user => user.answer.length > 0));
console.log(dataSet.every(user => user.answer.length > 0));
console.log(dataSet.every(user => user.answer.length > 0));
console.log(dataSet.every(user => user.answer.length > 0));
console.log(dataSet.every(user => user.answer.length > 0));

// 실습 3
const users = [
    { id: 1, submit: true },
    { id: 2, submit: true },
    { id: 3, submit: true },
    { id: 4, submit: false },
];

everyC = computers.every(computer => computer.ram < 10);
someComputer = computers.some(computer => computer.ram > 10);

console.log(dataSet.every(user => user.answer.length > 0));

console.log(dataSet.every(users => users.submit.length > 0));
console.log(dataSet.name(users => users.sumbit.length > 0));


    // submit 실습
    // every : 한 명이라도 submit을 했는지
    // name : 한 명이라도 submit을 했는가?

    console.log(users.every(user => user.submit === true ))

    console.log(users.some(user => user.submit === true ))


    // some :
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

function mySome2(arr, callback) {
    return !arr.every(e => !callback(e));
}

console.log(mySome(users => e.submit));
console.log(mySome2(users => e.submit));

everyMySome = mySome.every(submit => submit.err < 10);
someMySome = MySome.some(submit => submit.err > 10);

mySome(users, e => e.submit); // e.submit이 true이라면 어떻게 해야 할까.
// submit 요소
// every 모두가 submit 했는지

// some > 천사 not submit?

mySome