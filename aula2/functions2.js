function f1(y){

    console.log("Start F1")

    function f2(x){
        console.log("F2 - x - " + x + "y - " + y)
    }

    console.log("End F1")
    return f2
}

const f3 = f1(222)
f3(1)
f3(2)

function x(m){
    return function(i){return i * m}
}

const m1 = x(10)
const m2 = x(20)

console.log(m1(1))
console.log(m2(2))


