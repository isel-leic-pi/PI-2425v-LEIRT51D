import fs from 'node:fs'
//import {readFile} from 'fs'



function readFile1Txt(){

    return new Promise( (resolve, reject)=>{
        fs.readFile("file1.txt", processData)

        function processData(error, data){
            if(error) return reject(error)
            resolve(data)
        }
    })

}

const readPromise = readFile1Txt()
console.log(readPromise)

readPromise
    .then(data => console.log(data.toString()))
    .catch(error => console.log("ERROR",error))

console.log("DONE REALLY?")