// *=======================================================
//                       FOREACH
// *=======================================================

//---------------------------------------------------------
// print each element of array into console
//---------------------------------------------------------

const students = ["John", "Ali", "Can"];

students.forEach(print);

// * function decleration
function print(x) {
  console.log(x);
}

//  * with Arrow funct
students.forEach((x) => console.log(x));

//---------------------------------------------------------------
// Calculate the sum of the array
//----------------------------------------------------------------

const array1 = [5, 6, 7, 2, 3];

let sum = 0;
array1.forEach((v) => (sum += v));
console.log("SUM= ", sum);

// =======================================================
//                        MAP
// =======================================================
// map() metodu, dizilerin içerisindeki değerleri
// güncelleyerek ayrı bir diziye saklamak içinn kullanablriz.

//---------------------------------------------------------------
// Dizinin her bir elamanının 5 katını alarak ayrı bir dizide
// saklayan uygulamayı map() metodu ile yazınız.
//----------------------------------------------------------------

// Eğer bir diziyi trasnformasyona uğratacak isek forEach yerine map()
// kullanmak çok daha basit. map() metodu, güncellenmiş diziyi doğrudan
// bir değişkene atmaya izin  vermektedir.

const numberArray = [3, 7, 17, 8, 9, 3, 0];

const doubled = numberArray.map((x) => x * 2);

console.log(doubled, numberArray);

//---------------------------------------------------------------
// Beliritilen dizideki isimleri büyük harfe çevirerek bir dizide
// saklayan uygulamayı map() metodu ile yazınız.
//----------------------------------------------------------------
const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "ayşe", "canan"];

const bigNames = names.map((v) => v.toUpperCase());
console.log(bigNames, names);

//---------------------------------------------------------------
// Ürünlerin TL fiyatlarının saklandığı bir dizimiz var. Bu dizideki
// değerlerin Euro ve Dolar karşılıklarını verilen oranlara göre
// hesaplayarak ayrı dizilere saklayan uygulamayı map() ile yazınız
//----------------------------------------------------------------

const euro = 11;
const dolar = 10.3;

const tlPrices = [100, 150, 100, 50, 80];

const dolarPrices = tlPrices.map((tl) => (tl / dolar).toFixed(2));
const euroPrices = tlPrices.map((tl) => (tl / euro).toFixed(2));

console.log(tlPrices, dolarPrices);
console.log(euroPrices);

//---------------------------------------------------------------
// tlFiyatlar dizidekisindeki ürünlere zam yapılmak isteniyor.
// Şartımız:  Fiyatı 100 TL den fazla olanlara %10 zam,
// 100 TL den az olanlara ise %15 zam yapılmak isteniyor.
// Ayrıca, zamlı olan yeni değerleri
// New Price of Product 1 : 110 TL şekilde diziye saklamak istiyoruz.
//----------------------------------------------------------------

const increasedPrices = tlPrices.map((tl, i) => {
  if (tl > 100) {
    return `New Price of Product ${i + 1} : ${(tl * 1.1).toFixed(2)}`;
  } else {
    return `New Price of Product ${i + 1} : ${(tl * 1.15).toFixed(2)}`;
  }
});

console.log(increasedPrices);

// =======================================================
//                       FILTER
// =======================================================

// filter() metodu bir dizideki elemanları istediğimiz kritere
// göre flitreleyerek seçmek için kullanabilriz.

//---------------------------------------------------------------
// koordinatlar dizisindeki negatif koordinatları alıp
// yeni bir diziye saklayan uygulamayı filter() ile yapınız.
//----------------------------------------------------------------

const coords = [-100, 150, -32, 43, -20];
negatives = coords.filter((c) => c < 0);

console.log(negatives, coords);

// =======================================================
//           FILTER,FOREACH,MAP BERABER KULLANIMI
// =======================================================
// Dizi iterasyon metotları ardı ardına kullanılabilir.
// Böylelikle ardaşık bir şekilde gelip veriler işlenebilir.

//---------------------------------------------------------------
// koordinatlar dizisindeki negatif koordinatları seçerek bunları
// pozitife çevirip konsola bastıran uygulamayı yazınız.
//----------------------------------------------------------------

const answer = coords
  .filter((c) => c < 0)
  .map((c) => c * -1)
  .forEach((c) => console.log(c));

//---------------------------------------------------------------
// Bireyler disindeki kişilerden Adı "Belirtilen" harf ile başlayanları
// seçerek ayrı bir diziye saklayan uygulamayı yazınız.
//----------------------------------------------------------------

const people = ["Mustafa", "Murat", "Mevlut", "Kerime", "Ayşe", "Can"];

const selectByFirstLetter = function (letter) {
  const bigLetter = letter.toUpperCase();
  const filteredNames = people.filter((n) => n.startsWith(bigLetter));
  if (!filteredNames.length) {
    return "Person is not found";
  } else {
    return filteredNames;
  }
};
console.log(selectByFirstLetter("m"));
console.log(selectByFirstLetter("M"));
console.log(selectByFirstLetter("A"));
console.log(selectByFirstLetter("z"));

//---------------------------------------------------------------
// Aşağıdaki formata göre bireyler dizisindeki her bir elemanın
// uzunluğunu sıralı olarak yazdıran uygulamayı yazınız.
//  Can: 3
//  Ayşe: 4
//  Murat: 5  v.b.
//---------------------------------------------------------------

// =======================================================
//                   REDUCE KULLANIMI
// =======================================================
// reduce metodunu diziden tek bir değer elde etmek için kullanırız.
// Örneğin dizinin toplam değeri gibi.
// reduce(toplam, şuankideğer, indeks, dizi) şeklinde dört adet parametre
// alabilir. Bunlardan ilk ikisi zorunludur.

//---------------------------------------------------------------
// Koordinatlar dizisindeki değerlerin toplamını hesaplayarak
// konsola bastıran uygulamayı reduce() ile yazınız.
//----------------------------------------------------------------

// * const coords = [-100, 150, -32, 43, -20];

console.log(coords.reduce((x, y) => x + y));

//---------------------------------------------------------------
// Koordinatlar dizisindeki değerlerin ortalamasını hesaplayarak
// konsola bastıran uygulamayı reduce() ile yazınız.
//----------------------------------------------------------------
const avg = coords.reduce((x, y) => x + y) / coords.length;
console.log("Koordinatların Ortalaması:" + avg);

// =======================================================
//             FILTER,MAP,REDUCE BERABER KULLANIMI
// =======================================================
//---------------------------------------------------------------
// Firma, 3000 TL den az olan maaşlara %10 zam yapmak istiyor
// ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek
// istiyor. İlgili programı yazınız.
//----------------------------------------------------------------
const salaries = [3000, 2891, 3500, 4200, 7000, 2500];

const sumOfRaisedSalaries = salaries
  .filter((s) => s < 3000)
  .map((s) => s * 1.1)
  .reduce((acc, val) => acc + val);

console.log(sumOfRaisedSalaries);
