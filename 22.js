/**
 * Verify that all independent sequences of Christmas lighting systems are in strictly increasing order. We have two arrays: systemNames and stepNumbers.

systemNames contains the names of the Christmas lighting systems, and stepNumbers contains the step numbers of each system.

We must verify that the stepNumbers of each system are in strictly increasing order. If this is true, return true; otherwise, return false.

For example:

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

checkStepNumbers(systemNames, stepNumbers) // => true

// tree_1 has steps: [1, 2]
// tree_2 has steps: [33, 44]
// house has steps: [10, 20]

// true: The steps of each system are in strictly increasing order

checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) // => false

// tree_1 has steps: [2, 1]
// house has steps: [10]

// false: tree_1 has steps in decreasing order
Note that:

The position of the system name in systemNames and the step number in stepNumbers correspond to the same system.
The steps in stepNumbers can be repeated for different systems.
 */

//SCORE: 10
function checkStepNumbers(systemNames, stepNumbers) {
  
  const auxObj = {}
  systemNames.forEach((element, index) => {
    if (element in auxObj) auxObj[element].push(stepNumbers[index])
    else auxObj[element] = [stepNumbers[index]]
  })

  const checkSorted = (arr) => {
    let sorted = true
    for (let index = 0; index < arr.length; index ++) {
      if (arr[index] >= arr[index + 1]) {sorted = false; return sorted}
    }
    return sorted
  }

  let allSystemsValid = true
  for (const system in auxObj) {
    if (!checkSorted(auxObj[system])) {allSystemsValid = false; break}
  }

  return allSystemsValid      
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

console.log(checkStepNumbers(systemNames, stepNumbers)) //true
console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])) //false
