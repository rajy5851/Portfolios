const samples = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];
// reduce를 중복되지 않도록 숫자를 배열로 출력해주세요. 뽑아주세요.

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
const check = new Set(samples);
// console.log(check);