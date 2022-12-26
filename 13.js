/**
 * To avoid losing data when the server crashes, Santa Claus has decided to make incremental backups. A hacker called S4vitelf is helping him.

On one hand, we have the timestamp of when the last backup was made.

We also have the changes that have been made in an array of arrays. Each internal array contains two elements: the id of the modified file and the timestamp of the modification.

You have to create a program that returns an array with the id of the files that we would have to make backup because they have been modified since the last backup and sorted in ascending order. Example:

const lastBackup = 1546300800

const changes = [
  [ 3, 1546300900 ],
  [ 2, 1546300900 ],
  [ 1, 1546300900 ],
  [ 1, 1546300900 ],
  [ 1, 1546300900 ]
]

getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
// The file with id 1 has been modified twice
// after the last backup.

// The file with id 2 has not been modified after
// the last backup.

// The file with id 3 has been modified once
// after the last backup.

// We have to make a backup
// of the files 1 and 3.
Remember that:

Returns the id of the files that have been modified after the last backup.
Returns an empty array if there are no files to make backup.
Remember to sort ids in ascending order.
 */

//SCORE: 260
function getFilesToBackup(lastBackup, changes) {
  const modifiedFiles = changes.filter(change => change[1] > lastBackup)
  if (!modifiedFiles.length) return []
  const uniqueIds = [...new Set([...modifiedFiles.map(file => file[0])])]
  return uniqueIds.sort((a, b) => a - b)
}

const lastBackup = 1546300800

const changesA = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

const changesB = [
  [ 3, 1546300900 ],
  [ 2, 1546300900 ],
  [ 1, 1546300900 ],
  [ 1, 1546300900 ],
  [ 1, 1546300900 ]
]

const changesC = [
  [ 3, 1546300700 ],
  [ 2, 1546300700 ],
  [ 1, 1546300700 ],
  [ 1, 1546300700 ],
  [ 1, 1546300700 ]
]

console.log(getFilesToBackup(lastBackup, changesA))
console.log(getFilesToBackup(lastBackup, changesB))
console.log(getFilesToBackup(lastBackup, changesC))
