const fs = require('fs')

const _ = require('lodash')

const numsFromJson = fs.readFileSync('data.json')
const numsObject = JSON.parse(numsFromJson)

const nums = numsObject.numbers

function concat(arr) {
    return _.concat(arr, nums)
}

module.exports.concat = concat