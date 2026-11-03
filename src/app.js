// import {
//   CURRENT_DATE,
//   sum,
//   multiply,
//   subtract,
//   calculate,
// } from "./utils/index.js";
// import buildMakePerson from "./factories/person.factory.js";

// console.log(CURRENT_DATE);
// console.log(sum(2, 3));
// console.log(multiply(5, 3));
// console.log(subtract(10, 5)); // 5

// console.log(calculate(10, 5, sum)); // 15
// console.log(calculate(10, 5, multiply)); // 50
import { v4 as uuidv4 } from "uuid";
import getAge from "get-age";

import makePerson from "./factories/person.factory.js";

const createPerson = makePerson({ uuidv4, getAge });

const people = [
  createPerson("John Doe", "2000-05-15"),
  createPerson("Tomás Fernández", "2001-08-01"),
  createPerson("Facundo Pereira", "2003-01-15"),
  createPerson("Lionel Messi", "1987-06-24"),
];

console.log(people);
