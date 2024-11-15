import services from './tasks_service.js'

function getTasks(req, resp){
    console.log(req.query)
    services.getTasks(req.header('Authorization'))
        .then(tasks => resp.json(tasks))
        .catch(error => {
            if(error.code == "e2") resp.status(401).json(error.message)
            else resp.status(500).json("An internal error occurred. Contact your system administrator") 
        })
}

function getTaskById(req, resp){
    console.log(req.params)
    services.getTaskById(req.params.taskId, req.header('Authorization'))
        .then(task => resp.json(task))
        if(error.code == "e3") resp.status(401).json(error.message)
        else resp.status(500).json("An internal error occurred. Contact your system administrator") 
   
}

function createTask(req, resp){
    console.log(req.body)
    services.createTask(req.body.text, req.header('Authorization'))
        .then(task => resp.status(201).json(task))
    
}

export const webapi ={
    getTasks,
    getTaskById,
    createTask
}

export default webapi