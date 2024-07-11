const characters = require("./characters.js")

const validCharacter = (charactersArray) => {
  const validCharacters = charactersArray.filter((character) => character.enabled)
  const randomInt = Math.floor(Math.random() * Object.keys(validCharacters).length);
  return validCharacters[randomInt]
}

console.log(validCharacter(characters));
