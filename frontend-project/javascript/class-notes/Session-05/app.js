console.log('» app.js is running');

// [1 -- 100] yazdır
// 5 katları yazılmasın

/* for (let i = 0; i <= 100; i++) {
  if (i % 5 == 0) {
    continue;
  } else {
    console.log(i);
  }
  if (i === 42) break;
}
 */

//  [1 - 6] arasında rastgele sayı
// 3 defa 3 çıkarsa oyun bitecek
// 6 çıkarsa

// let x = Math.trunc(Math.random() * 20) + 1;
// console.log(x);
/* 
let randomNumber = 0;
let countFor3 = 0;

while (randomNumber !== 6) {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log('randomNumber :>> ', randomNumber);
  if (randomNumber === 3) countFor3++;
  if (countFor3 > 2) {
    console.log('3 comes third times, exiting...');
    break;
  }
} */

/*  functions */
/* 
function square(num) {
  num = num * num;
  return num;
}

let myNum = 4;

console.log(square(myNum));
console.log(myNum);
 */
const students = ['Sait', 'Brown', 'Heisenberg', 'OzanEmre', 'Sergio'];

/* console.log(`Welcome ${students[0]}!`);
console.log(`Welcome ${students[1]}!`);
console.log(`Welcome ${students[2]}!`);
console.log(`Welcome ${students[3]}!`);
 */

/* students[0] = 'Mike';
console.log(students); */

// greetAll(students, console.log);

function greet(student) {
  // console.log(`Welcome ${student}!`);
  return `Welcome ${student}!`;
}
function greetAll(who, callback) {
  for (let i = 0; i < who.length; i++) {
    callback(greet(who[i]));
  }
  //
}

function multiply(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return; // 'please enter number';
  }
  return num1 * num2;
}

/* let result = multiply(4, 5);
console.log('result :>> ', result); */

// result = [quotient , remainder]
// 13 %  4 = 3 kalan 1
/* function divide(dividend, divider) {
  let quotient = dividend / divider;
  let remainder = dividend % divider;
  let result = [quotient, remainder];
  console.log(quotient);
  if (divider === 0) return;
  return result;
}

let result = divide(13, 4);
console.log('result :>> ', result); */

const studentObject = {
  firstName: 'Yusuf',
  studentNumber: 'C9303',
};

function sayHi() {
  return `Welcome`;
}

// console.log(sayHi(studentObject));

// console.log('#110 student :>> ', studentObject);

/* 
const sayHi2 = function () {
  return 'Hello!';
};
console.log(sayHi2()); */

// recursive
/* function count(num) {
  if (num === 10) return;
  console.log(num);
  count(++num);
}

count(1);
 */

// IIFE
(function greet2() {
  console.log('how do you do?');
})();

// greet2();
