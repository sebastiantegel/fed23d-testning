import axios from "axios";
import { getPersons } from "../services/personService";
import { personsMock } from "../services/__mocks__/personService";

describe("Person service", () => {
  test("it should return happy flow", async () => {
    const mockedAxios = jest.spyOn(axios, "get");
    mockedAxios.mockResolvedValue({
      data: personsMock,
    });

    const persons = await getPersons();

    expect(mockedAxios).toHaveBeenCalled();
    expect(mockedAxios).toHaveBeenCalledWith("...");
    expect(persons).toHaveLength(4);
    expect(persons[0].name).toBe("Sebastian");
  });

  test("it should handle reject", async () => {
    const mockedAxios = jest.spyOn(axios, "get");
    mockedAxios.mockRejectedValue({ message: "My awesome error" });

    const persons = await getPersons();

    expect(persons).toHaveLength(0);
  });
});
