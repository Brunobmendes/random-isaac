const characters = require("./characters")

const randomInt = Math.floor(Math.random() * Object.keys(characters).length)

console.log(characters[randomInt]);