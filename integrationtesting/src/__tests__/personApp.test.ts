import { init } from "../personApp";

jest.mock("./../services/personService.ts");

describe("Movie App", () => {
  test("it should get persons and present them", async () => {
    await init();

    const personDivs = document.querySelectorAll(".person");

    expect(personDivs).toHaveLength(4);
  });
});
