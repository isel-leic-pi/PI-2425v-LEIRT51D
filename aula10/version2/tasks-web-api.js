
const tasks = [
    {id : 1, text : "study tds"},
    {id : 2, text : "study isi"},
]

let nextTaskId = 3

function getTasks(req, resp){
    console.log(req.query)
    resp.json(tasks)
}

function getTaskById(req, resp){
    console.log(req.params)
    resp.json(tasks.find( t => t.id == req.params.taskId))
}

function createTask(req, resp){
    console.log(req.body)
    const task = {id : nextTaskId , text : req.body.text}
    tasks.push(task)
    ++nextTaskId
    resp.status(201).json(task)
}

export const webapi = {
    getTasks,
    getTaskById,
    createTask
}

export default webapi