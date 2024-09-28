function Student(name, number ){
    console.log(this)
    this.number = number
    this.name = name
    console.log(this)
}

const std1 = new Student("Filipe", 1234)
const std2 = new Student("Joao", 4321)

//std1.f = function() {console.log("F")}
//Student.prototype.f = function() {console.log("F")}
Object.prototype.f = function() {console.log("F")}


std1.f() 
std2.f() 

const ar = [1,2]

ar.f()

//const s = "STR" 
//console.log(s.surround("["  ,  "]"))

//[STR]

//......

console.log(Date())
console.log("X")


