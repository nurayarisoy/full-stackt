# Session 5 - Functions

Functions are one of the fundamental building blocks in JavaScript to provide organized, reusable code to perform a set of actions. Functions simplify the coding process, prevent redundant logic, and make code easier to follow.

Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, you must define it somewhere in the scope where you wish to call it.

![function declaration](/images/declaration.svg)![calling function](/images/name.svg)

```js
// function declaration
function function_name() {
	// function body
}

// function invocation (calling)
function_name();
```

- A simple greeting function example

```js
function greet() {
	console.log('Hello');
} // it will not output until called!
// calling function
greet();
greet();
greet();
```

In JavaScript, functions are **first-class objects**, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are `Function` objects.



## Classification of Functions

- Named functions

- Function expressions

- Anonymous functions

- Immediately Invoked Function Expressions (IIFE)

- Arrow functions (lambda in python)

- Constructor functions *(later on OOP class)*

- Generator functions *(later on)*

  

### Named functions

As the title suggests, regular declaration of a function which has a name, for example greet function above.

- Named function declarations are hoisted.


```js
sayHi();
// function declaration
function sayHi() {
    console.log("Hello!");
}
```

#### Returning a value from functions

- simply using return keyword we get an output

- `return` keyword is used to pass the result at the end of function execution. If it is dismissed or no value passed right after then `undefined` is returned. 

- `return`keywords ends the further execution  of function code.

```js
function sayHi() {
	return 'Hi!'
}
function sayHi2() {
    console.log('Hello!')
}
sayHi();
typeof sayHi();
```



#### Passing values to functions

In JavaScript parameters are passed by value, meaning that outer variable will not be changeable inside function body. 

![function parameters](/images/function_parameters.svg)

```js
function sayHi(name) {
	console.log(`Hello! ${name}`);
}
sayHi('Matthew');
sayHi(); // what will the output be

function sayHi2(name, company) {
    console.log(`Hello! ${name} of ${company}`);
    company = 'Apple';
    console.log(`Hello! ${name} of ${company}`);  
}
let name = 'Emir';
let company = 'Clarusway';
sayHi2(name, company);
console.log(company);
sayHi2('Matthew'); // what will the output be
```

Object type variables are passed by reference, meaning that, object's attributes can be changed within function body. Be advised that not the object as a whole.

```js
var anObj = { name: 'Matthew'};
console.log(anObj);
// {name: "Matthew"}

function changeObj(obj) {
    obj.name = 'John';
}
changeObj(anObj);
console.log(anObj);
// {name: "John"}

function changeObj2(obj) {
    obj = {name: 'Mike'};
}
changeObj2(anObj);
console.log(anObj);
// {name: "John"}
```

another example


```js
// Defining the function:
function sum(num1, num2) {
 return num1 + num2;
}
// Calling the function:
console.log(sum(3, 5)); // 8
function addThree(num1) {
    // calling another function within function
    return sum(num1, 3);
}
```

rest parameter

### Anonymous functions

When you define a function as seen above, the JavaScript runtime stores your function in memory and then creates a reference to that function, using the name you've assigned it. That name is then accessible within the current scope. This can be a very convenient way to create a function, but JavaScript does not require you to assign a name to a function. The following is also perfectly legal:

```js
// Named function
function sayHi() {
 return 'Hello!';
}
// Anonymous function
const sayHi = function() {
 return 'Hello!';
}
```



### Function Expressions

A function expression is very similar to and has almost the same syntax as a function declaration. The main difference between a function expression and a function declaration is the *function name*, which can be omitted in function expressions to create *anonymous* functions. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. 

![](/images/expression.svg)

Function expressions create functions inside an expression instead of as a function declaration. They can be anonymous and/or assigned to a variable.

```js
// anonymous function expression
const sayHi = function() {
    console.log("Hello!");
    console.trace()
}
// named function expression
const sayHi2 = function greet(){
    console.log("Hello!");
    console.trace();
}
```

> Function expressions in JavaScript are not hoisted, unlike [function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function#function_declaration_hoisting). You can't use function expressions before you create them:

```js
// another example
sayHi();
// function declaration
function sayHi() {
    console.log('Hello!')
}

sayHiExp();
// anonymous function expression
var sayHiExp = function() {
    console.log('Hi!');
}
```



> If you want to refer to the current function inside the function body, you need to create a named function expression. **This name is then local only to the function body (scope)**. 

```js
// triangular numbers
// with recursive named function expressions 
const triangularNumber = function trian(num) {
    if (num === 1) return 1;
    return num + trian(num-1);
}
// with anonymous function expression non recursive
const triangular = function(num) {
    return num*(num +1)/2;
}
triangular(3);
triangularNumber(3);
```



### Immediately Invoked Function Expressions

Sometimes you don't want to have your function accessible/stored as a variable. You can create an Immediately Invoked Function Expression (IIFE for short). These are essentially self-executing anonymous functions. They have access to the surrounding scope, but the function itself and any internal variables will be inaccessible from outside. An important thing to note about IIFE is that even if you name your function, IIFE are not hoisted like standard functions are and cannot be called by the function name they are declared with.

```js
// named IIFE recursive
(function trian(num) {
    if (num === 1) return 1;
    return num + trian(num-1);
})(3);
// with anonymous function expression non recursive
(function(num) {
    return num*(num +1)/2;
})(3);
```

### Arrow Functions

Arrow functions are short form of function expressions, but is limited and can't be used in all situation.

There are 3 parts to a Lambda function

- Parameters − A function may optionally have parameters.
- The fat arrow notation/lambda notation (=>): It is also called as the goes to operator. 
- Statements − Represents the function’s instruction set.

![](/images/arrow_notation.svg)

in a more readable form we can write

![](/images/return.svg)

```js
const square = (x) => x**2;
console.log(square(8)); // 64
```

```js
item => item + 1 // -> function(item){return item + 1
// as iife
(item => item + 1)(41) // -> 42
```

```js
const car = () => { make: "Bmw" } // foo() returns undefined
const car = () => ({ make: "Bmw" }) // foo() returns {make: "Bmw"}
```

```js
// Traditional Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```

```js
// Traditional Function
function (a, b){
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Function (no arguments)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;
```

```js
// Traditional Function
function bob (a){
  return a + 100;
}

// Arrow Function
let bob = a => a + 100;
```

**Differences & Limitations:**

- Does not have its own bindings to `this` or `super`, and should not be used as `methods`.

- Does not have `arguments`, or `new.target` keywords.

- Not suitable for `call`, `apply` and [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) methods, which generally rely on establishing a [`scope`.](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

- Can not be used as `constructors`.

- Can not use `yield`, within its body.

  

### Some Insights on Functions

- Every function has a scope. Everything defined within the function is not accessible by code outside the function. Only code within this scope can see the entities defined inside the scope.

```js
let num1 = 10;
var num2 = 20;
console.log('at the global scope');
console.log({ num1, num2 });
func1();
console.log({ num1, num2 });
console.log({ num3, num4 });

// function declaration
function func1() {
  let num1 = 101;
  let num2 = 102;
  var num3 = 103;
  console.log('..inside func1');
  if (num1 < num2) {
    console.log('inside if block');
    let num1 = 201;
    // var num2 = 205;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
    // let num3 = 206;
    var num4 = 204;
    num1++;
    num2++;
    num3++;
    num4++;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
  }
  console.log('after if block');
  num3++;
  num4++;
  console.log({ num1, num2 });
  console.log({ num3, num4 });
}
```

- functions can be nested inside function body, js is lexically scoped, therefore caution to the scope!

```js
function sameLevel2() {
	let a = 10;
	b = 20;
	console.log({a, b});
}
function sameLevel1() {
	let a = 30;
	let b = 8;
	console.log({a, b})
	sameLevel2();
}

let b = 5;
sameLevel1();
console.log({b});


function outerLevel() {
	let a = 30;
	let b = 8;
	console.log({a, b})
	innerLevel();
    function innerLevel() {
		let a = 10;
		b = 20;
		console.log({a, b});
	}
   	console.log({b});
    let b = 5;
	console.log({b});
}
console.log({b});

```

### This Keyword

The reserved keyword `this` refers to a method’s calling object, and it can be used to access properties belonging to that object. Here, using the `this` keyword inside the object function to refer to the cat object and access its name property.

```js
const cat = {
    name: 'Muezza',
    age: 8,
    whatName() {
        return this.name
    }
};
console.log(cat.whatName());  // Output: Muezza
```

**this in a function**

Every JavaScript function or method has a `this` context. For a function defined inside of an object, `this`will refer to that object itself. for a function defined outside of an object, `this`will refer to the global object (`window` in a browser, `global`in Nodejs and `globalThis` for both to always point to global object).

```js
const school = {
	numStudents: 45,
	maxCapacity: 100,
	availableQuota() {
 		// this refers to the school object
	 	// and it's used to access its properties
 		return this.maxCapacity - this.numStudents;
	}
}
console.log(school.availableQuota());
```

:bangbang: arrow functions do not have their own `this` context.