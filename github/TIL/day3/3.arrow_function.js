// ES5
function add(a, b) {
    return a + b;
  };
  
  // ES6
  const add2 = (a, b) => {
    return a + b;
  };
  
  const add3 = (a, b) => a + b;
  
  const square = a => a * a;
  
  // console.log(add(1,2));
  // console.log(add2(1,2));
  // console.log(add3(1,2));
  console.log(square(2));
  
  const obj = {
    name: 'tony',
    sayHi: function() {
      console.log('hi');
    },
    sayHi2() {
      console.log('hi2');
    },
  };
  console.log(obj.name);
  obj.sayHi();
  obj.sayHi2();