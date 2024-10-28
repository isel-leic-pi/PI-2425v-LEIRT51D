import service from "./tasks-service.js"

function getTasks(req, resp){
    console.log(req.query)
    resp.json(service.getTasks())
}

function getTaskById(req, resp){
    console.log(req.params)
    resp.json(service.getTaskById(req.params.taskId))
}

function createTask(req, resp){
    console.log(req.body)
    const task = service.createTask(req.body.text)
    resp.status(201).json(task)
}

export const webapi = {
    getTasks,
    getTaskById,
    createTask
}

export default webapi