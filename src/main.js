//1.Дефолтний імпорт чогось одного
//import plus from "./js/calculator";
// console.log(plus(23, 45));

//2.Дефолтний імпорт обʼєкту
// import calculator from "./js/calculator";
// console.log(calculator.divide(45, 0));
// console.log(calculator.multiplat(3, 5));
// console.log(calculator.add(45, 25));
// console.log(calculator.minus(45, 59));

//3.Іменований імпорт

// import { add, divide, multiplat, minus } from "./js/calculator";
// console.log(add(34, 89));
// console.log(divide(23, 0));
// console.log(multiplat(2, 5));
// console.log(minus(34, 12));

//4.Іменований імпорт як обʼєкта

// import * as calc from "./js/calculator";

// console.log(calc.divide(34, 8));
// console.log(calc.multiplat(34, 8));
// console.log(calc.add(34, 8));
// console.log(calc.minus(34, 8));

import { nanoid } from "nanoid";

const people = [
  { name: "Yaroslav", age: 18 },
  { name: "Andrii", age: 20 },
  { name: "Marta", age: 19 },
  { name: "Oksana", age: 22 },
  { name: "Dmytro", age: 21 },
  { name: "Sofia", age: 18 },
  { name: "Ivan", age: 23 },
  { name: "Nazar", age: 20 },
  { name: "Kateryna", age: 19 },
  { name: "Viktor", age: 24 },
];

const peoples = people.map((item) => ({
  ...item,
  id: nanoid(5),
}));
console.log(peoples);
