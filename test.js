var generator = require('./index.js')
generator.addCharSet('A')
generator.setStringLength(9)
console.log(generator.generateRandomString())