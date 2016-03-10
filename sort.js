'use strict'

const chalk = require('chalk')
const util = require('util')

const arr = [6,5,3,1,8,7,2,4]
console.log('start', arr)
console.log('bubbled', bubbleSort(arr.concat([])))
console.log('inserted', insertionSort(arr.concat([])))
console.log('selected', selectionSort(arr.concat([])))

function selectionSort (array) {

  // if (array[minimumIndex] > array[1]) {
  //   minimumIndex = 1
  // }

  // if (array[minimumIndex] > array[2]) {
  //   minimumIndex = 2
  // }

  // ...

  // if (array[minimumIndex] > array[n - 1]) {
  //   minimumIndex = n - 1
  // }

  // swap(array, 0, minimumIndex)

  // minimumIndex = 1
  //
  // if (array[minimumIndex] > array[2]) {
  //   minimumIndex = 2
  // }

  // if (array[minimumIndex] > array[3]) {
  //   minimumIndex = 3
  // }

  // ...

  // if (array[minimumIndex] > array[n - 1]) {
  //   minimumIndex = n - 1
  // }

  // swap(array, 1, minimumIndex)

  // ...

  // swap(array, n - 2, minimumIndex)

  for (let i = 0; i < array.length - 1; i++) {
    let minimumIndex = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[minimumIndex] > array[j]) {
        minimumIndex = j
      }
    }

    if (minimumIndex !== i) {
      swap(array, minimumIndex, i)
      console.log(chalk.red(util.inspect(array)))
    } else {
      console.log(chalk.dim(util.inspect(array)))
    }
  }

  return array
}

function insertionSort (array) {

  // if (array[0] > array[1]) {
  //   swap(array, 0, 1)
  // }

  // if (array[1] > array[2]) {
  //   swap(array, 1, 2)

  //   if (array[0] > array[1]) {
  //     swap(array, 0, 1)
  //   }
  // }

  // if (array[2] > array[3]) {
  //   swap(array, 2, 3)

  //   if (array[1] > array[2]) {
  //     swap(array, 1, 2)

  //     if (array[0] > array[1]) {
  //       swap(array, 0, 1)
  //     }
  //   }
  // }

  // ...

  // if (array[n - 2] > array[n - 1]) {
  //   swap(array, n - 2, n - 1)

  //   {{{

  //     if (array[0] > array[1]) {
  //       swap(array, 0, 1)
  //     }

  //   }}}
  // }

  for (let i = 1; i < array.length; i++) {
    for(let j = i; j > 0; j--) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j)
        console.log(chalk.red(util.inspect(array)))
      } else {
        console.log(chalk.dim(util.inspect(array)))
      }
    }
  }

  return array
}

function bubbleSort (array) {

  // if (array[0] > array[1]) {
  //   swap(array, 0, 1)
  // }

  // if (array[1] > array[2]) {
  //   swap(array, 1, 2)
  // }

  // ...

  // if (array[n - 2] > array[n - 1]) {
  //   swap(array, n - 2, n - 1)
  // }

  // if (array[0] > array[1]) {
  //   swap(array, 0, 1)
  // }

  // if (array[1] > array[2]) {
  //   swap(array, 1, 2)
  // }

  // ...

  // if (array[n - 2] > array[n - 1]) {
  //   swap(array, n - 3, n - 2)
  // }

  // ...

  // if (array[0] > array[1]) {
  //   swap(array, 0, 1)
  // }

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        console.log(chalk.red(util.inspect(array)))
      } else {
        console.log(chalk.dim(util.inspect(array)))
      }
    }
  }

  return array
}

function swap (array, index1, index2) {
  const temp = array[index1]

  array[index1] = array[index2]
  array[index2] = temp
}
