const fs = require('fs')
const crypto = require('crypto')

const filnalHex = []
let resStr =""

const filenames = fs.readdirSync('./data/')
filenames.forEach(fName => {
    const buff = fs.readFileSync(`./data/${fName}`)
    const hash = crypto.createHash("sha3-256").update(buff).digest("hex")
    filnalHex.push(hash)
})

filnalHex.sort().join('')
console.log(filnalHex)

filnalHex.forEach(hex=>{
    resStr+=hex
})

resStr+="makhmudov@tuta.io"
resStr = crypto.createHash("sha3-256").digest("hex")
console.log(resStr)