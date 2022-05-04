# Strings

## Strings

Strings are useful for holding data that can be represented in text form. Strings in JavaScript can be enclosed in Single quotes 'hello', Double quotes "Hello" and (from ES2015, ES6) in Template Literals (in backticks) .

```js
var hello = "Hello";
var world = 'world';
var helloW = `Hello World`; // ES2015 / ES6
```

Strings can be created as primitives, from string literals, or as objects, using the [`String()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String) constructor:

```js
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = new String("A String object");
```

Some of the most-used operations on strings are to check their [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), to build and concatenate them using the [+ and += string operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/String_Operators), checking for the existence or location of substrings with the [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method, or extracting substrings with the [`substring()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) method. String primitives and string objects can be used interchangeably in most situations.

### How a primitive has a property

```js
console.log('Good Evening!'.length);
```

_isn't it primitive?_ 

> String literals (denoted by double or single quotes) and strings returned from `String` calls in a non-constructor context (that is, called without using the [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) keyword) are primitive strings. JavaScript automatically converts primitives to `String` objects, so that it's possible to use `String` object methods for primitive strings. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup.
>
> *source: [String - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects)*

### Access at a specific index of a string

two methods: :exclamation: you cannot modify the value of given cell.

```js
return 'Clarusway'.charAt(2);  // returns "a"
return 'Clarusway'[2]; // returns "a"
```



### long lines of strings in code editor

two methods:

```js
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";

let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

### String functions

let's start with string functions

#### length

```js
console.log('Clarusway'.length); // output: 9
```

#### prototype

Prototype is a global property which is available with almost all the objects. The prototype property allows you to add properties and methods to any object (Number, Boolean, String, Date, etc.).  

#### charAt()

see above :point_up:  zero indexed first char is at 0, last char is in length-1 position.

```js
var str = new String("Just Awesome");
console.log("str.charAt(0) is:" + str.charAt(0));
console.log("str.charAt(1) is:" + str.charAt(1));
console.log("str.charAt(2) is:" + str.charAt(2));
console.log("str.charAt(3) is:" + str.charAt(3));
console.log("str.charAt(4) is:" + str.charAt(4));
console.log("str.charAt(5) is:" + str.charAt(5));
```

```js
str.charAt(0) is:J
str.charAt(1) is:u
str.charAt(2) is:s
str.charAt(3) is:t
str.charAt(4) is:
str.charAt(5) is:A
```

#### charCodeAt()

returns the Unicode value of the character at the given index. 

```js
var str = new String("Just Awesome");
console.log("str.charAt(0) is:" + str.charCodeAt(0));
console.log("str.charAt(1) is:" + str.charCodeAt(1));
console.log("str.charAt(2) is:" + str.charCodeAt(2));
console.log("str.charAt(3) is:" + str.charCodeAt(3));
console.log("str.charAt(4) is:" + str.charCodeAt(4));
console.log("str.charAt(5) is:" + str.charCodeAt(5));
```

```
str.charAt(0) is:74
VM141:3 str.charAt(1) is:117
VM141:4 str.charAt(2) is:115
VM141:5 str.charAt(3) is:116
VM141:6 str.charAt(4) is:32
VM141:7 str.charAt(5) is:65
```

#### concat()

returns single concatenated string

```js
var str1 = new String( "The Full-Stack Path" ); // note that not primitive
var str2 = new String( "is awesome" );
var str3 = str1.concat( str2 );
// outputs: str1 + str2 : The Full-Stack Pathis awesome
console.log("str1 + str2 : "+str3);
// str1 and str2 remains unchanged
console.log(str1, str2);
```

#### indexOf()

returns the index within the calling String object of the first occurrence of the specified value, starting the search at `fromIndex` or `-1` if the value is not found.

```js
string.indexOf(searchValue[, fromIndex])
```

```js
var str1 = new String( "Full-Stack is awesome" );
var index = str1.indexOf( "awesome" );
console.log("indexOf found String :" + index );
var index = str1.indexOf( "Stack" );
console.log("indexOf found String :" + index );
```

```js
indexOf found String :14
indexOf found String :5
```

#### lastIndexOf()

returns the index within the calling String object of the last occurrence of the specified value, starting the search at `fromIndex` or `-1` if the value is not found.

```js
string.lastIndexOf(searchValue[, fromIndex])
```

```js
var str1 = new String( "Clarusway is awesome and will always be awesome hopefully" );
var index = str1.lastIndexOf( "awesome" );
console.log("lastIndexOf found String :" + index );
index = str1.lastIndexOf( "way" );
console.log("lastIndexOf found String :" + index );
```

```js
lastIndexOf found String :40
lastIndexOf found String :32
```

### comparison

as mentioned before with comparison operators. for locale specific, use `localeCompare()`

#### localeCompare()

 returns a number indicating whether a reference string comes before or after or is the same as the given string in sorted order.

- 0 − If the string matches 100%.
- 1 − no match, and the parameter value comes before the string object's value in the locale sort order
- -1 or a negative value − no match, and the parameter value comes after the string object's value in the local sort order

```js
"ı" > "i" // true
"ı".localeCompare("i", "tr") // -1 meaning that letter ı comes before i in Turkish
```

#### replace()

 finds a match between a regular expression and a string, and replaces the matched substring with a new substring.

The replacement string can include the following special replacement patterns −

| No   |                      Patterns & Inserts                      |
| ---- | :----------------------------------------------------------: |
| 1    |                     **$$**Inserts a "$".                     |
| 2    |             **$&**Inserts the matched substring.             |
| 3    | **$`**Inserts the portion of the string that precedes the matched substring. |
| 4    | **$'**Inserts the portion of the string that follows the matched substring. |
| 5    | **$n or $nn**Where **n** or **nn** are decimal digits, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object. |

```
string.replace(regexp/substr, newSubStr/function[, flags]);
```

- **regexp** − A RegExp object. The match is replaced by the return value of parameter #2.

  [RegExr: Learn, Build, & Test RegEx](https://regexr.com/)

  [regex101: build, test, and debug regex](https://regex101.com/)

- **substr** − A String that is to be replaced by newSubStr.

- **newSubStr** − The String that replaces the substring received from parameter #1.

- **function** − A function to be invoked to create the new substring.

- **flags** − A String containing any combination of the RegExp flags: g.

```js
var re = /front/gi; 
var str = "Front-End is hard to learn, and front-end developers earn more than the average."; 
var newstr = str.replace(re, "back"); 
console.log(newstr)   
```

```
back-End is hard to learn, and back-end developers earn more than the average.
```

```js
var re = /(\w+)\s(\w+)/; 
var str = "Dunn Matthew"; 
var newstr = str.replace(re, "$2, $1"); 
console.log(newstr);
// output: Matthew, Dunn
console.log(str);
// output: Dunn Matthew
```

#### search()

search for a match between a regular expression and this String object. If successful, the search returns the index of the regular expression inside the string. Otherwise, it returns -1.

```js
var re = /easily/gi;
var str = "Full-Stack is awesome,\
and students will eAsily get a job."; 
if ( str.search(re) == -1 ) { 
   console.log("Does not contain easily" ); 
} else { 
   console.log("Contains easily and the index is", str.search(re)); 
}
// output: Contains easily and the index is 40
```

#### slice()

 extracts a section of a string and returns a new string.

```
string.slice( beginslice [, endSlice] );
```

- **beginSlice** − The zero-based index at which to begin extraction.
- **endSlice** − The zero-based index at which to end extraction. If omitted, slice extracts to the end of the string

[String.prototype.slice() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

```js
var str = "Full-Stack: awesome future is coming!";
var sliced = str.slice(12, -11); 
console.log(sliced);
// output: awesome future
```

#### split()

splits a String object into an array of strings by separating the string into substrings.

```
string.split([separator][, limit]); 
```

- **separator** − Specifies the character to use for separating the string. Ifseparator is omitted, the array returned contains one element consisting of the entire string.
- **limit** − Integer specifying a limit on the number of splits to be found.



```js
var str = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit earum vero, qui repellendus nam laudantium."; 
var splitted = str.split(" ", 5); 
console.log(splitted);
// output: ["Lorem", "ipsum", "dolor,", "sit", "amet"]
```

####   substr()

 returns the characters in a string beginning at the specified location through the specified number of characters as new sub-string.

```
string.substr(start[, length]); 
```

- **start** − Location at which to start extracting characters (an integer between 0 and one less than the length of the string).
- **length** − The number of characters to extract

**Note** − If **start** is negative, then **substr** uses it as a character index from the end of the string.

[String.prototype.substr() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

```js
var str = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."; 
console.log("(1,2): "    + str.substr(1,2)); 
console.log("(-2,2): "   + str.substr(-2,2)); 
console.log("(1): "      + str.substr(1)); 
console.log("(-20, 2): " + str.substr(-20,2)); 
console.log("(13, 3): "  + str.substr(13,4)); 
```

```
(1,2): or
(-2,2): t.
(1): orem ipsum dolor, sit amet consectetur adipisicing elit.
(-20, 2): ur
(13, 3): olor
```

#### substring()

returns a subset of a String object as new sub-string.

```
string.substring(indexA, [indexB]) 
```

- **indexA** − An integer between 0 and one less than the length of the string.
- **indexB** − (optional) An integer between 0 and the length of the string.

[String.prototype.substring() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

```js
var str = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."; 
console.log("(1,2): "    + str.substring(1,2)); 
console.log("(0,10): "   + str.substring(0, 10)); 
console.log("(5): "      + str.substring(5));  
```

```
(1,2): o
(0,10): Lorem ipsu
(5):  ipsum dolor, sit amet consectetur adipisicing elit.
```

#### toLocaleLowerCase() & toLocaleUpperCase() && toLowerCase() && toUpperCase()

returns the calling string value converted to lower/upper case, according to any locale-specific case mappings.

```js
str.toLocaleLowerCase()						 str.toLocaleUpperCase()
str.toLocaleLowerCase(locale)				 str.toLocaleUpperCase(locale)
str.toLocaleLowerCase([locale, locale, ...]) str.toLocaleUpperCase(<-)
```

The `locale` parameter indicates the locale to be used to convert to lower/upper case according to any locale-specific case mappings. If multiple locales are given in an [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), the [best available locale](https://tc39.github.io/ecma402/#sec-bestavailablelocale) is used. The default locale is the host environment’s current locale.

:exclamation: caution the exceptions for `null`or `undefined` values at `toUpperCase()` and `toLowerCase()`

[String.prototype.toLocaleLowerCase() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)

[String.prototype.toLocaleUpperCase() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)

```js
var pangram = "PİJAMALI HASTA YAĞIZ ŞOFÖRE ÇABUCAK GÜVENDİ.";
var strLower = pangram.toLocaleLowerCase();
console.log(strLower);
var strUpper = strLower.toLocaleUpperCase('tr');
console.log(strUpper);
console.log(pangram.toLowerCase());
console.log(strLower.toUpperCase());
```

```
pijamalı hasta yağız şoföre çabucak güvendi.
PİJAMALI HASTA YAĞIZ ŞOFÖRE ÇABUCAK GÜVENDİ.
pi̇jamali hasta yağiz şoföre çabucak güvendi̇.
PIJAMALI HASTA YAĞIZ ŞOFÖRE ÇABUCAK GÜVENDI.
```

:exclamation: caution: some conversion may differ in string size

```
'Gesäß'.toLocaleUpperCase(); // 'GESÄSS'
```

#### toString() & valueOf()

`toString()` returns a string representing the specified object.

`valueOf()` returns the primitive value of a [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) object. This value is equivalent to `toString()`. This method is usually called internally by JavaScript and *not explicitly in code.*

```js
str.toString();  str.valueOf();
```

[String.prototype.toString() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString)

[String.prototype.valueOf() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf)

```js
const strObj = new String('Clarusway');

console.log(strObj);
// output: String { "Clarusway" }
console.log(strObj.toString());
// output: "Clarusway"
console.log(strObj.valueOf());
// output: "Clarusway"
```

#### trim() & trimStart() && trimEnd()

removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

[String.prototype.trim() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

```js
var greeting = ' \t\t  Hello world!   \n\nWelcome\tHome\n\n';
console.log(greeting);
console.log("-----")
console.log(greeting.trim());
```

```
 		  Hello world!   

Welcome	Home

-----
Hello world!   

Welcome	Home
```

#### startsWith()

determines if a string starts with the specified character. **true** if the string begins with the characters of the search string; otherwise, **false**. :exclamation: case-sensitive

```
str.startsWith(searchString[, position])
```

- **searchString** − The characters to be searched for at the start of this string.
- **Position** − The position in this string at which to begin searching for searchString; defaults to 0.

```js
var str = 'hello world!!!'; 
console.log(str.startsWith('hello')); // true
```

#### endsWith()

determines whether a string ends with the characters of another string. **true** if the string ends with the characters of the match string; otherwise, **false**.  :exclamation: case-sensitive

```
str.endsWith(matchstring[, position])
```

- **matchstring** − The characters that the string must end with. It is case sensitive.
- **Position** − The position to match the matchstring. This parameter is optional.

```js
var str = 'Hello World !!! '; 
 
console.log(str.endsWith('Hello')); // false
console.log(str.endsWith('Hello',5)); // true
```

#### includes()

determines if a string is a substring of the given string. **true** if the string contains the substring ; otherwise, **false**.  :exclamation: case-sensitive

```
str.includes(searchString[, position])
```

- **searchString** − The substring to search for.
- **Position** − The position in this string at which to begin searching for searchString; defaults to 0.

```js
var str = 'Hello World';  

console.log(str.includes('hell')); // false     
console.log(str.includes('Hell')); // true 

console.log(str.includes('or'));   // true
console.log(str.includes('or',8))  //false
```

#### repeat()

repeats the specified string for a specified number of times.

```
str.repeat(count)
```

- **Count** − number of times the string should be repeated.

```js
var str = "Clarusway ";
console.log(str.repeat()); // no output
console.log(str.repeat(1)); // 1 time
console.log(str.repeat(20)); // 20 times
```

---

### How to reverse string

The most "popular" way of reversing a string in JavaScript is the following code fragment, which is quite common:

```js
function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString('Clarusway'); // "yawsuralC"
reverseString('JavaScript-tpircSavaJ 🎯 sF'); // oops
```

> solution: https://github.com/mathiasbynens/esrever

### detecting if string

To detect whether a parameter is a primitive string, use `typeof`:

```js
var aString = "my string";
var anInt = 5;
var anObj = {};
typeof aString === "string"; // true
typeof anInt === "string"; // false
typeof anObj === "string"; // false
var strObj = new String("Trouble comes!");
typeof strObj === "string"; // false
```

To cover both instances, we can write a simple helper function:

```js
var isString = function(value) {
 return typeof value === "string" || value instanceof String;
};
var aString = "Primitive String";
var aStringObj = new String("String Object");
isString(aString); // true
isString(aStringObj); // true
isString({}); // false
isString(5); // false
```

