//npm install supertest --save-dev

import request from 'supertest'
import express from 'express'
import {expect} from 'chai';
import data from '../tasks_data_mem.js'
import {servicesFunction} from '../tasks_service.js'
import {webApiFunction} from '../tasks_webapi.js'


//TODO setup function
const services = servicesFunction(data)
const webapi = webApiFunction(services)

const token = "3fa85f64-5717-4562-b3fc-2c963f66afa6"

const app = express()
app.use(express.json())
app.get("/api/tasks", webapi.getTasks)
app.get("/api/tasks/:taskId", webapi.getTaskById)
app.post("/api/tasks", webapi.createTask)


describe('API Tests', () => {
    it('get task with id 1', () => {
        return request(app)
          .get('/api/tasks/1')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(response => expect(response.body).deep.equal({id : 1, text : "study tds", userId : 11}))
    })
    ,
    it('post api', () => {
        return request(app)
          .post('/api/tasks')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .set('Authorization', token)
          .send({text : "Task3"})
          .expect(201)
          .then(response => expect(response.body.text).equal("Task3"))
    })
});