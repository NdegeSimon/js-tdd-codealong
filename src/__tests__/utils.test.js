// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const expectedAge = currentYear - birthYear;

    // Act
    const actualAge = currentAgeForBirthYear(birthYear);

    // Assert
    expect(actualAge).toBe(expectedAge);
  });
});
// src/utils.js
export function currentAgeForBirthYear(birthYear) {
  return new Date().getFullYear() - birthYear;
}
// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const expectedAge = currentYear - birthYear;

    // Act
    const actualAge = currentAgeForBirthYear(birthYear);

    // Assert
    expect(actualAge).toBe(expectedAge);
  });

  it("returns 0 for someone born this year", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    
    // Act
    const age = currentAgeForBirthYear(currentYear);
    
    // Assert
    expect(age).toBe(0);
  });

  it("returns a negative number for future birth years", () => {
    // Arrange
    const futureYear = new Date().getFullYear() + 5;
    
    // Act
    const age = currentAgeForBirthYear(futureYear);
    
    // Assert
    expect(age).toBe(-5);
  });
});
// src/utils.js
export function currentAgeForBirthYear(birthYear) {
  if (typeof birthYear !== "number" || isNaN(birthYear)) {
    throw new Error("Birth year must be a number");
  }
  
  return new Date().getFullYear() - birthYear;
}
// src/__tests__/utils.test.js
describe("error handling", () => {
  it("throws an error when birth year is not a number", () => {
    // Arrange
    const invalidBirthYear = "not a number";
    
    // Act & Assert
    expect(() => currentAgeForBirthYear(invalidBirthYear)).toThrow(
      "Birth year must be a number"
    );
  });
});
export function currentAgeForBirthYear(birthYear) {
  return new Date().getFullYear() - birthYear;
}