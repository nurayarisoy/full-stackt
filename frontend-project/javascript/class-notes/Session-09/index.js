console.log('» index.js is running');

/* let arr = [41, 2, 333, 4, 55, 48, 26, 88];

console.log(arr[0]);
console.log(arr[arr.length - 1]);

const [first, , third, ...others] = arr;
console.log('first: ', first);
console.log('third => ', third);
console.log(others);
const [last, ...other2] = arr.reverse();

console.log('last..', last); 

let studentData = ['name', 'lastname', [78, 68, 95]];
studentData[2][1];
let [, , grades] = studentData;
grades[1];

*/

// destructuring objects
const hotel = {
  name: 'Hotel Clarusway',
  categories: ['Spa', 'Swimming Pool', 'Resort'],
  options: ['just stay', 'free breakfast', 'all inclusive'],
  rooms: ['2-bed', '3-bed', '4-bed'],
  receptionHours: {
    mon: {
      open: 8,
      close: 22,
    },
    fri: {
      open: 9,
      close: 21,
    },
    sat: {
      open: 10,
      close: 20,
    },
  },

  book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
    console.log(
      `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
    );
  },
};

/* console.log(`hotel.categories`, hotel.categories);

let { name: hotelName, options: hotelOptions, rooms: hotelRooms } = hotel;

console.log(`hotelName`, hotelName);
console.log(`hotelOptions`, hotelOptions);
console.log(`hotelRooms`, hotelRooms);

hotelName = 'California';
console.log(hotel);
console.log(hotelName);

let x = 10;
let y = 5;
const obj = { x: 1, y: 2, z: 3 };
({ x, y } = obj);
console.log(x, y); */

/* const { mon } = hotel.receptionHours;
console.log(mon);

const {
  receptionHours: {
    fri: { open: opensAt, close: closesAt },
  },
} = hotel;
console.log(opensAt, closesAt);

const roomIndex = 1;
hotel.book({
  departure: '23:00',
  arrival: '09:00',
  roomIndex: roomIndex,
});
g
let newHotel = { ...hotel };
let newHotel2 = hotel;
newHotel.name = 'California';
console.log(newHotel);
console.log(hotel); */

// const { sat, ...weekdays } = hotel.receptionHours;
// console.log(sat, weekdays);

// hotel.numGuest = 0;
// const guestCount = hotel.numGuest ?? 100;
// console.log(guestCount);
console.log(hotel.receptionHours.fri.open);
// console.log(hotel.receptionHours.tue.open);

if (hotel.receptionHours.tue) {
  console.log(hotel.receptionHours.tue.open);
} else {
  console.log('no such property....');
}

console.log(hotel.receptionHours.tue?.open);
