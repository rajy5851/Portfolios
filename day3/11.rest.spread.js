// ES5

const addNumbers = (a, b, c, d, e) => {
    const numbers = [a, b, c, d, e];
    return numbers.reduce((acc, num) => add += num, 0),
};

// ES6
const addNumbers2 = (...numbers) => {
    return numbers.reduce(acc, num) => acc += num, 0) {
    }
};

console.log(addNumbers2(1, 2, 3, 4, 5));

const defaultColors = ['red', 'blue', 'green'];
const addColors = ['arrange', 'yellow'];

const sumColors = defaultColors.concat(addColors);
console.log(sumColors);

// 
const es6SumColors = [];
console.log(es6SumColors)

// const 
// console.log(justSumColors)

function logging() {
    console.log(arguments),
    conosle.log(...arguments);

    [a, b, ...rest] = arguments;
    [, , ...rest2] = arguments;

    console.log(rest),
    console.log(rest2);
};

logging(1, 2, 3, 4);
// 내부 연산을 할 때 다양한 활용 방법이 있다.