import {
  CURRENT_DATE,
  sum,
  multiply,
  subtract,
  calculate,
} from "./utils/index.js";
import createPerson from "./factories/person.factory.js";

console.log(CURRENT_DATE);
console.log(sum(2, 3));
console.log(multiply(5, 3));
console.log(subtract(10, 5)); // 5

console.log(calculate(10, 5, sum)); // 15
console.log(calculate(10, 5, multiply)); // 50

const person = createPerson("John Doe", "2000-05-15");
console.log(person);
