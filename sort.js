'use strict';

const _ = require('lodash');
const chalk = require('chalk');
const util = require('util');

//const arr = [6,5,3,1,8,7,2,4]
const arr = [8,7,6,5,4,3,2,1];

console.log('start>>>', arr);

function swap (array, index1, index2) {
  const temp = array[index1]

  arr[index1] = arr[index2]
  array[index2] = temp
}

function insertionSort (array) {
  for (let i = 1; i < array.length; i++) {
    console.log(chalk.blue(i));
    const x = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > x) {
      array[j+1] = array[j]
      j = j - 1
      console.log(chalk.red(util.inspect(array)));
    }
    array[j+1] = x
  }
  return array
}
console.log('end>>>', insertionSort(arr));

// function bubbleSort (array) {

//   for (let j = 1; j < array.length; j++) {
//     console.log(j);
//     for (let i = 0; i < array.length - j; i++) {
//       if (array[i] > array[i + 1]) {
//         swap(array, i, i + 1)
//         console.log(chalk.red(util.inspect(array)));
//       }
//       console.log(array)
//     }
//   }

//   return array
// }

//console.log('end>>>', bubbleSort(arr));

