function add(a, b){
    return a + b
}

function processResult(res){
    console.log(res)
}

console.log("Before Add")
const result = add(2,3)
console.log("After Add")
processResult(result)

function addCB(a, b, cb){
    cb(a+b)
}

console.log("Before AddCB")
addCB(2,3, processResult)
console.log("After AddCB")


function addAsync2(a, b, cb){
    setTimeout(()=>cb(a+b), 2000)
}

function addAsync5(a, b, cb){
    setTimeout(()=>cb(a+b), 5000)
}

console.log("Before AddAsync")
addAsync5(2,3, processResult)
console.log("After AddAsync")

console.log("Before AddAsync")
addAsync2(3,3, processResult)
console.log("After AddAsync")

console.log("Done")

for(;;);