fetch=myfetch

function myfetch(url){
    const obj = {}
    obj.json = function(){
        return Promise.resolve(20)
    }
    return Promise.resolve(obj)
}

async function getTeam(){
    const resp = await fetch("https://v3.football.api-sports.io/teams?id=228",
        {
            headers: {
              "x-apisports-key" : ""
            }
        }) 
    const data = await resp.json() 
    console.log("Data",data)
}

getTeam()
    .then(()=>console.log("Done"))