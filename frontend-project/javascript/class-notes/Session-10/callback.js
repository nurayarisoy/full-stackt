// *********************************** CALLBACK ********************************************
// * A callback function is a function that is passed as an argument to another function,
// * to be “called back” at a later time.
// * A function that accepts other functions as arguments is called a higher-order function,
// * which contains the logic for when the callback function gets executed.
// * It’s the combination of these two that allow us to extend our functionality.
// *****************************************************************************************

// ? Without callback
// ? ---------------------------------------------------

function addArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    sum += array[i];
  }
  return sum;
}

const numbers = [1, 3, 5];
console.log("SUM =", addArray(numbers));

// ? With callback
// ? ---------------------------------------------------

function addArray1(array, printFunction) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    printFunction(array[i]);
    sum += array[i];
  }
  return sum;
}

const integers = [1, 3, 5];

addArray1(integers, alert);
addArray1(integers, (x) => console.log(x));
