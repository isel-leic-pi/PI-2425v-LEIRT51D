function changeConsoleLog(){
    const oldConsoleLog = console.log
    console.log=function(p){
        oldConsoleLog.call(console, Date() + "-" + p)
    }
}
changeConsoleLog()

console.log("Y")

