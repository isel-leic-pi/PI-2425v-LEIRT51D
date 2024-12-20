import express from 'express'

import authUiFunction from './auth_webUi.js'
import { webUiFunction } from './tasks_webUi.js'
import {webApiFunction} from './tasks_webapi.js'
import {servicesFunction} from './tasks_service.js'
import tasksData from './tasks_data_mem.js'
//import tasksData from './tasks_data_elastic.js'

import expressSession from 'express-session'
import passport from 'passport'

const tasksService =  servicesFunction(tasksData)
const tasksWebApi = webApiFunction(tasksService)
const tasksWebUi = webUiFunction(tasksService)
const authWebUi = authUiFunction(tasksService)

const app = express()

app.use(expressSession({secret : 'IPW 2023', resave : true, saveUninitialized : true}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))

app.set('view engine', 'hbs');

app.get("/api/tasks", tasksWebApi.getTasks)
app.get("/api/tasks/:taskId", tasksWebApi.getTaskById)
app.post("/api/tasks", tasksWebApi.createTask)
app.put("/api/tasks/:taskId", tasksWebApi.updateTask)

app.get("/login", authWebUi.getLogin)
app.post("/logout", authWebUi.postLogout)
app.post("/login", authWebUi.postLogin)

app.get("/", tasksWebUi.home)
app.get("/tasks", tasksWebUi.getTasks)
app.get("/tasks/:taskId", tasksWebUi.getTaskById)
app.post("/tasks", tasksWebUi.createTask)
app.post("/tasks/:taskId/delete", tasksWebUi.deleteTask)

app.get("/createTask", tasksWebUi.createTaskView)
app.get("/tasks/:taskId/update", tasksWebUi.updateTaskView)

app.listen(8080, ()=>console.log("Listening..."))