// * synchronous

// console.time('aa');
// console.log('hello');
// wait(1500);
// console.log('world');
// console.timeEnd('aa');

function wait(ms) {
  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

// const hello = () => {
//   console.log('World');
//   console.timeLog('bb');
// }

// console.time('bb');
// setTimeout(hello, 1500);
// console.log('hello');
// console.timeEnd('bb');

// setTimeout(() => {
//   console.log('this is the first message');
// }, 5000);
// setTimeout(() => {
//   console.log('this is the second message');
// }, 3000);
// setTimeout(() => {
//   console.log('this is the third message');
// }, 1000);
// ! callback hell
// setTimeout(() => {
//   console.log('1. merhaba');
//   setTimeout(() => {
//     console.log('2. nasilsin?');
//     setTimeout(() => {
//       console.log('3. görüşmek üzere');
//     }, 0);
//   }, 0);
// }, 0);

// setTimeout(() => {
//   console.log('1');
// }, 0);
// setTimeout(() => {
//   console.log('2');
// }, 0);
// setTimeout(() => {
//   console.log('3');
// }, 0);
// setTimeout(() => {
//   console.log('4');
// }, 0);
// console.log('1. merhaba');
// console.log('2. nasilsin?');
// console.log('3. görüşmek üzere');

// let i = 0;
// let counter = setInterval(() => {
//   i++;
//   console.log(`${i} seconds passed`);
//   if (i == 10) clearInterval(counter);
// }, 1000);
// let counter = 0;
// const id = setInterval(() => {
//   console.log(`${counter} merhaba 🎯`);
//   counter++;
//   if (counter == 5) {
//     clearInterval(id);
//   }
// }, 1500);

// *=======================
// *        Promise
// *=======================

// const myPromise = new Promise((resolve, reject) => {
//   /* --- */
//   // resolve('task completed');
//   reject(new Error('Task failed'));
// });

// myPromise.then(result => console.log(result)).catch(err => console.log(err));

// const myPromise2 = new Promise((resolve, reject) => {
//   console.log('myPromise2 started');
//   /* ---- */
//   const arr = [1, 5, 8, 3, 6];
//   let condition = !Math.floor(Math.random() * 2);
//   if (condition) {
//     resolve(arr);
//   } else {
//     reject(new Error('failed'));
//   }
// });

// myPromise2.then(result => console.log(result)).catch(err => console.log(err));

// * 1. suyun kaynaması -> kettle -> çalışıyor / arızalı
//* 2. çay var mı
// * 3 bekle demlenme

function cayDemle() {
  suyuKaynat()
    .then(status1 => {
      console.log(status1);
      return demEkle();
    })
    .then(status2 => {
      console.log(status2);
      wait(1000);
      return 'Cay hazir afiyet olsun';
    })
    .then(status3 => {
      console.log(status3);
    })
    .catch(err => console.log(err));
}
// cayDemle();

function suyuKaynat() {
  return new Promise((resolve, reject) => {
    const suKaynadi = Math.floor(Math.random() * 2);
    if (suKaynadi) {
      wait(1000);
      resolve('su kaynadi');
    } else {
      reject(new Error('Kettle arizali'));
    }
  });
}

function demEkle() {
  return new Promise((resolve, reject) => {
    const cayMevcut = Math.floor(Math.random() * 2);
    if (cayMevcut) {
      wait(1000);
      resolve('cay eklendi');
    } else {
      reject(new Error('cay bitmiş'));
    }
  });
}

async function cayDemle2() {
  try {
    const status1 = await suyuKaynat();
    console.log(status1);
    const status2 = await demEkle();
    console.log(status2);
    const status3 = await Promise.resolve('Cay hazir afiyet olsun');
    console.log(status3);
  } catch (error) {
    console.log(error);
  }
}

cayDemle2();
console.log('aaa');
