console.log('» index2.js is running');

let map = new Map();

map.set('1', 'string 1');
map.set(1, 'number 1');
map.set(true, 'doğrudur');
map.set(1, 'numnumnum');

// console.log(map);
// console.log(map.get('1'));
// console.log(map.has('3'));

// let wrongMap = new Map();
// wrongMap['bla'] = 'blaaa';
// wrongMap['blazzz'] = 'blaaazzzz';

// console.log(wrongMap);
// console.log(wrongMap.has('bla'));

map.set('add', function (x, y) {
  return x + y;
});

// console.log(map.get('add')(5, 6));

// let john = { firstName: 'John' };
// let mike = { firstName: 'Mike' };

// map.set(john, 78);
// console.log(map.get(john));
// console.log(map[john]);
// map[mike] = 99;
// map[john] = 120;
// console.log(map[mike]);
// console.log(map);

// console.log(map.entries());

// for (const [key, value] of map.entries()) {
//   console.log('key is:', key);
//   console.log('value is:', value);
// }

// let recipeMap = new Map([
//   ['onion', 50],
//   ['cucumber', 500],
//   ['tomatoes', 350],
// ]);

// for (let amount of recipeMap.values()) {
//   console.log(amount); // cucumber, tomatoes, onion
// }

// recipeMap.forEach((miktar, malzeme) => {
//   console.log(miktar, '-->', malzeme);
// });

// sets

const mySet1 = new Set();
mySet1.add(1);
mySet1.add(4);
mySet1.add(4);
mySet1.add(2);
// console.log(mySet1.size);

const obj1 = { a: 1, b: 2 };
const obj2 = obj1;
mySet1.add(obj1);
// mySet1.add({ a: 1, b: 2 });
// mySet1.add(obj2);
// console.log(mySet1);
console.log(mySet1.has(1));
console.log(mySet1.has(Math.sqrt(16)));
console.log(mySet1.has(obj2));
mySet1.add('matthew');
mySet1.has('Matthew'.toLowerCase());

let arr = [1, 2, 3, 2, 5, 3, 8, 8, 5, 7, 6, 2, 1];

const set1 = new Set(arr);
console.log([...set1]);
