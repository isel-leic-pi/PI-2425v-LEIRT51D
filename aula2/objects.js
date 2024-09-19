const std1 = {studentName : "Filipe" , number : 12}

console.log(std1)

std1.email = "ffreitas@cc.isel.ipl.pt"
console.log(std1)

delete std1.studentName
console.log(std1)

function createStudent(name, number){
    const std = {}
    std.studentName = name
    std.number = number
    return std
}

const std2 = createStudent("std2", 2)
const std3 = createStudent("std3", 3)

console.log(std2)
console.log(std3)

std2.email = "ffreitas@cc.isel.ipl.pt"

console.log(std2)
console.log(std3)

console.log(std2.studentName)
console.log(std2["studentName"])

function showProps(obj)
{
    for(let p in obj)
    {
        console.log(p + " : " + obj[p])
    }
}

showProps(std2)