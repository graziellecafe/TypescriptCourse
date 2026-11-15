type ProgrammingLanguages = "Python" | "Javascript" | "Typescript";

function sayFavoriteProgrammingLanguage(language: ProgrammingLanguages) {
  return `You like ${language}`;
}

const favoriteLanguage = sayFavoriteProgrammingLanguage("Typescript");
console.log("Typescript"); // Output: You like Typescript
