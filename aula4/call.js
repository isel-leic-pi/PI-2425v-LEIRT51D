"use strict"

function f1() {
    console.log(this)
}

f1()

const obj = {
    a : "STR",
    m: f1
  }
  
obj.m()

function Student(name, number){
    console.log(this)
    this.name = name
    this.number = number
    console.log(this)
}

const std = new Student("Filipe", 1234)

function f2(p1, p2){
    console.log(`p1 = ${p1} p2 = ${p2}`)
    console.log(`this =`, this)
}

f2.call(std,1,2)
f2.apply(std,[1,2])
