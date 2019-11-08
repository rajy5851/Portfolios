// const 
const name = 'tony';

const ob = {
  name: 'john',
  gen: 'male',
}
// console.log(ob.gen);

// name = 'thor';
ob.name = 'thor';

// let
let ob2 = {
  name: 'john',
  gen: 'male',
};

ob2.name = 'thor';

ob2 = {
  age: 32,
}
console.log(ob2.age)

const newName = name + 'stark';
console.log(newName);