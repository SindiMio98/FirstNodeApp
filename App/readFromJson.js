const fs = require('fs')

let numsFromJson = fs.readFileSync('data.json')

let numsObject = JSON.parse(numsFromJson)

module.exports.numsObject = numsObject