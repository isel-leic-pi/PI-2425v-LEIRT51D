
//https://httpbin.org/delay/t
function printGetWithDelay(t){
    return fetch('https://httpbin.org/delay/' + t) 
        .then(resp => resp.json())
        .then(body => console.log(body))
}

//printGetWithDelay(1)

function printGoodJokes(){
    return fetch("https://api.sampleapis.com/jokes/goodJokes") 
        .then(resp => {
            console.log(resp.status)
            return resp.json()
        }) 
        .then(data => console.log(data))
}

//printGoodJokes()

function getTeam(){
    return fetch("https://v3.football.api-sports.io/teams?id=228",
        {
            headers: {
              "x-apisports-key" : ""
            }
        }) 
        .then(resp => resp.json()) 
        .then(data => console.log("Data",data))
}

getTeam()
    .then(()=>console.log("Done"))
    

const json = ' {"name":"Filipe" , "text" : "txt" }'
const parsed = JSON.parse(json)
const inString = JSON.stringify(parsed)
console.log(parsed)
console.log(inString)