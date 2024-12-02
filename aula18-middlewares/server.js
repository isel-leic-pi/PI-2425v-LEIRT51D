import express from 'express'

const app = express()

app.use(middleware1)
app.use(middleware2)
app.use(middleware3)
app.get("/", handler)
app.listen(8080, ()=>console.log("Listening..."))

function middleware1(req, resp, next){
    console.log("MID1")
    console.log(new Date(), req.method )
    next()
}

function middleware2(req, resp, next){
    console.log("MID2")
    const token = req.get("authorization")
    if(!token) return resp.status(401).json("Not Authorize")
    req.token = token  
    next()
}

function middleware3(req, resp, next){
    console.log("MID3")
    console.log(req.token)
    next()
}



function handler(req,resp){
    console.log("Handler")
    resp.json("HANDLER")
}

