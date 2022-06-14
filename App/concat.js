const _ = require('lodash')
const numsFromJson = require('./readFromJson')

const nums = numsFromJson.numsObject.numbers

function concat(arr) {
    return _.concat(arr, nums)
}

module.exports.concat = concat