import characters from "./characters";
import bosses from "./bosses";

const chooseCharacter = (charactersArray = characters) => {
  const validCharacters = charactersArray.filter((character) => character.enabled)
  const randomInt = Math.floor(Math.random() * Object.keys(validCharacters).length);
  return validCharacters[randomInt]
}

const chooseBoss = (bossesArray = bosses) => {
  const validBoss = bossesArray.filter((character) => character.enabled)
  const randomInt = Math.floor(Math.random() * Object.keys(validBoss).length);
  return validBoss[randomInt]
}

console.log(chooseCharacter(), chooseBoss());
