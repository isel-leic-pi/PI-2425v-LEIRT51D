import express from 'express'

const idCount = 2

const students = [
    {id: 1 ,name : "Filipe", email : "f@mail.pt"},
    {id: 2 ,name : "Joao", email : "j@mail.pt"},
}


const app = express()

app.use(express.json())

app.get("/", rootHandler)
app.get("/students", getStudents)
app.get("/students/:number", getStudentsById)
app.post("/students", postStudents)

function postStudents(request, response){
    console.log(request.method)
    console.log(request.url)
    console.log(request.body)

    response.status(201).json("POST Students JSON")
}

function getStudentsById(request, response){
    console.log(request.method)
    console.log(request.url)
    console.log(request.params)

    response.json({name: "Filipe ", email : "ggags@mail.pt"})
}

function rootHandler(request, response){
    console.log(request.method)
    console.log(request.url)

    response.send("HELLO WORLD")
}

function getStudents(request, response){
    console.log(request.method)
    console.log(request.url)
    console.log(request.query)

    response.json("STUDENTS JSON")

}

app.listen("9000",() => console.log("Listening...."))