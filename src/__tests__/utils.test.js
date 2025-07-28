// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("should return the correct age for a given birth year", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = 1990;
    const expectedAge = currentYear - birthYear;

    // Act
    const result = currentAgeForBirthYear(birthYear);

    // Assert
    expect(result).toBe(expectedAge);
  });

  it("should return 0 when birth year is current year", () => {
    // Arrange
    const currentYear = new Date().getFullYear();

    // Act
    const result = currentAgeForBirthYear(currentYear);

    // Assert
    expect(result).toBe(0);
  });

  it("should return negative number for future birth years", () => {
    // Arrange
    const futureYear = new Date().getFullYear() + 5;

    // Act
    const result = currentAgeForBirthYear(futureYear);

    // Assert
    expect(result).toBe(-5);
  });

  it("should throw error when birth year is not a number", () => {
    // Arrange
    const invalidInputs = ["text", null, undefined, {}, []];

    invalidInputs.forEach(input => {
      // Act & Assert
      expect(() => currentAgeForBirthYear(input)).toThrow(
        "Birth year must be a number"
      );
    });
  });

  it("should handle minimum safe integer", () => {
    // Arrange
    const birthYear = Number.MIN_SAFE_INTEGER;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    // Act
    const result = currentAgeForBirthYear(birthYear);

    // Assert
    expect(result).toBe(expectedAge);
  });
});