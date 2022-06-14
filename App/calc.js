const _ = require('lodash')
const numsFromJson = require('./readFromJson')

const nums = numsFromJson.numsObject.numbers


const sumFromJson = nums.reduce((num, val) => num + val, 0)


function sum(arr) {

    return arr.reduce(function(a, b) {
        return a + b
    }, sumFromJson)
}

module.exports.sum = sum;