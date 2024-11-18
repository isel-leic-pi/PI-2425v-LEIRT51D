import express from 'express'
import {webApiFunction} from './tasks_webapi.js'
import {servicesFunction} from './tasks_service.js'
import tasksData from './tasks_data_mem.js'
//import tasksData from './tasks_data_elastic.js'


const tasksService =  servicesFunction(tasksData)
const tasksWebApi = webApiFunction(tasksService)

const app = express()

app.use(express.json())


app.get("/tasks", tasksWebApi.getTasks)
app.get("/tasks/:taskId", tasksWebApi.getTaskById)
app.post("/tasks", tasksWebApi.createTask)

app.listen(8080, ()=>console.log("Listening..."))