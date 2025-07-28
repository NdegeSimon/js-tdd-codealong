// src/utils.js
export function currentAgeForBirthYear(birthYear) {
  if (typeof birthYear !== "number" || isNaN(birthYear)) {
    throw new Error("Birth year must be a number");
  }
  
  return new Date().getFullYear() - birthYear;
}