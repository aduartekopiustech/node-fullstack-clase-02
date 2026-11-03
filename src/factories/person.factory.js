const makePerson = ({ uuidv4, getAge }) => {
  return (name, birthdate) => ({
    uid: uuidv4(),
    name,
    birthdate,
    age: getAge(birthdate),
  });
};

export default makePerson;
