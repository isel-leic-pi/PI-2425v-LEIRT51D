import express from 'express'
import webApi from 'tasks-web-api.js'

const app = express()

app.use(express.json())

app.get("/tasks", webApi.getTasks)
app.get("/tasks/:taskId", webApi.getTaskById)
app.post("/tasks", webApi.createTask)

app.listen(8080, ()=>console.log("Listening..."))
