import fs from 'node:fs/promises'

/*const readPromise = fs.readFile("file1.txt")
console.log(readPromise)

readPromise
    .then(data => console.log(data.toString()))
    .catch(error => console.log("ERROR",error))
*/

async function readFile1Txt(){
    try{
        const readPromise = fs.readFile("file1.txt")
        const data = await readPromise
        console.log(data.toString())
    }catch(error){
        console.log("ERROR",error)
    }
    return 10
}
    
readFile1Txt()
    .then(a=>console.log(a))
