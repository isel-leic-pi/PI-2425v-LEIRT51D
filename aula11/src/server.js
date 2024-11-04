import express from 'express'
import cors from 'cors'
import webapi from './tasks_webapi.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/tasks", webapi.getTasks)
app.get("/tasks/:taskId", webapi.getTaskById)
app.post("/tasks", webapi.createTask)

app.listen(8080, ()=>console.log("Listening..."))