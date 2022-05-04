console.log('» index.js is running');

const person = {
  firstName: 'John',
  age: 30,
  location: {
    city: 'New York',
    temp: 92,
  },
  2021: 'Clarusway',
};

console.log(person.firstName);
console.log(person['age']);
console.log(person);
console.log(person.lastName);

person.lastName = 'Smith';
console.log(person['midName']);

console.log(person);
console.log(person['2021']);

const field = 'Name';
console.log(person['first' + field]);

// methods

const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
  citiesLived: ['New York', 'Paris', 'London'],
  location: {
    city: 'New York',
    temp: 92,
  },
  2021: 'Clarusway',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getFullName2() {
    return `${this.firstName} ${this.lastName}`;
  },
  aMethod: () => {
    return 'Hello';
  },
  printCitiesLived() {
    this.citiesLived.forEach(city => {
      console.log(this.firstName + ' has lived in ' + city);
    });
  },
};
console.log(person.getFullName2());

const print2 = person.printCitiesLived;
// print();
person.printCitiesLived();
// console.log(this);
// print2();

function printThis() {
  console.log(this);
}
printThis();

function Student() {
  this.name = 'John';
  this.grade = 68;
  this.printGrade = function () {
    return `${this.name} has a grade of ${this.grade}`;
  };
  this.printArrow = () => {
    return `${this.name} has a grade of ${this.grade}`;
  };
}
console.log(Student());

const student1 = new Student();
const student2 = new Student();
student2.name = 'Jane';

// console.log(student1.printGrade());
const pr = student1.printGrade;
console.log(pr.bind(student2)());

const arr = [1, 2, 3, 4, 5];
arr.push(8);
console.log(arr);

function Animal(name, age) {
  this.name = name;
  this.age = age;
  this.eat = function () {
    console.log('nom nom nom');
  };
}

// function Cat(name, age) {
//   Animal.call(this, name, age);
//   this.color = 'black';
//   function speak() {
//     console.log('meow');
//   }
// }

// function Dog(name, age) {
//   Animal.call(this, name, age);
//   function speak() {
//     console.log('woof');
//   }
// }

// const cat1 = new Cat('Fluffy', 2);
// console.log(cat1);
// const karabas = new Dog('Karabaş', 3);
// karabas.prototype = Object.create(Animal.prototype);
// console.log(karabas);

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  print() {
    console.log(`rgb(${this.r}, ${this.g}, ${this.b})`);
  }

  rgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  hex() {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`;
  }

  static hello() {
    console.log('Hello');
  }
}

// Color.print();

Array.isArray([]);
const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());
Color.hello();

const color1 = new Color(160, 24, 25, 'redly');
console.log(color1);
div1.style.backgroundColor = color1.hex();
const color2 = new Color(255, 67, 89, 'tomato');
div2.style.backgroundColor = color2.hex();
// div2.style.backgroundColor = '#00ff00';

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log('Im walking');
  }
  speak() {
    return 'I like humans';
  }
}

class Cat extends Pet {
  #weight = 5;

  get weight() {
    return this.#weight;
  }

  set weight(value) {
    if (value < 0) {
      this.weight = 3;
    } else {
      this.#weight = value;
    }
  }
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  speak() {
    let result = super.speak();
    result += ' and I like to meow';
    return this.#weight;
  }
}

const muezza = new Cat('Müezza', 2, 'gri');
// muezza.weight = 5;
// console.log(muezza);
console.log(muezza.speak());
// muezza.walk();
muezza.weight = -5;
console.log(muezza.weight);
