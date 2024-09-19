function f1(){
    console.log("Hello World")
}

f1()

function f2(){
    return "Hello World"
}

console.log(f2())

const f = function() {return "Hello World"}

console.log(f())

console.log(f2.name)

f2.x="PROP X"
f2.m=function(){return "FUNC M"}

console.log(f2.x)
console.log(f2.m())

function f4(p1,p2,p3,p4){
    console.log("Start f4")
    console.log("p1 = " + p1)
    console.log("p2 = " + p2)
    console.log("p3 = " + p3)
    console.log("p4 = " + p4)
}

f4()
f4(1)
f4(1,2)
f4(1,2,3)
f4(1,2,3,4)
f4(1,2,3,4,5)

function f5(p1, ...rest){
    console.log("Start f5")
    console.log("p1 = " + p1)
    console.log("rest = " + rest.length)
    console.log("rest[0] = " + rest[0])
    console.log("rest[1] = " + rest[1])

}

f5()
f5(1)
f5(1,2)

const newObj = {}
newObj.f=function(){console.log("Function - F")}
newObj.str="STR"

function showProps(obj)
{
    for(let p in obj)
    {
        if(obj[p] instanceof Function){
            const f = obj[p]
            f()
        }else{
            console.log(p + " : " + obj[p])
        } 
    }
}

function add(a,b){return a+b}
function sub(a,b){return a-b}
function mul(a,b){return a*b}
function div(a,b){return a/b}

function executeAndPrint(a,b,f){
    const res = f(a,b)
    console.log("Resultado " +res)
}

executeAndPrint(5,3,add)
executeAndPrint(5,3,sub)
executeAndPrint(5,3,mul)
executeAndPrint(6,2,div)





