import { getPersons } from "./services/personService";

export const init = async () => {
  // Hämta data
  const persons = await getPersons();

  // Presentera data
  for (let i = 0; i < persons.length; i++) {
    const personContainer = document.createElement("div");
    personContainer.className = "person";

    const nameTag = document.createElement("h3");
    nameTag.innerHTML = persons[i].name;

    personContainer.appendChild(nameTag);
    document.body.appendChild(personContainer);
  }
};
