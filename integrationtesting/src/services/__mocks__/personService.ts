import { Person } from "../../models/Person";

export const personsMock: Person[] = [
  { name: "Sebastian", age: 44, isMarried: true },
  { name: "Hanna", age: 44, isMarried: true },
  { name: "Astrid", age: 13, isMarried: false },
  { name: "Alvar", age: 13, isMarried: false },
];

export const getPersons = async (): Promise<Person[]> => {
  return new Promise((resolve) => {
    resolve(personsMock);
  });
};
