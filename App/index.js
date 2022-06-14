const SortedArray = require("sorted-array-async")

const concat = require('./concat')
const sum = require('./calc')

const numbersToConcat = [1, 2, 3, 4, 5]
const numbersToAdd = [1, 2, 3, 4, 5]

const result = concat.concat(numbersToConcat)

const instance = new SortedArray(result)

let sortedarray

setTimeout(() => {
    const result2 = sum.sum(numbersToAdd)
    console.log(`The result of the sum is ${result2}`)
}, 3000);


instance.getArray().then(array => { 
    sortedarray = array
    console.log(`The sorted array is: ${sortedarray.toString()}`)
    console.log('Printing with timeout....')
})

console.log(`The result of the concat is ${result}`)


