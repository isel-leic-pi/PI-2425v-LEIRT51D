import express from 'express'

import { webUiFunction } from './tasks_webUi.js'
import {webApiFunction} from './tasks_webapi.js'
import {servicesFunction} from './tasks_service.js'
import tasksData from './tasks_data_mem.js'
//import tasksData from './tasks_data_elastic.js'


const tasksService =  servicesFunction(tasksData)
const tasksWebApi = webApiFunction(tasksService)
const tasksWebUi = webUiFunction(tasksService)

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))

app.set('view engine', 'hbs');

app.get("/api/tasks", tasksWebApi.getTasks)
app.get("/api/tasks/:taskId", tasksWebApi.getTaskById)
app.post("/api/tasks", tasksWebApi.createTask)
app.put("/api/tasks/:taskId", tasksWebApi.updateTask)


app.get("/", tasksWebUi.home)
app.get("/tasks", tasksWebUi.getTasks)
app.get("/tasks/:taskId", tasksWebUi.getTaskById)
app.post("/tasks", tasksWebUi.createTask)
app.post("/tasks/:taskId/delete", tasksWebUi.deleteTask)

app.get("/createTask", tasksWebUi.createTaskView)
app.get("/tasks/:taskId/update", tasksWebUi.updateTaskView)

app.listen(8080, ()=>console.log("Listening..."))