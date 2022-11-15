const fs = require('fs')

const filenames = fs.readdirSync('./data/')
console.log(filenames)