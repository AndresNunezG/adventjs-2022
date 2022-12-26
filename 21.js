/**
 * There are too many letters from children asking for gifts and it is very difficult that we can inventory all of them. That's why we have decided to create a program that draws us a table with the gifts we ask for and their quantities.

For this we are given an array of objects with the names of the gifts and their quantities. Write a function that receives this array and returns a string with the drawn table.

printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
])
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 7        |
*******************
Another example where you can see that the table always uses only the exact space depending on the length of the names of the gifts and the quantities.

printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
])
++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************

++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |

As you can see, the size of the cells depends on the length of the names of the gifts and the quantities, although they will at least have to be the space of the titles Gift and Quantity respectively.

The table uses the symbols: + for the top border, * for the bottom border, - for the horizontal lines and | for the vertical lines.

Keep in mind:

Use only the space you need to draw the table.
Adapt the table to the length of the names of the gifts and the quantities or the titles of the columns.
There is no need to order the results.
The table does not end with a line break.
 */

//SCORE: 120
function printTable(gifts) {

  let lengthName = 4
  let lengthQuantity = 8

  const getNamesLength = (giftsNames, type) => {
    return giftsNames.reduce((a, b) => (Math.max(a, b)),
    type === 'names' ? lengthName : lengthQuantity)
  }

  const giftsNames = gifts.map(obj => obj.name.length)
  const giftsQuantities = gifts.map(obj => String(obj.quantity).length)

  const namesLength = getNamesLength(giftsNames, 'names')
  const quantitiesLength = getNamesLength(giftsQuantities, 'quantities')

  let table = ""
  table += `${'+'.repeat(namesLength + quantitiesLength + 7)}\n`
  table += `| Gift${' '.repeat(namesLength - 'Gift'.length)} |`
  table += ` Quantity${' '.repeat(quantitiesLength - 'Quantity'.length)} |\n`
  table += `| ${'-'.repeat(namesLength)} | ${'-'.repeat(quantitiesLength)} |\n`

  gifts.forEach(giftCouple => {
    const nameLength = giftCouple.name.length
    const quantityLength = String(giftCouple.quantity).length
    table += `| ${giftCouple.name}`
    table += `${' '.repeat(namesLength - nameLength)} | `
    table += `${giftCouple.quantity}`
    table += `${' '.repeat(quantitiesLength - quantityLength)} |\n`
  });

  table += `${'*'.repeat(namesLength + quantitiesLength + 7)}`

  return table
}

console.log(printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 },
]))
