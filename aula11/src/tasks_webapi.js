import services from './tasks_service.js'

function getTasks(req, resp){
    console.log(req.query)
    resp.json(services.getTasks(req.header('Authorization')))
}

function getTaskById(req, resp){
    console.log(req.params)
    resp.json(services.getTaskById(req.params.taskId, req.header('Authorization')))
}

function createTask(req, resp){
    console.log(req.body)
    const task = services.createTask(req.body.text, req.header('Authorization'))
    resp.status(201).json(task)
}

export const webapi ={
    getTasks,
    getTaskById,
    createTask
}

export default webapi