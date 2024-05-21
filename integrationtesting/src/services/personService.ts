import axios from "axios";
import { Person } from "../models/Person";

// type PersonResponse = {
//   success: boolean;
//   persons: Person[];
//   error: string;
// };

export const getPersons = async (): Promise<Person[]> => {
  try {
    const response = await axios.get<Person[]>("...");
    // return { success: true, persons: response.data, error: "" };
    return response.data;
  } catch (error) {
    // Log error
    console.log(error);

    // return { success: false, persons: [], error: JSON.stringify(error) };
    return [];
  }
};
