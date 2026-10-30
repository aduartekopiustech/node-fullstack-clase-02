import { v4 as uuidv4 } from "uuid";
import getAge from "get-age";

const createPerson = (name, birthdate) => {
  return {
    id: uuidv4(),
    name,
    birthdate,
    age: getAge(birthdate),
  };
};

export default createPerson;
