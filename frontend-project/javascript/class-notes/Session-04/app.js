// Conditionals

/* let score = 85;
// let grade = score >= 50
if (score >= 80) { 
    console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
}else if (score >= 50) {
    console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
}else{
    
    console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
}

// console.log('ders bitti'); */


// Ternary If else

/* let score = 49;

score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`) : 
               console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`); */


/* let username = 'Mark';

username ? console.log(`Merhaba ${username}`) : console.log('Please Login'); */


/* if (score >= 80) { 
    console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
}else if (score >= 50) {
    console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
}else{
    
    console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
} */

/* let score = prompt(' Sınav notunu gir : ')

score >= 80 ? console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`) : 
   (score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`): 
   console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`))

 */


/* let userName;

console.log(userName && console.log(`Merhaba ${userName}`)); */


//Switch Case Yapısı

/* var text;
// var fruits ='LemoN';

var fruits = prompt(" Lütfen bir meyve ismi giriniz : ")

switch (fruits.toLowerCase()) {
    case "banana":
        text = " Banana is good!";
        break;
    case "lime":
    case "lemon":
    case "orange":
        text = ` I am not fan of ${fruits}!`;
        break;
    case "apple":
        text = "How you like them apples?";
        break;
    default :
        text = `I have never heard of ${fruits}`;
    }

    console.log(text); */


/* var year = 2024;
var month = 4;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1; // invalid month
}

console.log(dayCount); // 29 */


/* Kullanıcıdan gün ismi al
 pzt çarş perş cmt => in class
 salı cuma => Team Workshop
 Pazar => Tatil */


/* let password = 'pg@'

if(password.length >=5 && password.includes('@') ){
    console.log('that password is strong');
}else {
    console.log('password is not long enough');
}

 */


// Loops

// let i = 12;
// let sum = 0;

// while (i < 11) {
//     sum += i;
//     console.log(i);
//     i++
//     // if (i==8) break;   
// }
// console.log(sum);

// while (i<11) {
//     sum += i;
//     i++
//     if (i==8) continue;
//     console.log(i);
// }

// let i = 5;
// let sum = 0

// do {
//     sum += i;
//     i++;
// }
// while (i < 5);
// console.log(sum);


// let text = 'Clarusway';

// for(let i =0; i < text.length; i++){
//     console.log(text[i]);
// }
/* let sum = 0;
for(let i = 0; i <= 10;i++){
    sum += i;
    console.log(sum);
} */

// let sum = 0;
// for(let i = 0; i <= 10;i++){
    
//     if (i %2 ==0){
//     // sum += i;
//     console.log(i);
//     }
    // console.log(sum);



// 1 den 100 e kadar sayılarda fizz buzz
// Eğer sayı 3 e bölünüyorsa fizz
// Eğer sayı 5 e bölünüyorsa buzz
// Hem 3 e hem 5 e bölünnüyorsa fizzbuz
// Harun
/* for(let i = 0; i <100 ; i++){
    if(i%15 == 0){
      console.log(i,"FizzBuzz")
    }
    else if(i%5 == 0){
      console.log(i,"Buzz")
    }
    else if (i%3 == 0){
      console.log(i,"Fizz")
    }
  }  */


  //Ödev 1 den 100 e kadar asal sayılar