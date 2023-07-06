const characters = require("./characters")

const validCharacter = (charactersArray) => {
  let isEnable = true;
  while (isEnable === true){
    const randomInt = Math.floor(Math.random() * Object.keys(charactersArray).length);
    if(characters[randomInt].enabled){
      isEnable = false
      return characters[randomInt]
    }
  }
}

console.log(validCharacter(characters));