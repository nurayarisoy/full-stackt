/* var str1 = "Hello";
var str2 = '"Hello" world\'s';
var str3 = `Hello world`;
var str4 = new String("Hello world")

console.log(str1);
console.log(str4); */
// console.log(str2.length);
// console.log(str3.length);

// console.log(typeof str4);

// console.log(str4.length);

//concat ()
/* 
var s1 = "Hello ";
var s2 = "World!";
var s3 = s1.concat(s2);
var s4 = s1.concat('World!2');

console.log(s3);
console.log(s4);
console.log(s1+ 'World3');

console.log(s1.concat(s2.concat(' '+'Method 4')));
 */

//charAT()

/* var a = 'primitive.\nlerin properti veya metodu olmaz.'

// console.log(a);
// console.log(a.charAt()); // default ilk elemanı getitir
// console.log(a.charAt(a.length-1)); //son elemana ulaşmak
console.log(a.charAt(9)); 
console.log(a.charAt(10)); 
console.log(a.charAt(11)); 
console.log(a[9]);
console.log(a[10]);
console.log(a[11]); */

//includes 
/* var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
var n = str.includes("simply"); //true
var n1 = str.includes("xs"); //false

console.log (n);
console.log (n1);
 */

//indexof

/* var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
var n = str.indexOf('simply');
var n1 = str.indexOf("p");
var n2 = str.indexOf("P"); // -1
console.log(n);
console.log(n1);
console.log(n2); */

// Ödev -1
// text içindeki tüm aranan karakterin (kaç tane varsa) index numarasını versin

//replace
/* var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

var n = str.replace('dummy', 'ymmud')
var n1 = str.replace(/Dummy/i, 'ymmud') //case sensitive devre dışı bırakır regular exp

console.log(n);
console.log(n1);
console.log(str.replace('dummy', 'ymmud'));
console.log(str);
 */

//Search
/* var str = ' red, green, blue'
// In this method, search value can either be string or it can be a regular expression.
var n = str.search('Blue');
var n1 = str.search(/Blue/i);

console.log(n);
console.log(n1); */

//slice() Method
//If you dont use the second parameter, the method will slice out the rest of the string:
// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// console.log(s.slice(1,6));
// console.log(s.slice(6));
// console.log(s.length);
// console.log(s.slice(-33,64));

/* // Fahrenheit Celcius çevrimi

1. Kullanıcıdan değer alıp ne çevirmek istediği c > f , f>c,
çevirmek istediği değeri de alacağız
Çıkış için seçenek 



2. c > f

3. f > c

 */