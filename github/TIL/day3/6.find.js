// ES5

const users = [
    {name: 'tony', age: 32},
    {name: 'thor', age: 1254},
    {name: 'ironMan', age: 45},
    {name: 'hulk', age: 45},
  ];
  
  let user = null;
  
  for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'ironMan') {
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
    {id: 1, name: 'tony1'},
    {id: 2, name: 'tony2'},
    {id: 3, name: 'tony3'},
    {id: 4, name: 'tony4'},
  ];
  
  const www = dataSet.find(e => e.id === 3);
  console.log(www)
  
  // 실습
  
  const products = [
    {name:'사과', type: '과일'},
    {name:'사과', type: '과일'},
    {name:'당근', type: '채소'},
    {name:'김씨', type: '사람'},
  ];
  
  const result = products.find(e => e.name === '김씨');
  console.log(result);