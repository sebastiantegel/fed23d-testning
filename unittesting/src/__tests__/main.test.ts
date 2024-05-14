import { add } from "../main";

describe("Main functions", () => {
  test("it should add correctly", () => {
    // Assign
    const x = 4;
    const y = 9;

    // Act
    let sum = add(x, y);

    // Assert
    expect(sum).toBe(13);
  });
});
