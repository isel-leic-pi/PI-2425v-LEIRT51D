//The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.

//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

import fs from 'node:fs/promises'

const readPromise = fs.readFile("file1.txt")
console.log(readPromise)


readPromise
    .then(data => console.log(data.toString()))
    .catch(error => console.log("ERROR",error))
    
console.log("DONE REALLY?")
