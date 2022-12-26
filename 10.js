/**
 * Create a program that checks if Santa's sleigh makes a parabola jump between cities. You receive a number array that represents the height at which the sleigh is at each moment.

For the parabola to be correct, the sleigh's trip must be ascending at the beginning and descending at the end. It cannot go up again once it has gone down, nor can it start the trip going down. Let's see some examples:

const heights = [1, 3, 8, 5, 2]
checkJump(heights) // true

/*
It's `true`.
The jump goes up-down.

    8 (highest point)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

//const heights = [1, 7, 3, 5]
//checkJump(heights) // false

/*
It's `false`.
It goes up-down-up.

  7   5 
 ↗ ↘ ↗
1   3
We need the program to return a boolean that indicates whether the sleigh makes a parabola or not.

Things to keep in mind
The jump is valid if it goes up once and down once. If the sleigh stays at the same height between two positions, the parabola continues.
It is not necessary for the starting and ending points to be the same (cities can be at different heights).
 */

//SCORE: 2 unknown Tests failed
function checkJump(heights) {

  function cleanJumps(heights) {
    const result = []
    heights.forEach((element, index, array) => {
      if (element !== array[index + 1]) result.push(element)
    });
    return result
  }

  function isSortedAscendant(arr) {
    let sorted = true
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        sorted = false;
        break;
      }
    }
    return sorted
  }

  function isSortedDescendant(arr) {
    let sorted = true
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] > arr[i]) {
        sorted = false;
        break;
      }
    }
    return sorted
  }

  const cleanedJumps = cleanJumps(heights)
  const mid = Math.floor(cleanedJumps.length / 2)

  if (new Set([...cleanedJumps]).size === 1) return false
  return isSortedAscendant(cleanedJumps.slice(0, mid)) &&
    isSortedDescendant(cleanedJumps.slice(mid))
}

const heights1 = [1, 3, 8, 5, 2]
const heights2 = [1, 7, 3, 5]
const heights3 = [1, 2, 3, 2, 1, 2, 3]
const heights4 = [2, 2, 2, 2]
const heights5 = [1, 2, 2, 2, 1]

// console.log(checkJump(heights1)) //true
// console.log(checkJump(heights2)) //false
// console.log(checkJump(heights3)) //false
// console.log(checkJump(heights4)) //false
// console.log(checkJump(heights5)) //true
console.log(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])) //true
