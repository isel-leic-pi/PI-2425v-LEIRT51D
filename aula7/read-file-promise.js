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
    .then(()=>20)
    .then(a => console.log(a))
    .then(c => Promise.reject(Error(c)))
    .catch(error => console.log("ERROR",error))
    .then(()=>"PAssei o Erro")
    
console.log("DONE REALLY?1")
console.log("DONE REALLY?2")